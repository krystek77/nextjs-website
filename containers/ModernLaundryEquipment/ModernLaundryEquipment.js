import styles from "./ModernLaundryEquipment.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";
import ProductCard from "../../components/ProductCard/ProductCard";
import ScrollButton from "../../components/ScrollButton/ScrollButton";
import { data } from "../../constants/links";

function ModernLaundryEquipment() {
  const { path, submenu } = data[0];
  return (
    <section>
      <ScrollButton />
      <header className={styles.header}>
        <Subtitle content='Do każdego rodzaju i wielkości pralni przemysłowej' />
        <Title variant='h2' content='Wyposażenie nowoczesnej pralni' />
      </header>
      {/** Product Cards */}
      {submenu.length ? (
        <div className={styles.productCards}>
          {submenu.map((item, index) => {
            return <ProductCard key={item.label} {...item} parent={path} />;
          })}
        </div>
      ) : null}
    </section>
  );
}
export default ModernLaundryEquipment;
