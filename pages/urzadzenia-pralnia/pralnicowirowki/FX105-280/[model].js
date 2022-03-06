/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX105-280/FX105
 */

import React from "react";
import HeadMetaTags from "../../../../components/HeadMetaTags/HeadMetaTags";
import Banner from "../../../../components/Banner/Banner";
import Title from "../../../../components/Title/Title";
import PageIndicator from "../../../../components/Banner/PageIndicator/PageIndicator";
import ProductInfo from "../../../../containers/ProductInfo/ProductInfo";

function FX105280() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title='Pralnicowirówki wolnostojące wysokoobrotowe'
        description='Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga najlepszych
    z najlepszych rozwiązań pralniczych. Zaprojektowane, aby zapewnić najniższe koszty zużycia wody
    i energii, wysoką wydajność i przyjazną obsługę. Innowacyjne technologie: CascadeDrum,
    supereco, Xcontrol FlEX plus czy TRACE-TECH, czynią ją bezkonkurencyjne na rynku.'
        og_title='Pralnicowirówki wolnostojące wysokoobrotowe'
        twitter_title='Pralnicowirówki wolnostojące wysokoobrotowe'
      />
      <Banner classes='banner__washerExtractors_FX'>
        <Title variant='h1' content='Seria FX o załadunku od 6.5 kg do 32 kg' classes='title_maxWidth_960 title_bg_white_red' />
        <PageIndicator label='pralnicowirówki wysokoobrotowe FX' variant='red' />
      </Banner>
      <main>
        <ProductInfo />
      </main>
    </React.Fragment>
  );
}
export default FX105280;
