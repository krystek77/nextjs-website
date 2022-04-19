/*
 * http://localhost:3000/ekologiczne-wyposazenie-pralni-przemyslowej
 */
import React from "react";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import PageLayout from "../components/Layout/PageLayout";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
import Description from "components/Description/Description";

function GreenPassport() {
  return (
    <React.Fragment>
      <Banner classes='banner__green_passport banner_maxWidth_760'>
        <Title classes="title_center title_light_500" content='Sposób na ekologiczną i ekonomiczną pralnię wodną' />
        <Description classes='description_center description_maxWidth_auto' content='Ponieważ zasoby stają się coraz bardziej cenne, rozwijamy rozwiązania pomagające Ci prać taniej i chronić przy tym naturalne zasoby środkowiska' />
      </Banner>
      <SiteInProgress />
    </React.Fragment>
  );
}
GreenPassport.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default GreenPassport;
