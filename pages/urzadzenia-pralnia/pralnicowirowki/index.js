/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki
 */
import React from 'react';
import HeadMetaTags from '../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../components/Banner/Banner';
import styles from './index.module.css';
import Title from '../../../components/Title/Title';
import PageIndicator from '../../../components/Banner/PageIndicator/PageIndicator';
import Tabs from '../../../containers/Tabs/Tabs';

const data = [
  {
    id: 1,
    title: 'Pralnicowirówki',
    subtitle: 'wolnostojące wysokoobrotowe',
    content: [
      {
        path: 'urzadzenia-pralnia/pralnicowirowki/FX/FX-65',
        label: 'FX: 8-32 kg',
        image: 'fx.webp',
      },
      {
        path: 'urzadzenia-pralnia/pralnicowirowki/FX350/FX-350',
        label: 'FX: 35-60 kg',
        image: 'fx350.webp',
      },
      {
        path: 'urzadzenia-pralnia/pralnicowirowki/FS/FS-800',
        label: 'FS: 80-120 kg',
        image: 'fs.webp',
      },
    ],
  },
  {
    id: 2,
    title: 'Pralnicowirówki',
    subtitle: 'sztywnomocowane szybkoobrotowe',
    content: [
      {
        path: 'urzadzenia-pralnia/pralnicowirowki/RX_G200/RX-65',
        label: 'RX G200: 6.5-35 kg',
        image: 'rx.webp',
      },
    ],
  },
  {
    id: 3,
    title: 'Pralnicowirówki',
    subtitle: 'sztywnomocowane normalnoobrotowe',
    content: [
      {
        path: 'urzadzenia-pralnia/pralnicowirowki/RX/RX-180',
        label: 'RX: 18-52 kg',
        image: 'rx.webp',
      },
      {
        path: 'urzadzenia-pralnia/pralnicowirowki/Pralma/Pralma-16',
        label: 'Pralma: 10-22 kg',
        image: 'rx.webp',
      },
    ],
  },
];

function WasherExtractors() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title="Innowacyjne pralnicowirówki przemysłowe"
        description="Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga najlepszych
        z najlepszych rozwiązań pralniczych. Zaprojektowane, aby zapewnić najniższe koszty zużycia wody
        i energii, wysoką wydajność i przyjazną obsługę. Innowacyjne technologie: CascadeDrum,
        supereco, Xcontrol FlEX plus czy TRACE-TECH, czynią ją bezkonkurencyjne na rynku."
        og_title="Innowacyjne pralnicowirówki wysokoobrotowe"
        twitter_title="Innowacyjne pralnicowirówki przemyslowe"
      />
      <Banner classes="banner__washerExtractors">
        <Title
          variant="h1"
          content="Innowacyjne pralnicowirówki przemysłowe"
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator label="pralnicowirówki" variant="red" />
      </Banner>
      <main className={styles.washerExtractors}>
        <Tabs data={data} initialState={0} />
      </main>
    </React.Fragment>
  );
}
export default WasherExtractors;
