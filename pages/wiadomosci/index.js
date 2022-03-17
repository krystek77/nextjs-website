/*
 * http://localhost:3000/wiadomosci
 */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../../containers/SiteInProgress/SiteInProgress';
import styles from './index.module.css';
import Subtitle from '../../components/Subtitle/Subtitle';

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
      <SiteInProgress page="WIADOMOŚCI" />
    </React.Fragment>
  );
}
export default Posts;
