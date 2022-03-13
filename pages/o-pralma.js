/*
 * http://localhost:3000/o-pralma
 */

import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function AboutUs() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='O nas' />
    </React.Fragment>
  );
}
export default AboutUs;
