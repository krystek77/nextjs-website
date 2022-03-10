import React from 'react';

/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX350/FX-350
 */

import { useRouter } from 'next/router';
import HeadMetaTags from '../../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../../components/Banner/Banner';
import Title from '../../../../components/Title/Title';
import PageIndicator from '../../../../components/Banner/PageIndicator/PageIndicator';

function FX350() {
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
          content="Seria FX o załadunku od 35 kg do 60 kg"
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator
          label="pralnicowirówki wysokoobrotowe FX"
          variant="red"
        />
      </Banner>
      <main>
        <h2 style={{ textAlign: 'center' }}>MODEL: {router.query.model}</h2>
      </main>
    </React.Fragment>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: [
      { params: { model: 'FX-350' } },
      { params: { model: 'FX-450' } },
      { params: { model: 'FX-600' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default FX350;
