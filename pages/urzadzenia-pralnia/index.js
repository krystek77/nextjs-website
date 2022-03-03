/*
 * http://localhost:3000/urzadzenia-pralnia
 */
import styles from "./index.module.css";
import Banner from "../../components/Banner/Banner";
import ModernLaundryEquipment from "../../containers/ModernLaundryEquipment/ModernLaundryEquipment";
import React from "react";

function LaundryEquipment() {
  return (
    <React.Fragment>
      <Banner title="Najlepsze do pralni przemysłowej"/>
      <main className={styles.laundryEquipment}>
        <ModernLaundryEquipment />
      </main>
    </React.Fragment>
  );
}
export default LaundryEquipment;
