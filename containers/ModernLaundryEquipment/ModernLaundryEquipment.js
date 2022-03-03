import styles from './ModernLaundryEquipment.module.css';
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import ProductCard from '../../components/ProductCard/ProductCard';
import { data } from '../../constants/links';

function ModernLaundryEquipment() {
  const { path, submenu } = data[0];
  return (
    <section className={styles.modernLaundryEquipment}>
      <header className={styles.modernLaundryEquipment__header}>
        <Subtitle content="Do każdego rodzaju i wielkości pralni przemysłowej" />
        <Title variant="h2" content="Wyposażenie nowoczesnej pralni" />
      </header>
      {/** Product Cards */}
      {submenu.length ? (
        <div className={styles.modernLaundryEquipment__equipments}>
          {submenu.map((item) => {
            return <ProductCard key={item.label} {...item} parent={path} />;
          })}
        </div>
      ) : null}
    </section>
  );
}
export default ModernLaundryEquipment;
