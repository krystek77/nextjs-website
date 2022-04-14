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
import { sort } from 'utils/sortAvailableModels';
import { model, modelsPaths } from 'utils/models';

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
const CATEGORY = 'pralnicowirówki';

export async function getStaticPaths() {
  const paths = await modelsPaths(CATEGORY, TYPE_NAME);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const oneModel = await model(CATEGORY, context, TYPE_NAME);
  return {
    props: {
      item: JSON.parse(JSON.stringify(oneModel)),
    },
  };
}
