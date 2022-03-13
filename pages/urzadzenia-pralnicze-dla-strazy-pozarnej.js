/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-strazy-pozarnej
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function FireBrigade() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='URZĄDZENIA PRALNICZE DLA STRAŻY POŻARNEJ' />
    </React.Fragment>
  );
}
export default FireBrigade;
