/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe
 */
import React from "react";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import SiteInProgess from "../../containers/SiteInProgress/SiteInProgress";
function SpareParts() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgess page='CZĘŚCI ZAMIENNE' />
    </React.Fragment>
  );
}
export default SpareParts;
