import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import List from '../../components/List/List';

import styles from './OurServices.module.css';

const data = [
  'dobór wyposażenia pralni przemysłowej',
  'dostawa urządzeń',
  'montaż na przygotowanych stanowiskach',
  'pierwsze uruchomienie',
  'szkolenie z prawidlowej obsługi i eksploatacji',
  'sprzedaż części zamiennych do przemysłowych urządzeń pralniczych',
  'wsparcie techniczne',
  'serwis gwarancyjny i powarancyjny',
];

function OurServices() {
  return (
    <section className={styles.ourServices}>
      <div className={styles.ourServices__inner}>
        <div className={styles.ourServices__content}>
          <Subtitle content="Kompleksowa realizacja wyposażenia pralni" />
          <Title content="Usługi" variant="h2" />
          <Description
            classes="description_18"
            content="Nulla porttitor accumsan tincidunt. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui."
          />
        </div>
        <div className={styles.ourServices__list}>
          <List items={data} classes="list_decorative" />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
