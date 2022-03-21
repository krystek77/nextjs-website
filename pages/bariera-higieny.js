/*
 * http://localhost:3000/bariera-higieny
 */
import React from 'react';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
import PageLayout from '../components/Layout/PageLayout';

function HygieneBarrier() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="BARIERA HIGIENY" />;
    </React.Fragment>
  );
}
HygieneBarrier.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default HygieneBarrier;
