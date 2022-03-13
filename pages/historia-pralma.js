/*
 * http://localhost:3000/our-history
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function OurHistory() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='NASZA HISTORIA' />;
    </React.Fragment>
  );
}
export default OurHistory;
