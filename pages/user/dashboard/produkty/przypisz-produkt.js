import AdminLayout from "components/Layout/AdminLayout";
import Title from "components/Title/Title";
import React from "react";
import styles from "./przypisz-produkt.module.css";

function AssigningProduct() {
  return (
    <React.Fragment>
      <div className={styles.assigningProduct}>
        <Title content='Przypisz produkt do typu' classes='title_display_h5 title_center title_mb_1' variant='h2' />
      </div>
      <form></form>
    </React.Fragment>
  );
}

AssigningProduct.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default AssigningProduct;
