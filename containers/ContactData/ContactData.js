import styles from "./ContactData.module.css";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";

function ContactData() {
  return (
    <section className={styles.contactData}>
      <header className={styles.contactData__header}>
        <Subtitle content='Napisz do nas, zadzwoń lub odwiedź naszą firmę - ZAPRASZAMY' />
        <Title content='Dane kontaktowe' />
      </header>
      <div className={styles.contactData__container}>
        <div className={styles.contactData__item}>1</div>
        <div className={styles.contactData__item}>2</div>
        <div className={styles.contactData__item}>3</div>
        <div className={styles.contactData__item}>4</div>
        <div className={styles.contactData__item}>5</div>
        <div className={styles.contactData__item}>6</div>
      </div>
    </section>
  );
}
export default ContactData;
