/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-marynarki-wojennej
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import SiteInProgress from "../containers/SiteInProgress/SiteInProgress";
function Navy() {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <SiteInProgress page='URZĄDZENIA PRALNICZE DLA WOJSKA' />
    </React.Fragment>
  );
}
export default Navy;
