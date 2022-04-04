import styles from './index.module.css';
import AdminLayout from '../../../../components/Layout/AdminLayout';
function SparePartForm() {
  return (
    <section className={styles.sparePartFormSection}>
      <div className={styles.sparePartFormSection__container}>
        SPARE PART FORM
      </div>
    </section>
  );
}

SparePartForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SparePartForm;
