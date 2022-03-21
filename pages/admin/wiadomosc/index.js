import styles from './index.module.css';
import AdminLayout from '../../../components/Layout/AdminLayout';
function PostForm() {
  return (
    <section className={styles.postFormSection}>
      <div className={styles.postFormSection__container}>POST FORM</div>
    </section>
  );
}
PostForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default PostForm;
