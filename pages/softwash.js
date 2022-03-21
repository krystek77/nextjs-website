/*
 * http://localhost:3000/softwash
 */

import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function SoftWash() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="TECHNOLOGIA SOFTWASH" />
    </React.Fragment>
  );
}
SoftWash.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default SoftWash;
