/*
 * http://localhost:3000/informacje-prawne
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function LegalInformation() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='INFORMACJE PRAWNE' />
    </React.Fragment>
  );
}
export default LegalInformation;
