import React from 'react';
import PageLayout from 'components/Layout/PageLayout';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import styles from 'styles/goscinnosc.module.css';
import Subtitle from 'components/Subtitle/Subtitle';
import SquareBackground from 'components/SquareBackground/SquareBackground';
import List from 'components/List/List';
import LinkButton from 'components/LinkButton/LinkButton';

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
      {/** Innovator  */}
      <section className={styles.hospitalityInnovator}>
        <SquareBackground classes="squaresBgDecorator_bottom_right squaresBgDecorator_rotate_0" />
        <div className={styles.hospitalityInnovatorInner}>
          <header className={styles.hospitalityInnovatorHeader}>
            <Subtitle
              content="Sprzęt pralniczy a jakość usług"
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
      {/** Technologies for excellent  hospitality service */}
      <section className={styles.hospitalityTechnologies}>
        <div className={styles.hospitalityTechnologiesInner}>
          <header>
            <Subtitle
              content="Technologie pralnicze zapewniające wyższą jakość usług hotelowych"
              classes="subtitle_max_width_760"
            />
            <Title
              variant="h2"
              content="Rozwiązania pralnicze dla branży hotelarskiej"
            />
          </header>
          <article>
            <header>
              <Title variant="h3" content="Duża oszczędność wody i energii" />
            </header>
            <Title variant="h4" content="Pranie" />
            <List
              classes="list_mb_2"
              items={[
                '20% mniejsze zużycie energii',
                '25% mniniejsza wilgotność resztkowa',
                'lepsze rezultat prania przy zuzyciu wody mniejszym od 30%',
              ]}
            />
            <Title variant="h4" content="Suszenie" />
            <List
              classes="list_mb_2"
              items={[
                'zwiększona wydajność suszenia dzięki innowacyjnej technologii podgrzewu pompą ciepła - EVO4',
                'zwiększony calkowity przepływ ciepłaego powietrza dzięki połączeniu radialnego i osiowego przepływu',
                'zmniejszenie zużycia energii o 65% podczas ssuzenia',
                'mniej niż 5kW mocy niezbędnej do instalacji',
                'zamknięty przepływ powietrza bez dodatkowej wentylacji',
                'skrócony cykl suszenia dzięki perforowanym przewałom',
              ]}
            />
          </article>
          <article>
            <header>
              <Title
                variant="h3"
                content="Optymalizacja procesu prania dla lepszych jego rezultatów"
              />
            </header>
            <Title variant="h4" content="Pranie" />
            <List
              classes="list_mb_2"
              items={[
                'bardziej wydajne odwirowanie wody',
                'ekstreamlnie niksi procent wilgotności resztkowej',
                'pranie nie styka się z bębnem Cascade™ drum',
                'opatentowany pojemnik środków piorących i bardzo precyzyjny czujnik poziomu wody',
                'brak bezpośredniego kontaktu chemii z praniem',
                'zapisywanie parametrów prania w pamięci sterownika',
                'pełne śledzenie cykli prania',
                'zgodność z normami higienicznymi',
                'możliwość stosowania płynnych środków piorących',
                'łatwe rozwiązania typu plug and play',
              ]}
            />
            <Title variant="h4" content="Prasowanie" />
            <List
              classes="list_mb_2"
              items={[
                'automatycznie regulowana prędkość prasowania zależnie od wilgotności resztkowej prania',
                'brak mokrej bielizny po praniu',
              ]}
            />
          </article>
          <article>
            <header>
              <Title variant="h3" content="Lepsza wydajność pracy" />
            </header>
            <Title variant="h4" content="Pranie" />
            <List
              classes="list_mb_2"
              items={[
                'inteligentne napełnianie wodą i chemią w zależności od załadunku',
                'czujniki ważenia w ramie pralnicowirówki',
                'nieograniczone możliwości programwoania',
                'przyjazny użytkownikowi, czytelny wyświetlacz',
                'port USB do wygodnego i szybkiego ładowania nowych programów prania',
              ]}
            />
          </article>
        </div>
      </section>
      <main className={styles.hospitality}>
        <Subtitle content="Polecane wyposażenie pralni hotelowej" />
        <Title
          content="Doskonała jakość usług hotelarskich"
          classes="title_mb_2"
        />
        <article className={styles.hospitalityFeatured}>
          <header className={styles.hospitalityFeaturedHeader}>
            <Range type="pralnicowirówki sztywnomocowane" mark="RX" />
            <div className={styles.hospitalityFeaturedModels}>
              <Model name="RX80" value="8 kg" />
              <Model name="RX105" value="10.5 kg" />
              <Model name="RX135" value="13.5 kg" />
              <Model name="RX180" value="18 kg" />
              <Model name="RX240" value="24 kg" />
              <Model name="RX280" value="28 kg" />
              <Model name="RX350" value="35 kg" />
              <Model name="RX520" value="52 kg" />
            </div>
          </header>
          <div className={styles.hospitalityFeaturedContent}>
            <aside className={styles.hospitalityFeaturedImage}>IMAGE</aside>
            <div className={styles.hospitalityFeaturedList}>LIST</div>
          </div>
          <footer className={styles.hospitalityFeaturedFooter}>
            <LinkButton classes="linkButton_center" label="Poznaj" to="/" />
          </footer>
        </article>
        <article className={styles.hospitalityFeatured}>
          <header className={styles.hospitalityFeaturedHeader}>
            <Range type="pralnicowirówki wysokoobrotowe" mark="FX" />
            <div className={styles.hospitalityFeaturedModels}>
              <Model name="FX65" value="6.5 kg" />
              <Model name="FX80" value="8 kg" />
              <Model name="FX105" value="10.5 kg" />
              <Model name="FX135" value="13.5 kg" />
              <Model name="FX180" value="18 kg" />
              <Model name="FX240" value="24 kg" />
              <Model name="FX280" value="28 kg" />
              <Model name="FX350" value="35 kg" />
              <Model name="FX450" value="45 kg" />
              <Model name="FX600" value="60 kg" />
            </div>
          </header>
          <div className={styles.hospitalityFeaturedContent}>
            <aside className={styles.hospitalityFeaturedImage}>IMAGE</aside>
            <div className={styles.hospitalityFeaturedList}>LIST</div>
          </div>
          <footer className={styles.hospitalityFeaturedFooter}>
            <LinkButton classes="linkButton_center" label="Poznaj" to="/" />
          </footer>
        </article>
        <article>
          <header>
            <Range type="pralnicowirówki wysokoobrotowe" mark="FS" />
          </header>
          <div className={styles.hospitalityFeaturedContent}>
            <aside className={styles.hospitalityFeaturedImage}>IMAGE</aside>
            <div className={styles.hospitalityFeaturedList}>LIST</div>
          </div>
          <footer className={styles.hospitalityFeaturedFooter}>
            <LinkButton classes="linkButton_center" label="Poznaj" to="/" />
          </footer>
        </article>
        <article>
          <header>
            <Range type="suszarki bębnowe" mark="T" />
          </header>
          <div className={styles.hospitalityFeaturedContent}>
            <aside className={styles.hospitalityFeaturedImage}>IMAGE</aside>
            <div className={styles.hospitalityFeaturedList}>LIST</div>
          </div>
          <footer className={styles.hospitalityFeaturedFooter}>
            <LinkButton classes="linkButton_center" label="Poznaj" to="/" />j
          </footer>
        </article>
        <article>
          <header>
            <Range type="prasownice walcowe" mark="I33" />
          </header>
          <div className={styles.hospitalityFeaturedContent}>
            <aside className={styles.hospitalityFeaturedImage}>IMAGE</aside>
            <div className={styles.hospitalityFeaturedList}>LIST</div>
          </div>
          <footer className={styles.hospitalityFeaturedFooter}>
            <LinkButton classes="linkButton_center" label="Poznaj" to="/" />
          </footer>
        </article>
        <article>
          <header>
            <Range type="prasownice walcowe" mark="I50" />
          </header>
          <div className={styles.hospitalityFeaturedContent}>
            <aside className={styles.hospitalityFeaturedImage}>IMAGE</aside>
            <div className={styles.hospitalityFeaturedList}>LIST</div>
          </div>
          <footer className={styles.hospitalityFeaturedFooter}>
            <LinkButton classes="linkButton_center" label="Poznaj" to="/" />
          </footer>
        </article>
      </main>
    </React.Fragment>
  );
}

function Range({ type, mark }) {
  return (
    <div className={styles.range}>
      <p className={styles.rangeType}>{type}</p>
      <div className={styles.rangeName}>
        <span className={styles.rangeMark}>{mark}</span>
        <p className={styles.rangeLine}>linia</p>
      </div>
    </div>
  );
}
function Model({ name, value }) {
  return (
    <div className={styles.model}>
      <span className={styles.modelName}>{name}</span>
      <span className={styles.modelValue}>{value}</span>
    </div>
  );
}
Hospitality.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default Hospitality;
