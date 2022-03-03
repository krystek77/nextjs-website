import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <p className={styles.copyright}>
          Copyright 2022 by Krystian Wrona. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
export default Footer;
