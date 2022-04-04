import styles from './sterownik.module.css';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import Title from '../../../../components/Title/Title';

function ControlFrom() {
  return (
    <div className={styles.controlFrom}>
      <Title
        content="Dodaj sterownik"
        classes="title_display_h5 title_center title_mb_3"
        variant="h2"
      />
    </div>
  );
}

ControlFrom.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ControlFrom;
