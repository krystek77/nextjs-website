import styles from './sterownik.module.css';
import AdminLayout from '../../../components/Layout/AdminLayout';

function ControlFrom() {
  return <div className={styles.controlFrom}>Add control</div>;
}

ControlFrom.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ControlFrom;
