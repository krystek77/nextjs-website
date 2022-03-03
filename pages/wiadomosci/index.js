/*
 * http://localhost:3000/wiadomosci
 */

import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from './index.module.css';

function Posts() {
  return (
    <React.Fragment>
      <Banner title='Aktualności z Pralma' />
      <main className={styles.posts}></main>
    </React.Fragment>
  );
}
export default Posts;
