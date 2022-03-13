/*
 * http://localhost:3000/pompa-ciepla-evo4
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function EVO4() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='TECHNOLOGIA ECO4' />
    </React.Fragment>
  );
}
export default EVO4;
