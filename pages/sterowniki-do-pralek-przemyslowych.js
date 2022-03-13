/*
 * http://localhost:3000/sterowniki-do-pralek-przemyslowych
 */

import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function Controls() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page="STEROWNIKI"/>
    </React.Fragment>
  );
}
export default Controls;
