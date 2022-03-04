/*
 * http://localhost:3000/wiadomosci
 */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import styles from './index.module.css';

function Posts() {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Aktualności z Pralma"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <main className={styles.posts}></main>
    </React.Fragment>
  );
}
export default Posts;
