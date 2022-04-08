import React from 'react';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import PageIndicator from 'components/Banner/PageIndicator/PageIndicator';
import ProductInfo from 'containers/ProductInfo/ProductInfo';
import IconLink from 'components/IconLink/IconLink';
import ProductData from 'containers/ProductData/ProductData';
import ProductControls from 'containers/ProductControls/ProductControls';
import Leaflets from 'containers/Leaflets/Leaflets';
import PageLayout from 'components/Layout/PageLayout';
import { cutURL } from 'lib';
import { useRouter } from 'next/router';
import { getModels } from 'utils/requests';
function TDryers({ items, data }) {
  const router = useRouter();
  console.log(router);
  console.log(data);
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
      <main>
        <ProductInfo
          model={model}
          line={line}
          category={category}
          available_models={available_models}
          slider={slider}
          vertical={isSliderVertical}
          description={description}
        />
        <IconLink
          to={cutURL(router, -2)}
          src="arrow_back"
          alt="arrow back"
          width="16"
          height="11"
          label="wróć"
        />
        <ProductData features={features} parameters={parameters} />
        <ProductControls controls={controls} />
        <Leaflets leaflets={leaflets} />
      </main>
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
  const data = await getModels('suszarki');
  console.log(data[0].subcategories);
  const result = data[0].subcategories.map((item, index) => {
    const category = item.title;

    return {
      model: 'T-16',
      title: 'Some awesome title',
      category,
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
  });
  console.log('WYNIK', result);
  return {
    props: {
      data: JSON.parse(JSON.stringify(data[0].subcategories)),
      items: {
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
      },
    },
  };
}
