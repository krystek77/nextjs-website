/*
 * http://localhost:3000/technologie-pralnicze/cascade-drum
 */
import React from 'react';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import PageLayout from '../../components/Layout/PageLayout';
import SiteInProgress from '../../containers/SiteInProgress/SiteInProgress';
function LaundryTechnology() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="Konkretna technologia" />
    </React.Fragment>
  );
}
LaundryTechnology.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default LaundryTechnology;
