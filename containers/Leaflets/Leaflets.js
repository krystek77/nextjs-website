import Image from "next/image";
import Title from "../../components/Title/Title";
import styles from "./Leaflets.module.css";

function Leaflets({ leaflets }) {
  return (
    <section className={styles.leaflets}>
      <div className={styles.leaflets__container}>
        <Title content='Materiały informacyjne' variant='h3' />
        {leaflets.length ? (
          <ul>
            {leaflets.map((item, index) => (
              <li key={index}>
                <a href={`/asstes/pdf/${leaflets.fileName}.pdf`} target='_blank' rel='noopener noreferrer'>
                  <Image src='/assets/icons/pdf_icon.svg' alt='download icon' width='48' height='62' />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
export default Leaflets;
