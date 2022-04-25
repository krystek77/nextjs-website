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
import { sort } from 'utils/sortAvailableModels';
import { model, modelsPaths } from 'utils/models';

function DX({ item }) {
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
    </React.Fragment>
  );
}
DX.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
DX.defaultProps = {
  model: 'DX-16',
  title: 'Some awesome title',
  category: 'Category name',
  description: 'Some description',
  line: 'Line name',
  available_models: [],
  slider: [],
  isVertical: false,
  features: [],
  parameters: [],
  controls: [],
  leaflets: [],
};
export default DX;

const TYPE_NAME = 'DX';
const CATEGORY = 'suszarki';
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
