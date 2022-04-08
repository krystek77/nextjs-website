import React from 'react';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import PageIndicator from 'components/Banner/PageIndicator/PageIndicator';
import PageLayout from 'components/Layout/PageLayout';

function TDryers({ items }) {
  const {
    model,
    title,
    category,
    description,
    line,
    available_models,
    slider,
    isSliderVertical,
    features,
    parameters,
    controls,
    leaflets,
  } = items;
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
        <PageIndicator label={category} variant="red" />
      </Banner>
      <main>THUMBLE DRYERS DETAILS PAGE</main>
    </React.Fragment>
  );
}
TDryers.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
TDryers.defaultProps = {
  model: 'T-16',
  title: 'Some awesome title',
  category: 'Category name',
  description: 'Some description',
  line: 'Line name',
  available_models: [],
  slider: [],
  isSliderVertical: false,
  features: [],
  parameters: [],
  controls: [],
  leaflets: [],
};
export default TDryers;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { model: 'T-11' },
      },
      {
        params: { model: 'T-13' },
      },
      {
        params: { model: 'T-16' },
      },
      {
        params: { model: 'T-24' },
      },
      {
        params: { model: 'T-35' },
      },
      {
        params: { model: 'TX-9' },
      },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const model = context.params.model;
  return {
    props: {
      items: {},
    },
  };
}
