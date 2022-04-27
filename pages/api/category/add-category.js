/**
 * POST: /api/category/add-category
 */
import fs from 'fs';
import path from 'path';
import { connectMongoDB } from 'utils/database';

const createCategoryContent = (categoryName) => {
  return `
import React from 'react';
import PageLayout from 'components/Layout/PageLayout';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import PageIndicator from 'components/Banner/PageIndicator/PageIndicator';
import Tabs from 'containers/Tabs/Tabs';
import { getCategoryByName } from 'utils/requests';
import SiteInProgress from 'containers/SiteInProgress/SiteInProgress';
import { useRouter } from 'next/router';

function CategoryPage({ items }) {
  const router = useRouter();
  if (items.length) {
    const { title, description, name, subcategories } = items[0];
    return (
      <React.Fragment>
        <HeadMetaTags
          title={title}
          description={description}
          twitter_title={title}
        />
        <Banner classes="">
          <Title
            variant="h1"
            content={title}
            classes="title_maxWidth_960 title_bg_white_red"
          />
          <PageIndicator label={name} variant="red" />
        </Banner>
        <main>
          <Tabs
            data={{ subcategories: subcategories, name }}
            initialState={0}
          />
        </main>
      </React.Fragment>
    );
  }
  return <SiteInProgress page={router.pathname} />;
}

CategoryPage.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default CategoryPage;

export async function getStaticProps() {
  const items = await getCategoryByName('${categoryName}');
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
  `;
};

const OPL_DIRECTORY = path.join(process.cwd(), 'pages', 'urzadzenia-pralnia');
const VEND_DIRECTORY = path.join(
  process.cwd(),
  'pages',
  'urzadzenia-pralnia-samoobslugowa'
);

export default async function addCategory(req, res) {
  const { name, title, description, image, path, label } = req.body;
  const { database: db } = await connectMongoDB();
  const NAME = 'pralnicowirowka';
  const vend = true;
  const categoryCollection = db.collection('categories');
  const MAIN_DIRECTORY = vend
    ? `${VEND_DIRECTORY}/${NAME}`
    : `${OPL_DIRECTORY}/${NAME}`;
  try {
    const result = await categoryCollection.findOne({ name: NAME });
    if (result)
      return res
        .status(200)
        .json({ message: `Kategoria o podanej nazwie ${NAME} już istnieje` });
    // not founded in database
    //create category in database
    await categoryCollection.insertOne({
      name: NAME,
      title: '',
      description: '',
      image: '',
      path: '',
      vend: vend,
      label: '',
    });
    if (fs.existsSync(MAIN_DIRECTORY)) {
      throw new Error(
        `Kategoria o podanej nazwie ${NAME} już istnieje w systemie plików`
      );
    } else {
      fs.mkdir(MAIN_DIRECTORY, (error) => {
        if (error) {
          throw new Error(error.message);
        }
        //create index.js
        fs.appendFile(
          `${MAIN_DIRECTORY}/index.js`,
          createCategoryContent(NAME),
          (error) => {
            if (error) {
              throw new Error('Nie można dodać pliku indexu');
            }
          }
        );
        return res.status(201).json('Katalog utworzony pomyślnie');
      });
    }
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}
