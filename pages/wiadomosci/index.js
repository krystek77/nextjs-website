/*
 * http://localhost:3000/wiadomosci
 */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../../containers/SiteInProgress/SiteInProgress';
import Subtitle from '../../components/Subtitle/Subtitle';
import News from '../../containers/News/News';

import styles from './index.module.css';

function Posts() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes="banner__news">
        <Subtitle content="Bądź na bieżąco" />
        <Title
          variant="h1"
          content="Wiadomości ze świata Pralma"
          classes="title_bg_white_red title_maxWidth_640 title_light_500"
        />
      </Banner>
      <main>
        <News />
      </main>
      <SiteInProgress page="WIADOMOŚCI" />
    </React.Fragment>
  );
}
export default Posts;
