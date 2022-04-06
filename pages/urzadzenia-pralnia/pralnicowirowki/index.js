/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki
 */
import React from 'react';
import PageLayout from '../../../components/Layout/PageLayout';
import HeadMetaTags from '../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../components/Banner/Banner';
import Title from '../../../components/Title/Title';
import PageIndicator from '../../../components/Banner/PageIndicator/PageIndicator';
import Tabs from '../../../containers/Tabs/Tabs';
import { washerextractors } from '../../../constants/washerextractors';
import { connectMongoDB } from 'utils/database';
import styles from './index.module.css';

function WasherExtractors(props) {
  const { title, category, series } = washerextractors;
  const withCategory = series.map((item) => ({
    ...item,
    family: [...item.family],
    category: category,
  }));
  console.log(props.items);
  return (
    <React.Fragment>
      <HeadMetaTags
        title="Innowacyjne pralnicowirówki przemysłowe"
        description="Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga najlepszych
        z najlepszych rozwiązań pralniczych. Zaprojektowane, aby zapewnić najniższe koszty zużycia wody
        i energii, wysoką wydajność i przyjazną obsługę. Innowacyjne technologie: CascadeDrum,
        supereco, Xcontrol FlEX plus czy TRACE-TECH, czynią ją bezkonkurencyjne na rynku."
        og_title="Innowacyjne pralnicowirówki wysokoobrotowe"
        twitter_title="Innowacyjne pralnicowirówki przemysłowe"
      />
      <Banner classes="banner__washerExtractors">
        <Title
          variant="h1"
          content={title}
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator label={category} variant="red" />
      </Banner>
      <main className={styles.washerExtractors}>
        <Tabs data={withCategory} initialState={0} />
      </main>
    </React.Fragment>
  );
}

WasherExtractors.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default WasherExtractors;

export async function getStaticProps() {
  let items = [];
  try {
    const { database: db } = await connectMongoDB();
    const categories = db.collection('categories');
    items = await categories
      .aggregate([
        {
          $lookup: {
            from: 'subcategories',
            localField: '_id',
            foreignField: 'categoryID',
            as: 'subcategories',
            pipeline: [
              {
                $lookup: {
                  from: 'types',
                  localField: '_id',
                  foreignField: 'subCategoryID',
                  as: 'types',
                },
              },
            ],
          },
        },
        { $match: { name: 'pralnicowirówki' } },
      ])
      .toArray();
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {
      washerextractors: washerextractors,
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
