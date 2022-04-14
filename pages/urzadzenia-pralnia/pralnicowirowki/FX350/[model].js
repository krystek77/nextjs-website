import React from 'react';

/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX350/FX-350
 */

import HeadMetaTags from '../../../../components/HeadMetaTags/HeadMetaTags';
import PageLayout from '../../../../components/Layout/PageLayout';
import Banner from '../../../../components/Banner/Banner';
import Title from '../../../../components/Title/Title';
import PageIndicator from '../../../../components/Banner/PageIndicator/PageIndicator';
import ProductInfo from '../../../../containers/ProductInfo/ProductInfo';
import IconLink from '../../../../components/IconLink/IconLink';
import ProductData from '../../../../containers/ProductData/ProductData';
import ProductControls from '../../../../containers/ProductControls/ProductControls';
import Leaflets from '../../../../containers/Leaflets/Leaflets';
import { cutURL } from 'lib';
import { useRouter } from 'next/router';
import { sort } from 'utils/sortAvailableModels';

function FX350({ item }) {
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
      <Banner classes="banner__washerExtractors_FX350 banner_height_auto">
        <Title variant="h1" content={title} classes="title_bg_white_red" />
        <PageIndicator label={category} variant="red" />
      </Banner>
      <main>
        <ProductInfo
          model={model}
          line={line}
          category={category}
          description={description}
          available_models={sort(available_models)}
          slider={slider}
          vertical={isSliderVertical}
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

FX350.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default FX350;

const TYPE_NAME = 'FX350';
const CATEGORY = 'pralnicowirówki';
import { model, modelsPaths } from 'utils/models';
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
