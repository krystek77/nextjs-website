/*
 * http://localhost:3000/o-pralma
 */

import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function AboutUs() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="O nas" />
    </React.Fragment>
  );
}

AboutUs.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default AboutUs;
