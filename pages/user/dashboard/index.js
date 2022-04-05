import AdminLayout from '../../../components/Layout/AdminLayout';
import Description from '../../../components/Description/Description';
import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';

import styles from './index.module.css';

function Admin() {
  return (
    <header className={styles.admin}>
      <Subtitle
        content="Komfortowo dodawaj kontent strony: wiadomości, części zamienne ..."
        classes="subtitle_max_width_640"
      />
      <Title content="Panel administratora" />
      <Description>
        Zarządzaj zawartością strony internetowej. Tutaj nie wbijesz bez
        posiadania konta.
      </Description>
    </header>
  );
}

Admin.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Admin;
