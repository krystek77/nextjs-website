/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX/FX-105
 */

import React from 'react';
import PageLayout from '../../../../components/Layout/PageLayout';
import HeadMetaTags from '../../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../../components/Banner/Banner';
import Title from '../../../../components/Title/Title';
import PageIndicator from '../../../../components/Banner/PageIndicator/PageIndicator';
import ProductInfo from '../../../../containers/ProductInfo/ProductInfo';
import IconLink from '../../../../components/IconLink/IconLink';
import ProductData from '../../../../containers/ProductData/ProductData';
import ProductControls from '../../../../containers/ProductControls/ProductControls';
import Leaflets from '../../../../containers/Leaflets/Leaflets';
import Extreme from '../../../../containers/Extreme/Extreme';
import ECO3 from '../../../../containers/ECO3/ECO3';
import CascadeDrum from '../../../../containers/CascadeDrum/CascadeDrum';
import FXDesign from '../../../../containers/FXDesign/FXDesign';
import Friendly from '../../../../containers/Friendly/Friendly';
import { cutURL } from 'lib';
import { useRouter } from 'next/router';
import { getModels } from 'utils/requests';
import { sort } from 'utils/sortAvailableModels';

function FX({ item }) {
  const router = useRouter();
  const {
    model,
    title,
    category,
    description,
    line,
    available_models,
    slider,
    isVertical,
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
      <Banner classes="banner__washerExtractors_FX banner_height_auto">
        <Title variant="h1" content={title} classes="title_bg_white_red" />
        <PageIndicator label={category} variant="red" />
      </Banner>
      <main>
        <ProductInfo
          model={model}
          line={line}
          category={category}
          available_models={sort(available_models)}
          slider={slider}
          vertical={isVertical}
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
      {/** only for fx 10.5 - 28 kg */}
      <Extreme />
      <ECO3 />
      <CascadeDrum />
      <Friendly />
      <FXDesign />
      {/** end only for fx 10.5 - 28 kg */}
    </React.Fragment>
  );
}

FX.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default FX;

const TYPE_NAME = 'FX';

export async function getStaticPaths() {
  const data = await getModels('pralnicowirówki');
  const models = data[0].subcategories
    .reduce((acc, item) => {
      const category = item.title;
      const types = item.types
        .map((item) => {
          return {
            category,
            line: item.line,
            general_description: item.description,
            models: item.models,
            name: item.name,
          };
        })
        .filter((item) => item.name === TYPE_NAME);
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
  const data = await getModels('pralnicowirówki');
  const model = data[0].subcategories
    .reduce((acc, item) => {
      const category = item.title;
      const types = item.types
        .map((item) => {
          return {
            category,
            line: item.line,
            general_description: item.description,
            models: item.models,
            name: item.name,
          };
        })
        .filter((item) => item.name === TYPE_NAME);
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
