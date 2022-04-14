/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FS/FS-800
 */
import React from 'react';
import PageLayout from '../../../../components/Layout/PageLayout';
import { useRouter } from 'next/router';
import HeadMetaTags from '../../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../../components/Banner/Banner';
import Title from '../../../../components/Title/Title';
import PageIndicator from '../../../../components/Banner/PageIndicator/PageIndicator';
import { products } from '../../../../constants/products';

function FS({ washerExtractor }) {
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
      <Banner classes="banner__washerExtractors_FS800 banner_height_auto">
        <Title
          variant="h1"
          content="Pralnicowirówka wolnsotojąca wysokoobrotowa, FS-800"
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator label="pralnicowirówki wysokoobrotowe" variant="red" />
      </Banner>
      <main>
        <h2 style={{ textAlign: 'center' }}>MODEL: {router.query.model}</h2>
      </main>
    </React.Fragment>
  );
}

FS.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default FS;

export async function getStaticPaths(context) {
  return {
    paths: [
      // { params: { model: 'FS-800' } },
      // { params: { model: 'FS-1000' } },
      // { params: { model: 'FS-1200' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const washerExtractor = products.find(
    (item) => item.model === context.params.model
  );
  return {
    props: {
      washerExtractor: washerExtractor,
    },
  };
}
