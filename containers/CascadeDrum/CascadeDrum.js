import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import List from '../../components/List/List';
import BigLabel from '../../components/BigLabel/BigLabel';
import Image from 'next/image';
import styles from './CascadeDrum.module.css';

const cascadeDrumFeatures = [
  'mimo wysokiego współczynnika odwirowania prania G = 400, pranie nie przykleja się do bębna co ułatwia rozładunek',
  'więcej perforacji na tej samej powierzchni zapewnia bardziej skuteczne odwirowania',
  'koncepcja wypukłości powoduje odwirowanie jeszcze większej ilości wody, więc % wilgotności po wirowaniu jest bardzo niski',
  'kształt otworów w bębnie powoduje dodatkowe działanie mechaniczne, co zapewnia jeszcze lepsze rezultaty prania',
];
function CascadeDrum() {
  return (
    <section className={styles.cascadeDrum}>
      <BigLabel content="Cascade DRUM" classes="bigLabel_top_right" />
      <div className={styles.cascadeDrum__container}>
        <article className={styles.cascadeDrum__article}>
          <header className={styles.cascadeDrum__header}>
            <Subtitle content="Mniej wody, lepsza jakość prania" />
            <Title content="Cascade Drum" variant="h2" />
            <Description classes="description_18">
              Koncepcja <strong>Cascade Drum</strong> skutkuje większą
              perforacją bębna na tej samej powierzchni, dzięki czemu odsysanie
              wody jest znacznie skuteczniejsze. Pranie nie przykleja się do
              powierzchni bębna, co ułatwia rozładunek. Kaskadowy kształt
              otworów bębna wewnętrznego, zapewnia dodatkowe działanie
              mechaniczne, co wpływa na lepszy efekt prania.
            </Description>
          </header>
          <aside className={styles.cascadeDrum__image}>
            <Image
              src="/assets/images/details/cascadedrum.webp"
              alt="cascade drum"
              width="480"
              height="360"
            />
          </aside>
          <div className={styles.cascadeDrum__content}>
            <List items={cascadeDrumFeatures} classes="list_mb_05" />
          </div>
        </article>
      </div>
    </section>
  );
}

export default CascadeDrum;
