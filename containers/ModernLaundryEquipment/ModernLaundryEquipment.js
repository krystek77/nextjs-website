import styles from "./ModernLaundryEquipment.module.css";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";

function ModernLaundryEquipment() {
  return (
    <section>
      <header className={styles.header}>
        <Subtitle content="Do każdego rodzaju i wielkości pralni przemysłowej"/>
        <Title variant='h2' content='Wyposażenie nowoczesnej pralni' />
      </header>
    </section>
  );
}
export default ModernLaundryEquipment;
