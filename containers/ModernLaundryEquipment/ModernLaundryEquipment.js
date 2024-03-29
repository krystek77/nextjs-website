import Subtitle from '../../components/Subtitle/Subtitle';
import Title from '../../components/Title/Title';
import ProductCard from '../../components/ProductCard/ProductCard';
import Label from '../../components/Label/Label';
import styles from './ModernLaundryEquipment.module.css';
import { classesNames } from 'lib';

function ModernLaundryEquipment({
  product_cards,
  products_title,
  products_subtitle,
  classes,
}) {
  const classesString = classesNames(classes, 'modernLaundryEquipment')(styles);
  return (
    <section className={classesString}>
      <header className={styles.modernLaundryEquipment__header}>
        <Subtitle content={products_title} classes="subtitle_max_width_640" />
        <Title variant="h2" content={products_subtitle} />
      </header>
      {/** Product Cards */}
      {product_cards.length ? (
        <div className={styles.modernLaundryEquipment__equipments}>
          {product_cards.map((item) => {
            return (
              <ProductCard key={item.label} {...item}>
                <Label label={item.label} classes="label_top_right_vertical" />
              </ProductCard>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
ModernLaundryEquipment.defaultProps = {
  classes: '',
  product_cards: [],
  products_title: '',
  products_subtitle: '',
};

export default ModernLaundryEquipment;
