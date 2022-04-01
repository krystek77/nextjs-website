import styles from './parametr.module.css';
import AdminLayout from '../../../components/Layout/AdminLayout';

function ParameterFrom() {
  return <div className={styles.parameterFrom}>Add parameter</div>;
}

ParameterFrom.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ParameterFrom;
