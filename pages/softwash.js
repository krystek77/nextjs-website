/*
 * http://localhost:3000/softwash
 */

import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function SoftWash() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='TECHNOLOGIA SOFTWASH' />
    </React.Fragment>
  );
}
export default SoftWash;
