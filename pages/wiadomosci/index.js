/*
 * http://localhost:3000/wiadomosci
 */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import Subtitle from '../../components/Subtitle/Subtitle';
import News from '../../containers/News/News';
import { getPosts } from '../../lib/posts';

import styles from './index.module.css';

function Posts({ items }) {
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
        <News items={items} />
      </main>
    </React.Fragment>
  );
}
export default Posts;

export async function getStaticProps() {
  const response = getPosts();
  return {
    props: {
      items: response,
    },
  };
}
