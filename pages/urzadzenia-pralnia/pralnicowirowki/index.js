/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki
 */
import React from 'react';
import HeadMetaTags from '../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../components/Banner/Banner';
import styles from './index.module.css';
import Title from '../../../components/Title/Title';
import PageIndicator from '../../../components/Banner/PageIndicator/PageIndicator';
import Tabs from '../../../components/Tabs/Tabs';

const data = [
  {
    id: 1,
    title: 'Pralnicowirówki',
    subtitle: 'wolnostojące wysokoobrotowe',
    path: '/urzadzenia-pralnia',
    content: [
      { path: '/pralnicowirowki/FX105-280/FX105', label: 'seria FX, 8-32 kg' },
      {
        path: '/pralnicowirowki/FX350-600/FX-350',
        label: 'seria FX, 35-60 kg',
      },
      {
        path: '/pralnicowirowki/FS800-1200/FS-800',
        label: 'serai FS, 80-120 kg',
      },
    ],
  },
  {
    id: 2,
    title: 'Pralnicowirówki',
    subtitle: 'sztywnomocowane szybkoobrotowe',
    path: '/urzadzenia-pralnia',
    content: [
      { path: 'pralnicowirowki/RX_G200/RX-65', label: 'seria RX, 6.5-35 kg' },
    ],
  },
  {
    id: 3,
    title: 'Pralnicowirówki',
    subtitle: 'sztywnomocowane normalnoobrotowe',
    path: '/urzadzenia-pralnia',
    content: [
      { path: '/pralnicowirowki/RX/RX-180', label: 'seria RX, 18-52 kg' },
      {
        path: '/pralnicowirowki/Pralma/Pralma-16',
        label: 'seria Pralma, 10-22 kg',
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
