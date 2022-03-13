/*
 * http://localhost:3000/bariera-higieny
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function HygieneBarrier() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='BARIERA HIGIENY' />;
    </React.Fragment>
  );
}
export default HygieneBarrier;
