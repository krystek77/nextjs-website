/*
 * http://localhost:3000/urzadzenia-pralnia-samoobslugowa
 */
import React from "react";
import Banner from "../../components/Banner/Banner";
import styles from './index.module.css';

function SelfServiceLaundryEquipment() {
  return (
    <React.Fragment>
      <Banner title='Inteligentne pralnie samoobsługowe' />
      <main className={styles.selfServiceLaundryEquipment}>
        
      </main>
    </React.Fragment>
  );
}
export default SelfServiceLaundryEquipment;
