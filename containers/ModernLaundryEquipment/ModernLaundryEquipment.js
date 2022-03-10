import styles from './ModernLaundryEquipment.module.css';
import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import ProductCard from '../../components/ProductCard/ProductCard';
import Label from '../../components/Label/Label';

function ModernLaundryEquipment({ data }) {
  return (
    <section className={styles.modernLaundryEquipment}>
      <header className={styles.modernLaundryEquipment__header}>
        <Subtitle content="Do każdego rodzaju i wielkości pralni przemysłowej" />
        <Title variant="h2" content="Wyposażenie nowoczesnej pralni" />
      </header>
      {/** Product Cards */}
      {data.submenu.length ? (
        <div className={styles.modernLaundryEquipment__equipments}>
          {data.submenu.map((item) => {
            return (
              <ProductCard key={item.label} {...item} parent={data.path}>
                <Label label={item.label} classes="label_top_right_vertical" />
              </ProductCard>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}

export default ModernLaundryEquipment;
