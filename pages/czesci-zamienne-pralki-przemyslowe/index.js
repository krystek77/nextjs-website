/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe
 */
import React from "react";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import SiteInProgess from "../../containers/SiteInProgress/SiteInProgress";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
function SpareParts() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes='banner__spareParts '>
        <Subtitle content='Do przemysłowych urządzeń pralniczych' classes='subtitle__ball_dark' />
        <Title content='Popularne części eksploatacyjne i zamienne' classes='title_bg_white_dark title_maxWidth_960' />
      </Banner>
      <SiteInProgess page='CZĘŚCI ZAMIENNE' />
    </React.Fragment>
  );
}
export default SpareParts;
