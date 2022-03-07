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
    content: 'content tab 1',
  },
  {
    id: 2,
    title: 'Pralnicowirówki',
    subtitle: 'sztywnomocowane szybkoobrotowe',
    content: 'content tab 2',
  },
  {
    id: 3,
    title: 'Pralnicowirówki',
    subtitle: 'sztywnomocowane normalnoobrotowe',
    content: 'content tab 3',
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
