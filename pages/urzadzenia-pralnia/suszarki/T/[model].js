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
import { sort } from 'utils/sortAvailableModels';

function TDryers({ item }) {
  const router = useRouter();
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
  } = item;
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        description={description}
        twitter_title={title}
      />
      <Banner classes="banner__dryer_T banner_height_auto">
        <Title
          variant="h1"
          content={title}
          classes="title_maxWidth_960 title_bg_white_primary"
        />
        <PageIndicator label={category} variant="primary" />
      </Banner>
      <main>
        <ProductInfo
          model={model}
          line={line}
          category={category}
          available_models={sort(available_models)}
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
  const data = await getModels('suszarki');
  const models = data[0].subcategories
    .reduce((acc, item) => {
      const category = item.title;
      const types = item.types.map((item) => {
        return {
          category,
          line: item.line,
          general_description: item.description,
          models: item.models,
        };
      });
      acc.push(...types);
      return acc;
    }, [])
    .reduce((acc, item) => {
      if (item.models.length !== 0) {
        let product = null;
        let available_models = [];
        for (const model of item.models) {
          const title = model.model;
          const subtitle = model.label;
          available_models.push({ title, subtitle });
        }
        for (const model of item.models) {
          product = {
            category: item.category,
            line: item.line,
            general_description: item.general_description,
            ...model,
            available_models,
          };
          acc.push(product);
        }
      }
      return acc;
    }, []);
  const paths = models.map((item) => {
    return {
      params: { model: item.model },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const data = await getModels('suszarki');
  const model = data[0].subcategories
    .reduce((acc, item) => {
      const category = item.title;
      const types = item.types.map((item) => {
        return {
          category,
          line: item.line,
          general_description: item.description,
          models: item.models,
        };
      });
      acc.push(...types);
      return acc;
    }, [])
    .reduce((acc, item) => {
      if (item.models.length !== 0) {
        let product = null;
        let available_models = [];
        for (const model of item.models) {
          const title = model.model;
          const subtitle = model.label;
          available_models.push({ title, subtitle });
        }
        for (const model of item.models) {
          product = {
            category: item.category,
            line: item.line,
            general_description: item.general_description,
            ...model,
            available_models,
          };
          acc.push(product);
        }
      }
      return acc;
    }, [])
    .find((item) => item.model === context.params.model);
  return {
    props: {
      item: JSON.parse(JSON.stringify(model)),
    },
  };
}
