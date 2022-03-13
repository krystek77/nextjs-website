/*
 * http://localhost:3000/pralnia-samoobslugowa
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function SelfServiceLaundry() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='TECHNOLOGIA ECO4' />
    </React.Fragment>
  );
}
export default SelfServiceLaundry;
