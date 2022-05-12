import React from 'react';
import PageLayout from 'components/Layout/PageLayout';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import styles from 'styles/goscinnosc.module.css';
import Subtitle from 'components/Subtitle/Subtitle';
import SquareBackground from 'components/SquareBackground/SquareBackground';

const title = 'Urządzenia do pralni hotelowej, pensjonatów, restauracji ';
const description =
  'Pralnicowirówki, suszarki przemysłowe i prasownice, urządzenia pralnicze niezbędne w pralni każdego hotelu, aby świadczyć najwyższy poziom usługi gościnności i satysfakcji Twoich gości na tym samym poziomie.';

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
      {/** Introduction */}
      <section className={styles.hospitalityIntroduction}>
        <SquareBackground />
        <div className={styles.hospitalityIntroductionDescription}>
          <Description classes="description_mb_2 description_maxWidth_760">
            W branży hotelarskiej wiele aspektów wpływa na satysfakcję gościa,
            m.in. obsługa restauracyjna, pokoi, sposób zakwaterowania, recepcja.
            Poza wysokiej jakości obsługą, również czystość i świeżość ma dla
            gościa ogromne znaczenie.
          </Description>
          <Description classes="description_18 description_maxWidth_760">
            Zatem <b>pralnia hotelowa ma też wpływ na satysfakcję gościa</b>.
            Miękka i świeża pościel oraz ręczniki, czyste obrusy i dobrze
            wyprasowane serwetki potęgują pozytywne wrażenia jakich oczekują
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
      {/**  */}
      <section className={styles.hospitalityInnovator}>
        <SquareBackground classes="squaresBgDecorator_bottom_right squaresBgDecorator_rotate_0" />
        <div className={styles.hospitalityInnovatorInner}>
          <header className={styles.hospitalityInnovatorHeader}>
            <Subtitle
              content="Sprzęt pralniczy a jakość gościnności"
              classes="subtitle_max_width_760"
            />
            <Title
              content="Wybór wyposażenia pralni hotelowej ma znaczenie"
              classes="title_maxWidth_760 title_mb_2"
            />
          </header>

          <Description classes="description_mb_2 description_18 description_maxWidth_auto">
            <b>Wybór przemysłowych urządzeń pralniczych</b> do pralni hotelowej,
            aby osiągnąć najlepszą jakość twojego prania, jest{' '}
            <b>wyborem stopnia usług jaki chciałbyś świadczyć swoim gościom</b>.
            Jeśli chodzi o obsługę prania hotelwoego dajemy Ci najbardziej
            zaawansowane i różnorodne rozwiązania, aby utrzymać jakość twojego
            prania na najwyższym poziomie. Posiadanie własnej pralni w obiekcie,
            daje dużo większą kontrolę nad jakością prania i jego obsługi niż
            jakiekolwiek usługi firmy zewnętrznej. Własna pralnia to też wygoda,
            większa elastyczność oraz gwarancja czystego i świeżego prania na
            czas. Z szeroką gamą urządzeń marki Primus oraz Pralma znajdziesz
            idealne rozwiązanie pralnicze do potrzeb swojego obiektu.
          </Description>
          <Description classes="description_18 description_maxWidth_auto">
            Wybrany park maszyn do pralni dobrze prosperującego hotelu musi
            posiadać realne wsparcie techniczne i serwis na najwyższym poziomie.
            Każde przestoje moga przełożyć się niekorzystnie na straty
            wizerunkowe Twojego obiektu. Brak czystej i świeżej pościeli na czas
            obniża jakość uslugi. Współpracując z Pralmą, z ponad 30 letnim
            doświadczeniem na rynku, masz pewność dostępu{' '}
            <b>do fachowej pomocy technicznej zawsze gdy jej potrzebujesz</b>.
          </Description>
          <Description classes="description_18 description_maxWidth_auto">
            <strong>Primus</strong>- urządzeń którego,{' '}
            <b>
              {' '}
              autoryzowanym dystrybutorem i serwisem Pralma jest najdłużej na
              rynku (od 1994)
            </b>{' '}
            udowodnił, że jest ekspertem w dziedzinie innowacji. Wiele rozwiązań
            pralniczych jest opatentowanych i stanowią obecnie znaki towarowe
            Primus. Wiele też stalo się póżniej standardowym wyposażeniem
            urządzeń. Dziś urządzenia marki Primus wciąż wyznaczają te
            standardy, z kluczowymi zaletami i wyrozniającymi się funkcjami,
            które dają Ci sprzęt z najnowocześniejszą technologią, ekologicznymi
            rozwiązaniami i zaspokoją Twoje potrzby w zakresie prania w hotelu.
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
