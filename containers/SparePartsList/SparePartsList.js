import SparePartCard from './SparePartCard/SparePartCard';
import styles from './SparePartsList.module.css';

function SparePartsList({ items }) {
  return items.length ? (
    <section className={styles.sparePartsList}>
      <div className={styles.sparePartsList__container}>
        {items.map((item) => (
          <SparePartCard key={item.partID} {...item} />
        ))}
      </div>
    </section>
  ) : null;
}
export default SparePartsList;
