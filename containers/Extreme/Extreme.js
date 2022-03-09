import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import List from '../../components/List/List';
import styles from './Extreme.module.css';

function Extreme({ items }) {
  return (
    <section className={styles.extreme}>
      <div className={styles.extreme__container}>
        <Subtitle content="Linia pralnicowirówek FX - 6.5 kg do 32 kg" />
        <Title
          content="Ekstremalne w innowacjach"
          variant="h2"
          classes="title_mb_3"
        />
        <List items={items} classes="list_decorative" />
        <div className={styles.extreme__articles}>
          <article className={styles.extreme__article}>
            <div className={styles.extreme__articleImage}>
              <Image
                src="/assets/images/details/design.webp"
                alt="design"
                width="412"
                height="310"
              />
            </div>
            <Title content="Design" variant="h3" />
            <Description classes="description_18">
              Badania rynku w zakresie oczekiwań Klientów co do nowych
              pralnicowirówek pokazują, że design urządzenia jest bardzo ważnym
              aspektem. Tak jak w sektorze gospodarstw domowych, tak i w
              przemyśle, innowacje muszą być podkreślone przez wygląd
              urządzenia.
            </Description>
          </article>
          <article className={styles.extreme__article}>
            <div className={styles.extreme__articleImage}>
              <Image
                src="/assets/images/details/ekologia.webp"
                alt="ekologiczne pralki"
                width="412"
                height="310"
              />
            </div>
            <Title content="Ekologia" variant="h3" />
            <Description classes="description_18">
              Pralnicowirówki są zaprojektowane tak, aby zużywać ekstremalnie
              mało wody bez utraty jakości prania. Aby to osiągnąć
              zoptymalizowano przestrzeń pasywną pomiędzy bębnem zewnętrznym a
              wewnętrznym (nie biorąca udziału w praniu). Grzałki umieszczoni
              teraz w specjalnej niecce, aby chronić je podczas ekstremalnie
              nikisego zużycia wody.
            </Description>
            <Description classes="description_18">
              Unikatowa konstrukcja bębna wewnętrznego{' '}
              <strong>Cascade Drum</strong> zapewnia{' '}
              <strong>wyższy o 25% stopień odwirowania</strong> oraz{' '}
              <strong>niższe o 20%</strong> zużycie energii podczas suszenia.
            </Description>
          </article>
          <article className={styles.extreme__article}>
            <div className={styles.extreme__articleImage}>
              <Image
                src="/assets/images/details/ergonomia.webp"
                alt="ergonomiczne pralki"
                width="412"
                height="310"
              />
            </div>
            <Title content="Ergonomia" variant="h3" />
            <Description classes="description_18">
              Design pralnicowirówek serii FX, kładzie duży nacisk na wygodę
              obsługi. Duże znaczenie ma wielkość okna załadunkowego, która
              została zmaksymalizowana dla każdego modelu indywidualnie, aby
              ułatwić załadunek i wyładunek prania.
            </Description>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Extreme;
