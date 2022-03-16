import React from 'react';

/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX350/FX-350
 */

import HeadMetaTags from '../../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../../components/Banner/Banner';
import Title from '../../../../components/Title/Title';
import PageIndicator from '../../../../components/Banner/PageIndicator/PageIndicator';
import ProductInfo from '../../../../containers/ProductInfo/ProductInfo';
import IconLink from '../../../../components/IconLink/IconLink';
import ProductData from '../../../../containers/ProductData/ProductData';
import ProductControls from '../../../../containers/ProductControls/ProductControls';
import Leaflets from '../../../../containers/Leaflets/Leaflets';
import CascadeDrum from '../../../../containers/CascadeDrum/CascadeDrum';

import { useRouter } from 'next/router';
import { cutURL } from '../../../../lib';

function FX350({ washerExtractor }) {
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
        title="Pralnicowirówki wolnostojące wysokoobrotowe"
        description="Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga najlepszych z najlepszych rozwiązań pralniczych. Zaprojektowane, aby zapewnić najniższe koszty zużycia wody
        i energii, wysoką wydajność i przyjazną obsługę. Innowacyjne technologie: CascadeDrum, supereco, Xcontrol FlEX plus czy TRACE-TECH, czynią ją bezkonkurencyjne na rynku."
        og_title="Pralnicowirówki wolnostojące wysokoobrotowe"
        twitter_title="Pralnicowirówki wolnostojące wysokoobrotowe"
      />
      <Banner classes="banner__washerExtractors_FX350">
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
          description={description}
          available_models={available_models}
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
      <CascadeDrum />
    </React.Fragment>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { model: 'FX-350' } },
      // { params: { model: 'FX-450' } },
      // { params: { model: 'FX-600' } },
    ],
    fallback: false,
  };
}

import { products } from '../../../../constants/products';
export async function getStaticProps(context) {
  const washerExtractor = products.find(
    (item) => item.model === context.params.model
  );
  return {
    props: { washerExtractor },
  };
}

export default FX350;
