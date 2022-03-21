/*
 * http://localhost:3000/softwash
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import SiteInProgress from '../containers/SiteInProgress/SiteInProgress';
function XControlFlex() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="O XCONTROL FLEX I XCONTROL FLEX PLUS" />
    </React.Fragment>
  );
}
XControlFlex.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default XControlFlex;
