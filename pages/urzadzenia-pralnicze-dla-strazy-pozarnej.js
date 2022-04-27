/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-strazy-pozarnej
 */
import React from "react";
import PageLayout from "../components/Layout/PageLayout";
import HeadMetaTags from "components/HeadMetaTags/HeadMetaTags";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Description from "components/Description/Description";

const title = "Wyposażenie pralnicze dla służb cywilnych, straży pożarnej";
const description = "Zbudowane od podstaw pralnicowirówki i suszarki przemysłowe 👨‍💼, aby zwiększyć ochronę właściwości specjalistycznej odzieży ochronnej służb cywilnych, straży pożarnej. Poznaj pralnicowirówki SoftWash oras suszarki komorowe";
function FireBrigade() {
  return (
    <React.Fragment>
      <HeadMetaTags title={title} og_title={title} twitter_title={title} description={description} />
      <Banner classes='banner__fireBrigade'>
        <Title classes='title_center title_light_500 title_maxWidth_960' content='Dbamy o Twoje bezpieczeństwo dostarczając rozwiązań chroniących Twoją specjalistyczną odzież ochronną' />
        <Description classes='description_center description_maxWidth_960 ' content='Ochrona właściwości funkcjonalnych tkanin, właściwa impregnacja, to dłuższa żywotność odzieży ochronnej, zachowanie jej właściwości oraz niższe koszty prania' />
      </Banner>
      <main>KONTENT</main>
    </React.Fragment>
  );
}
FireBrigade.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default FireBrigade;
