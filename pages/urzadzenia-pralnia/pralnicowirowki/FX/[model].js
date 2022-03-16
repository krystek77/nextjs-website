/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX/FX-105
 */

import React from 'react';
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

import { useRouter } from 'next/router';
import { cutURL } from '../../../../lib';

function FX({ washerExtractor }) {
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
  } = washerExtractor;
  const router = useRouter();

  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        description={description}
        twitter_title={title}
      />
      <Banner classes="banner__washerExtractors_FX">
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

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { model: 'FX-65' } },
      { params: { model: 'FX-80' } },
      // { params: { model: 'FX-105' } },
      // { params: { model: 'FX-135' } },
      // { params: { model: 'FX-180' } },
      // { params: { model: 'FX-240' } },
      // { params: { model: 'FX-280' } },
    ],
    fallback: false,
  };
}

import { products } from '../../../../constants/products';
export async function getStaticProps(context) {
  //fetch data for a single washer extractors
  // console.log(context);
  // console.log(context.params.model);
  const washerExtractor = products.find(
    (item) => item.model === context.params.model
  );

  return {
    props: { washerExtractor },
  };
}
export default FX;
