import React from 'react';
import PageLayout from 'components/Layout/PageLayout';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import styles from 'styles/goscinnosc.module.css';

const title = 'Urządzenia do pralni hotelowej, pensjonatów, restauracji ';
const description =
  'Pralnicowirówki, suszarki przemysłowe i prasownice, wszystko co niezbędne w pralni każdego hotelu, w którym satysfakcja gości z pobytu jest najważniejsza.';

function Hospitality() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        og_title={title}
        twitter_title={title}
        description={description}
      />
      <Banner classes=" banner_height_auto banner__hospitality">
        <Title
          classes="title_center title_display_h2 title_maxWidth_960 title_light_500 "
          variant="h1"
          content="Rozwiązania pralnicze dla doskonałych usług gościnnych"
        />
      </Banner>
      <section className={styles.hospitalityIntroduction}>
        <div>
          <Description classes="description_mb_2">
            W branży hotelarskiej wiele aspektów wpływa na satysfakcję gościa,
            m.in. obsługa restauracyjna, pokoi, sposób zakwaterowania, recepcja.
            Poza wysokiej jakości obsługą, również czystość i świeżość ma dla
            gościa ogromne znaczenie.
          </Description>
          <Description classes="description_18">
            Zatem <b>pralnia hotelowa ma też wpływ na satysfakcję gościa.</b>.
            Miękka i świeża pościel oraz ręczniki, czyste obrusy i dobrze
            wyprasowane serwetki potęgują pozytywne wrażenia, jakich oczekują
            Twoi goście podczas pobytu w twoim hotelu. Bielizna hotelowa
            wykonana jest z różnych materiałów i tkanin a zatem wymaga różnych
            procesów prania oraz obróbki, aby zachować jej właściwości oraz
            wydłużyć żywotność. Dzięki nowoczesnym urządzeniom pralniczym,
            wyposażonym w programy spełniające wszystkie wymagania dotyczące
            prania oraz wymagane procesy (pranie, suszenie, prasowanie)
            zapewnisz swoim gościom również zawsze czyste, świeże i dobrej
            jakości pranie.
          </Description>
        </div>
      </section>
      <main className={styles.hospitality}>---</main>
    </React.Fragment>
  );
}
Hospitality.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Hospitality;
