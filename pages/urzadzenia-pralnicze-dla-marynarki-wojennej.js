/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-marynarki-wojennej
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function Navy() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="URZĄDZENIA PRALNICZE DLA WOJSKA" />
    </React.Fragment>
  );
}
Navy.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default Navy;
