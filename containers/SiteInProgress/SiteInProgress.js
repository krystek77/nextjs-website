import styles from "./SiteInProgress.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import React from "react";

function SiteInProgress({ page }) {
  return (
    <React.Fragment>
      <main className={styles.siteInProgress}>
        <div className={styles.siteInProgress__container}>
          <Subtitle content='Póki co ...' />
          <Title variant='h1' content={`Strona ${page} w budowie`} />
          <a className={styles.siteInProgress__link} href='http://www.pralma.pl' target='_blank' rel='noreferrer' title='strona - Producent Przemysłowych Urządzeń Pralniczych PRALMA sp. z o.o.'>
            Zapraszamy do odwiedzenia naszej obcnej witryny - www.pralma.pl
          </a>
        </div>
      </main>
    </React.Fragment>
  );
}
export default SiteInProgress;
