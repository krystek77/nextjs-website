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

function WasherExtractors(props) {
  const { title, category, series } = props;
  const withCategory = series.map((item) => ({
    ...item,
    family: [...item.family],
    category: category,
  }));
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
          content={title}
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator label={category} variant="red" />
      </Banner>
      <main className={styles.washerExtractors}>
        <Tabs data={withCategory} initialState={0} />
      </main>
    </React.Fragment>
  );
}

import { washerextractors } from '../../../constants/washerextractors';
export async function getStaticProps() {
  return {
    props: washerextractors,
  };
}

export default WasherExtractors;
