/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-marynarki-wojennej
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';

const title = "Wyposażenie pralnicze dla marynarki wojennej i wojska";
const description = "Przemysłowe pralnicowirówki i suszarki w wykonaniu morskim 🚢, do pracy w trudnych warunkach atmosferycznych, idealne na statki jak i okręty wojenne";
function Navy() {
  return (
    <React.Fragment>
      <HeadMetaTags title={title} og_title={title} twitter_title={title} description={description} />
      <Banner classes='banner__navy'>
        <Title classes='title_center title_light_500 title_maxWidth_960' content='Wyposażenie pralnicze dla marynarki wojennej i wojska' />
        <Description classes='description_center description_maxWidth_960 ' content='Przemysłowe pralnicowirówki i suszarki w wykonaniu morskim, do pracy w trudnych warunkach atmosferycznych, idealne na statki jak i okręty wojenne' />
      </Banner>
      <main>KONTENT</main>
    </React.Fragment>
  );
}
Navy.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default Navy;
