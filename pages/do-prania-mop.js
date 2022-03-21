/*
 * http://localhost:3000/do-prania-mop
 */
import React from 'react';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
import PageLayout from '../components/Layout/PageLayout';
function MOP() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="TECHNOLOGIA MOP" />;
    </React.Fragment>
  );
}

MOP.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default MOP;
