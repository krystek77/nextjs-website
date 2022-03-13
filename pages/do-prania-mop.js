/*
 * http://localhost:3000/do-prania-mop
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function MOP() {
  return <React.Fragment>
  <HeadMetaTags/>
    <SiteInProgress page='TECHNOLOGIA MOP' />;
  </React.Fragment>
}
export default MOP;
