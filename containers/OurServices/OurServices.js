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
            content="Prawie 30 lat obecności na rynku rozwiązań dla pralni przemysłowych, to dla nas różne wyzwania oraz bagaż wielu doświadczeń. 
            Mimo realizacji setek pralni przemysłowych, zarówno od podstaw jak i doposażeń już istniejących, jeszcze bardziej się angażuejmy w kolejne projekty.
            Potrzeby rosną, wyposażenie pralnicze zmienia się, dzieki czemu nadal rozwijamy swoją pasję, aby tworzyć dla Ciebie jeszcze bardziej wydajne, ekologiczne
            i optymalne do potrzeb przemysłowe wyposażenie pralnicze."
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
