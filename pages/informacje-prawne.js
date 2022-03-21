/*
 * http://localhost:3000/informacje-prawne
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function LegalInformation() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="INFORMACJE PRAWNE" />
    </React.Fragment>
  );
}
LegalInformation.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default LegalInformation;
