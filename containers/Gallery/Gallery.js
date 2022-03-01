import styles from "./Gallery.module.css";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Description from "../../components/Description/Description";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className={styles.gallery__content}>
        <Subtitle content='Projekty pralni każdego typu i wielkości' />
        <Title content='Nasze realizacje' variant='h2' />
        <Description content='Realizujemy projekty wyposażenia pralni przemysłowych już dziesiątki lat.
        Wiemy, że Twoja pralnia to konkretne potrzeby prania, warunki lokalowe czy sposób finansowania. Dzięki
        wielu latom doświadczenia dostarczymy Ci wyposażenie pralni każdego typu i wielkości, optymalne
        do Twoich potrzeb.' />
      </div>
      <div className={styles.gallery__images}>Images</div>
    </section>
  );
}

export default Gallery;
