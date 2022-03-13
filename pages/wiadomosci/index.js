/*
 * http://localhost:3000/wiadomosci
 */

import React from "react";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../../containers/SiteInProgress/SiteInProgress";
import styles from "./index.module.css";

function Posts() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner>
        <Title variant='h1' content='Aktualności z Pralma' classes='title_maxWidth_960 title_light_500' />
      </Banner>
      <SiteInProgress page='WIADOMOŚCI' />
    </React.Fragment>
  );
}
export default Posts;
