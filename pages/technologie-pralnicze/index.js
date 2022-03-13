/*
 * http://localhost:3000/technologie-pralnicze
 */
import React from "react";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../../containers/SiteInProgress/SiteInProgress";
function LaundryTechnologies() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='TECHNOLOGIE' />
    </React.Fragment>
  );
}
export default LaundryTechnologies;
