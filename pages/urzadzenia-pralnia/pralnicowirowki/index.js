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
import { getCategoryByName } from 'utils/requests';

function WasherExtractors({ items }) {
  const { title, description, name, subcategories } = items[0];
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        description={description}
        twitter_title={title}
      />
      <Banner classes="banner__washerExtractors">
        <Title
          variant="h1"
          content={title}
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator label={name} variant="red" />
      </Banner>
      <main>
        <Tabs data={{ subcategories: subcategories, name }} initialState={0} />
      </main>
    </React.Fragment>
  );
}

WasherExtractors.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default WasherExtractors;

export async function getStaticProps() {
  const items = await getCategoryByName('pralnicowirówki');
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
