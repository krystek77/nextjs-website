/*
 * http://localhost:3000/pompa-ciepla-evo4
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function EVO4() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="TECHNOLOGIA ECO4" />
    </React.Fragment>
  );
}

EVO4.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default EVO4;
