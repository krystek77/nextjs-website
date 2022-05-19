import React from "react";
import PageLayout from "components/Layout/PageLayout";
import HeadMetaTags from "components/HeadMetaTags/HeadMetaTags";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Description from "components/Description/Description";
import styles from "styles/goscinnosc.module.css";
import Subtitle from "components/Subtitle/Subtitle";
import SquareBackground from "components/SquareBackground/SquareBackground";
import List from "components/List/List";
import LinkButton from "components/LinkButton/LinkButton";
import Image from "next/image";

const title = "Urządzenia do pralni hotelowej, pensjonatów, restauracji ";
const description = "Pralnicowirówki, suszarki przemysłowe i prasownice, urządzenia pralnicze niezbędne w pralni każdego hotelu, aby świadczyć najwyższy poziom usługi gościnności i satysfakcji Twoich gości na tym samym poziomie.";

function Hospitality() {
  return (
    <React.Fragment>
      <HeadMetaTags title={title} og_title={title} twitter_title={title} description={description} />
      <Banner classes=' banner_height_auto banner__hospitality'>
        <Title classes='title_center title_display_h2 title_maxWidth_960 title_light_500 ' variant='h1' content='Rozwiązania pralnicze dla doskonałych usług gościnnych' />
      </Banner>
      {/** Introduction */}
      <section className={styles.hospitalityIntroduction}>
        <SquareBackground />
        <div className={styles.hospitalityIntroductionDescription}>
          <Description classes='description_mb_2 description_maxWidth_760'>
            W branży hotelarskiej wiele aspektów wpływa na satysfakcję gościa, m.in. obsługa restauracyjna, pokoi, sposób zakwaterowania, recepcja. Poza wysokiej jakości obsługą, również czystość i świeżość ma dla gościa ogromne znaczenie.
          </Description>
          <Description classes='description_18 description_maxWidth_760'>
            Zatem <b>pralnia hotelowa ma też wpływ na satysfakcję gościa</b>. Miękka i świeża pościel oraz ręczniki, czyste obrusy i dobrze wyprasowane serwetki potęgują pozytywne wrażenia jakich oczekują Twoi goście podczas pobytu w twoim hotelu. Bielizna hotelowa wykonana jest z różnych materiałów
            i tkanin a zatem wymaga różnych procesów prania oraz obróbki, aby zachować jej właściwości oraz wydłużyć żywotność. Dzięki nowoczesnym urządzeniom pralniczym, wyposażonym w programy spełniające wszystkie wymagania dotyczące prania oraz wymagane procesy (pranie, suszenie, prasowanie)
            zapewnisz swoim gościom również zawsze czyste, świeże i dobrej jakości pranie.
          </Description>
        </div>
      </section>
      {/** Innovator  */}
      <section className={styles.hospitalityInnovator}>
        <SquareBackground classes='squaresBgDecorator_bottom_right squaresBgDecorator_rotate_0' />
        <div className={styles.hospitalityInnovatorInner}>
          <header className={styles.hospitalityInnovatorHeader}>
            <Subtitle content='Sprzęt pralniczy a jakość usług' classes='subtitle_max_width_760' />
            <Title content='Wybór wyposażenia pralni hotelowej ma znaczenie' classes='title_maxWidth_760 title_mb_2' />
          </header>

          <Description classes='description_mb_2 description_18 description_maxWidth_auto'>
            <b>Wybór przemysłowych urządzeń pralniczych</b> do pralni hotelowej, aby osiągnąć najlepszą jakość twojego prania, jest <b>wyborem stopnia usług jaki chciałbyś świadczyć swoim gościom</b>. Jeśli chodzi o obsługę prania hotelwoego dajemy Ci najbardziej zaawansowane i różnorodne
            rozwiązania, aby utrzymać jakość twojego prania na najwyższym poziomie. Posiadanie własnej pralni w obiekcie, daje dużo większą kontrolę nad jakością prania i jego obsługi niż jakiekolwiek usługi firmy zewnętrznej. Własna pralnia to też wygoda, większa elastyczność oraz gwarancja
            czystego i świeżego prania na czas. Z szeroką gamą urządzeń marki Primus oraz Pralma znajdziesz idealne rozwiązanie pralnicze do potrzeb swojego obiektu.
          </Description>
          <Description classes='description_18 description_maxWidth_auto'>
            Wybrany park maszyn do pralni dobrze prosperującego hotelu musi posiadać realne wsparcie techniczne i serwis na najwyższym poziomie. Każde przestoje moga przełożyć się niekorzystnie na straty wizerunkowe Twojego obiektu. Brak czystej i świeżej pościeli na czas obniża jakość uslugi.
            Współpracując z Pralmą, z ponad 30 letnim doświadczeniem na rynku, masz pewność dostępu <b>do fachowej pomocy technicznej zawsze gdy jej potrzebujesz</b>.
          </Description>
          <Description classes='description_18 description_maxWidth_auto'>
            <strong>Primus</strong>- urządzeń którego, <b> autoryzowanym dystrybutorem i serwisem Pralma jest najdłużej na rynku (od 1994)</b> udowodnił, że jest ekspertem w dziedzinie innowacji. Wiele rozwiązań pralniczych jest opatentowanych i stanowią obecnie znaki towarowe Primus. Wiele też
            stalo się póżniej standardowym wyposażeniem urządzeń. Dziś urządzenia marki Primus wciąż wyznaczają te standardy, z kluczowymi zaletami i wyrozniającymi się funkcjami, które dają Ci sprzęt z najnowocześniejszą technologią, ekologicznymi rozwiązaniami i zaspokoją Twoje potrzby w zakresie
            prania w hotelu.
          </Description>
        </div>
      </section>
      {/** Technologies for excellent  hospitality service */}
      <section className={styles.hospitalityTechnologies}>
        <div className={styles.hospitalityTechnologiesInner}>
          <header>
            <Subtitle content='Technologie pralnicze zapewniające wyższą jakość usług hotelowych' classes='subtitle_max_width_760' />
            <Title variant='h2' content='Rozwiązania pralnicze dla branży hotelarskiej' />
          </header>
          <article>
            <header>
              <Title variant='h3' content='Duża oszczędność wody i energii' classes='title_mb_2' />
            </header>
            <Title variant='h4' content='Pranie' />
            <List classes='list_mb_2' items={["20% mniejsze zużycie energii", "25% mniniejsza wilgotność resztkowa", "lepsze rezultat prania przy zuzyciu wody mniejszym od 30%"]} />
            <Title variant='h4' content='Suszenie' />
            <List
              classes='list_mb_2'
              items={[
                "zwiększona wydajność suszenia dzięki innowacyjnej technologii podgrzewu pompą ciepła - EVO4",
                "zwiększony calkowity przepływ ciepłaego powietrza dzięki połączeniu radialnego i osiowego przepływu",
                "zmniejszenie zużycia energii o 65% podczas ssuzenia",
                "mniej niż 5kW mocy niezbędnej do instalacji",
                "zamknięty przepływ powietrza bez dodatkowej wentylacji",
                "skrócony cykl suszenia dzięki perforowanym przewałom",
              ]}
            />
          </article>
          <article>
            <header>
              <Title variant='h3' content='Optymalizacja procesu prania dla lepszych jego rezultatów' classes='title_mb_2' />
            </header>
            <Title variant='h4' content='Pranie' />
            <List
              classes='list_mb_2'
              items={[
                "bardziej wydajne odwirowanie wody",
                "ekstreamlnie niksi procent wilgotności resztkowej",
                "pranie nie styka się z bębnem Cascade™ drum",
                "opatentowany pojemnik środków piorących i bardzo precyzyjny czujnik poziomu wody",
                "brak bezpośredniego kontaktu chemii z praniem",
                "zapisywanie parametrów prania w pamięci sterownika",
                "pełne śledzenie cykli prania",
                "zgodność z normami higienicznymi",
                "możliwość stosowania płynnych środków piorących",
                "łatwe rozwiązania typu plug and play",
              ]}
            />
            <Title variant='h4' content='Prasowanie' />
            <List classes='list_mb_2' items={["automatycznie regulowana prędkość prasowania zależnie od wilgotności resztkowej prania", "brak mokrej bielizny po praniu"]} />
          </article>
          <article>
            <header>
              <Title variant='h3' content='Lepsza wydajność pracy' classes='title_mb_2' />
            </header>
            <Title variant='h4' content='Pranie' />
            <List
              classes='list_mb_2'
              items={["inteligentne napełnianie wodą i chemią w zależności od załadunku", "czujniki ważenia w ramie pralnicowirówki", "nieograniczone możliwości programwoania", "przyjazny użytkownikowi, czytelny wyświetlacz", "port USB do wygodnego i szybkiego ładowania nowych programów prania"]}
            />
          </article>
        </div>
      </section>
      <main className={styles.hospitality}>
        <header className={styles.hospitalityMainHeader}>
          <Subtitle content='Polecane wyposażenie pralni hotelowej' classes='subtitle_max_width_760' />
          <Title content='Doskonała jakość usług hotelarskich' classes='title_mb_3' />
        </header>
        <div className={styles.hospitalityBackground}>
          <article className={styles.hospitalityFeatured}>
            <header className={styles.hospitalityFeaturedHeader}>
              <Range type='pralnicowirówki sztywnomocowane' mark='RX' />
              <div className={styles.hospitalityFeaturedModels}>
                <Model name='RX80' value='8 kg' />
                <Model name='RX105' value='10.5 kg' />
                <Model name='RX135' value='13.5 kg' />
                <Model name='RX180' value='18 kg' />
                <Model name='RX240' value='24 kg' />
                <Model name='RX280' value='28 kg' />
                <Model name='RX350' value='35 kg' />
                <Model name='RX520' value='52 kg' />
              </div>
            </header>
            <div className={styles.hospitalityFeaturedContent}>
              <aside className={styles.hospitalityFeaturedImage}>
                <Image src='/assets/images/rx.webp' alt='pralnicowirówki sztywnomocowane' width={320} height={426} />
              </aside>
              <div className={styles.hospitalityFeaturedList}>
                <Title content='Cechy' variant='h3' classes='title_display_h4 title_uppercase title_mb_2' />
                <List
                  items={[
                    "Xcontrol® - łatwy w użyciu mikroprocesor",
                    "nierdzewny panel górny i boki lakirowane proszkowo w kolorze stali nierdzewnej",
                    "nierdzewny bęben wewnętrzny z technologią Cascade™ drum i nierdzewny bęben zewnętrzny",
                    "opatentowany system dozowania chemii",
                    "duża średnica zaworu spustowego (Ø 76 mm)",
                    "łatwy dostęp do wszystkich istotnych części eksploatacyjnych",
                    "duża średnica otworu załadunkowego dla łatwego załadunku i wyładunku",
                  ]}
                  classes=''
                />
              </div>
            </div>
            <footer className={styles.hospitalityFeaturedFooter}>
              <LinkButton classes='linkButton_center' label='Poznaj' to='/urzadzenia-pralnia/pralnicowirowki/RX_G200/RX-65' />
            </footer>
          </article>
        </div>
        <div className={styles.hospitalityBackground}>
          <article className={styles.hospitalityFeatured}>
            <header className={styles.hospitalityFeaturedHeader}>
              <Range type='pralnicowirówki wysokoobrotowe' mark='FX' />
              <div className={styles.hospitalityFeaturedModels}>
                <Model name='FX65' value='6.5 kg' />
                <Model name='FX80' value='8 kg' />
                <Model name='FX105' value='10.5 kg' />
                <Model name='FX135' value='13.5 kg' />
                <Model name='FX180' value='18 kg' />
                <Model name='FX240' value='24 kg' />
                <Model name='FX280' value='28 kg' />
                <Model name='FX350' value='35 kg' />
                <Model name='FX450' value='45 kg' />
                <Model name='FX600' value='60 kg' />
              </div>
            </header>
            <div className={styles.hospitalityFeaturedContent}>
              <aside className={styles.hospitalityFeaturedImage}>
                <Image src='/assets/images/washer_extractors.webp' alt='pralnicowirówki wysokoobrotowe' width={320} height={426} />
              </aside>
              <div className={styles.hospitalityFeaturedList}>
                <Title content='Cechy' variant='h3' classes='title_display_h4 title_uppercase title_mb_2' />
                <div>
                  <Title content='FX65, FX80, FX135, FX180, Fx240, FX280' variant='h4' classes='title_display_h5 title_uppercase title_mb_2' />
                  <List
                    items={[
                      "Xcontrol - przyjazny i łatwy w użyciu sterownik mikroprocesorowy",
                      "nierdzewny panel górny oraz boki lakierowane proszkowo w kolorze stali nierdzewnej",
                      "nierdzewny bęben wewnętrzny z technologią Cascade™ drum i nierdzewny bęben zewnętrzny",
                      "opatentowany system dozowania proszku - brak bezpośredniego kontaktu chemii z praniem",
                      "duża średnica zaworu spustowego (Ø 76mm)",
                      "łatwy dostęp do wszystkich istotnych podzespołów eksploatacyjnych od przodu maszynyn",
                      "duża średnica otworu załadunkowego dla łatwego załadunku i wyładunku prania",
                    ]}
                    classes='list_mb_2'
                  />
                  <Title content='FX350, FX450, FX600' variant='h4' classes='title_display_h5 title_uppercase title_mb_2' />
                  <List
                    items={["duża wydajność","wolnosotojąca wysokoobrotowa", "nierdzewny bęben wewnętrzny i zewnętrzny", "Xcontrol Plus - w pełni programowalny sterownik mikroprocesorowy", "wysoko wydajne zawory zasilające", "2 duże zawory spustowe(Ø 76 mm)", "bęben wewnętrzny z technologią Cascade Drum", "gumowy odbojnik", "duża średnica otworu załadunkowego dla łatwego załadunku i wyładunku prania"]}
                    classes='list_mb_2'
                  />
                </div>
              </div>
            </div>
            <footer className={styles.hospitalityFeaturedFooter}>
              <LinkButton classes='linkButton_center' label='Poznaj' to='/' />
            </footer>
          </article>
        </div>
        <div className={styles.hospitalityBackground}>
          <article className={styles.hospitalityFeatured}>
            <header className={styles.hospitalityFeaturedHeader}>
              <Range type='pralnicowirówki wysokoobrotowe' mark='FS' />
              <div className={styles.hospitalityFeaturedModels}>
                <Model name='FS800' value='80 kg' />
                <Model name='FS1000' value='100 kg' />
                <Model name='FS1200' value='120 kg' />
              </div>
            </header>
            <div className={styles.hospitalityFeaturedContent}>
              <aside className={styles.hospitalityFeaturedImage}>
                <Image src='/assets/images/fs.webp' alt='pralnicowirówki wysokoobrotowe' width={320} height={426} />
              </aside>
              <div className={styles.hospitalityFeaturedList}>
                <Title content='Cechy' variant='h3' classes='title_display_h4 title_uppercase title_mb_2' />
                <List items={["w pełni programowalny sterownik XControl Plus", "2 zawory spustowe o dużej średnicy (2 x Ø 103mm)", "moduł podłączenia pomp płynnych środków piorących", "łatwy dostęp do wszystkich istotnych podzespołów", "PowerWash - perforowane przewały"]}/>
              </div>
            </div>
            <footer className={styles.hospitalityFeaturedFooter}>
              <LinkButton classes='linkButton_center' label='Poznaj' to='/' />
            </footer>
          </article>
        </div>
        <div className={styles.hospitalityBackground}>
          <article className={styles.hospitalityFeatured}>
            <header className={styles.hospitalityFeaturedHeader}>
              <Range type='suszarki bębnowe' mark='T' />
              <div className={styles.hospitalityFeaturedModels}>
                <Model name='T9' value='9 kg' />
                <Model name='T11' value='11 kg' />
                <Model name='T13' value='13 kg' />
                <Model name='T16' value='16 kg' />
                <Model name='T24' value='24 kg' />
                <Model name='T35' value='35 kg' />
              </div>
            </header>
            <div className={styles.hospitalityFeaturedContent}>
              <aside className={styles.hospitalityFeaturedImage}>
                <Image src='/assets/images/T_9_35.webp' alt='przemysłowe suszarki bębnowe' width={320} height={426} />
              </aside>
              <div className={styles.hospitalityFeaturedList}>
                <Title content='Cechy' variant='h3' classes='title_display_h4 title_uppercase title_mb_2' />
                <div>
                  <Title content='T9, T11, T13, T16' variant='h4' classes='title_display_h5 title_uppercase title_mb_2' />
                  <List items={["RADAX - połączenie radialnego i osiowego przepływu powietrza", "łatwy w uzyciu mikroprocesor", "duży otwór wsadowy dla łatwego załadunku i wyładunku", "dostępne z pompą ciepła"]} classes='list_mb_2' />
                  <Title content='T24, T35' variant='h4' classes='title_display_h5 title_uppercase title_mb_2' />
                  <List items={["sterownik mikroprocesorowy ECT w standardzie", "radialny przepływ powietrza z perforowanymi przewałami", "nierdzewny bęben wewnętrzny o dużej średnicy"]} classes='list_mb_2' />
                </div>
              </div>
            </div>
            <footer className={styles.hospitalityFeaturedFooter}>
              <LinkButton classes='linkButton_center' label='Poznaj' to='/' />j
            </footer>
          </article>
        </div>
        <div className={styles.hospitalityBackground}>
          <article className={styles.hospitalityFeatured}>
            <header className={styles.hospitalityFeaturedHeader}>
              <Range type='prasownice walcowe' mark='I33' />
              <div className={styles.hospitalityFeaturedModels}>
                <Model name='I33-160E' value='62 kg/godz.' />
                <Model name='I33-200E' value='70 kg/godz.' />
                <Model name='I33-160G' value='58 kg/godz.' />
                <Model name='I33-200G' value='72 kg/godz.' />
              </div>
            </header>
            <div className={styles.hospitalityFeaturedContent}>
              <aside className={styles.hospitalityFeaturedImage}>
                <Image src='/assets/images/I33.webp' alt='prasownice walcowe' width={320} height={426} />
              </aside>
              <div className={styles.hospitalityFeaturedList}>
                <Title content='Cechy' variant='h3' classes='title_display_h4 title_uppercase title_mb_2' />
                <List
                  items={[
                    "Indication of ironing speed and temperature",
                    "napęd z przemiennikiem częstotliwości",
                    "oszczędność miejsca: przednie wywiezienie prania",
                    "automatyczny system schładzania pasów prasujących",
                    "łatwy w obsludze sterownik mikroprocesorowy",
                    "opatentowany napęd bezpośredni",
                    "opatentowany centralny system wentylacji",
                  ]}
                />
              </div>
            </div>
            <footer className={styles.hospitalityFeaturedFooter}>
              <LinkButton classes='linkButton_center' label='Poznaj' to='/' />
            </footer>
          </article>
        </div>
        <div className={styles.hospitalityBackground}>
          <article className={styles.hospitalityFeatured}>
            <header className={styles.hospitalityFeaturedHeader}>
              <Range type='prasownice walcowe' mark='I50' />
              <div className={styles.hospitalityFeaturedModels}>
                <Model name='I50-160' value='65 kg/godz.' />
                <Model name='I50-200' value='80 kg/godz.' />
                <Model name='I50-320' value='95 kg/godz.' />
              </div>
            </header>
            <div className={styles.hospitalityFeaturedContent}>
              <aside className={styles.hospitalityFeaturedImage}>
                <Image src='/assets/images/I50.webp' alt='prasownice walcowe' width={320} height={426} />
              </aside>
              <div className={styles.hospitalityFeaturedList}>
                <Title content='Cechy' variant='h3' classes='title_display_h4 title_uppercase title_mb_2' />
                <List items={["szeroki kąt opasania prania - ponad 300°", "pełny system zabezpieczeń", "20 wstępnie ustawionych programów prasowania", "możliwość tylnego wywiezienia prania", "napęd z przemiennikiem częstotliwości", "oszczędność miejsca: przednie wywiezienie prania"]} />
              </div>
            </div>
            <footer className={styles.hospitalityFeaturedFooter}>
              <LinkButton classes='linkButton_center' label='Poznaj' to='/' />
            </footer>
          </article>
        </div>
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
