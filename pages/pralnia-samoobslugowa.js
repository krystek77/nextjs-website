/*
 * http://localhost:3000/pralnia-samoobslugowa
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function SelfServiceLaundry() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="Pralnie samoobsługowe" />
    </React.Fragment>
  );
}

SelfServiceLaundry.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default SelfServiceLaundry;
