import Image from 'next/image';
import Title from '../../components/Title/Title';
import styles from './Leaflets.module.css';

function Leaflets({ leaflets }) {
  return leaflets.length ? (
    <section className={styles.leaflets}>
      <div className={styles.leaflets__container}>
        <Title
          content="Materiały informacyjne"
          variant="h3"
          classes="title_mb_3"
        />

        <ul className={styles.leaflets__list}>
          {leaflets.map((item, index) => (
            <li className={styles.leaflets__item} key={index}>
              <a
                className={styles.leaflets__link}
                href={`/assets/downloads/${item.fileName}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/icons/pdf_icon.svg"
                  alt="download icon"
                  width="48"
                  height="62"
                />
                <span className={styles.leaflets__name}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : null;
}
export default Leaflets;
