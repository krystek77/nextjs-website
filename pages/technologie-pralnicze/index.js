/*
 * http://localhost:3000/technologie-pralnicze
 */
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../../containers/SiteInProgress/SiteInProgress';
function LaundryTechnologies() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="TECHNOLOGIE" />
    </React.Fragment>
  );
}

LaundryTechnologies.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default LaundryTechnologies;
