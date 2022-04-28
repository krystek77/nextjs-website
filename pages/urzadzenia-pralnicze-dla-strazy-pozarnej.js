/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-strazy-pozarnej
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Subtitle from 'components/Subtitle/Subtitle';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import List from 'components/List/List';
import LinkButton from 'components/LinkButton/LinkButton';
import Image from 'next/image';
import styles from 'styles/urzadzenia-pralnicze-dla-strazy-pozarnej.module.css';

const title = 'Wyposażenie pralnicze dla służb cywilnych, straży pożarnej';
const description =
  'Zbudowane od podstaw pralnicowirówki i suszarki przemysłowe 👨‍💼, aby zwiększyć ochronę właściwości specjalistycznej odzieży ochronnej służb cywilnych, straży pożarnej. Poznaj pralnicowirówki SoftWash oras suszarki komorowe';
const featuredEquipments = [
  'pralnicowirówka wolnostojąca wysokoobrotowa, serii FX ze sterownikiem SoftWash Extreme Care Control®, z 3 zaworami zasilającymi w wodę oraz systemem Shower-Jet ®',
  'suszarka bębnowa, serii T w wersji z pomiarem wilgotności, rewersją bębna oraz bębnem wewnętrznym ze stali nierdzewnej, o podgrzewie elektrycznym, gazowym bądź z pompą ciepła, ze sterownikiem mikroprocesorowym Full Controll OPL',
  'do ciężkich i specjalistycznych kombinezonów strażackich, dedykowana suszarka komorowa, typ FDC6 z podwójnym systemem suszenia, zarówno od strony wewnętrznej i zewnętrznej, zrealizowanym dzięki specjalnej konstrukcji wieszaków i 2 niezależnym wentylatorami regulującym przepływ ciepłego powietrza wraz z systemem Humidity Tracking System ® - pomiarem wilgotności',
  'zestaw pomp do płynnych środków piorących, od 2 do 6 pomp, np. EvoClean',
  'podgrzewacz wody, jeśli temperatura wody jest mniejsza niż 10 ° C',
  'zmiękczacz wody, jeżeli twardość wody jest większa niż 10 ° francuskich lub 100ppm',
  'chemia do prania specjalistycznej odzieży ochronnej: alkaiczny środek wspomagający pranie, środek do prania zasadniczego, środek impregnujący, środek do dezynfekcji',
  'urządzenia do prasowania fasonowego, m.in. manekiny, zestawy do prasowania itp., w razie potrzeb, aby podnieść produktywność pralni',
];
const featuresFDC = [
  'wydajność suszenia to 6-ść kombinezonów lub 20 kg prania',
  'HTS - system zatrzymujący proces suszenia kiedy pranie jest suche',
  'możliwość konfiguracji programów suszenia',
  'wyjmowane wieszaki dla ułatwienia obsługi i eksploatacji',
  'procedura suszenia aktywująca impregnację',
  'drzwi otwierane pod kątem 190 °',
  'podówjna ochrona przed przegrzaniem - obudowa wykonana z 2 warstw blachy',
  'światło wewnętrz suszarki',
  'zdejmowana góra urządzenia dla łatwej instalacji i konserwacji',
  'komunikaty, na sterowniku w języku polskim',
  '2 wentylatory idealnie regulujące cyrkulację powietrza - wentylator zasysający i wentylator odciągający powietrze',
  'specjalna konstrukcja wieszaków zapewniająca suszenia odzieży z zewnątrz i wewnątrz - wydajność i osczędność na energii o 50% w porównaniu do suszarek komorowych innych producentów, nie dedykowanych do suszenia ciężkiej odzieży ochronnej',
];
const featuresSW = [
  'sterownik mikroprocesorowy z ustawionymi programami do prania SoftWash',
  'specjalne programy do prania odzieży ochronnej, delikatnej i specjalistycznej',
  'nierdzewny bęben wewnętrzny i zewnętrzny',
  '3 zawory zasilające w wodę zimną miękką, zimną twardą, ciepłą',
  'moduł podłączenia pomp płynnych środków piorących - 8 sygnałów 24VAC',
  '99 programów prania',
  'duża średnica okna wsadowego dla łatwego załadunku i wyładunku prania',
  'duża średnica zaworu spustowego ∅ 76mm',
  'łatwy dostęp do wszystkich podzespołów',
  'system Shower Jet®',
];
const featuresSoftWash = [
  '99 programów prania',
  'w pełni programowalny',
  'swobodna konfiguracja programów prania, parametrów poszczególnych cykli oraz parametrów pracy urządzenia',
  'czytelny, graficzny wyświetlacz z jasnymi komunikatami',
  'port USB',
  'zapewnia optymalizację całego procesu prania, umożliwiając minimalizację kosztów zużycia energii i wody dla niepełnych załadunków i wszystkich rodzajów pranych tkanin',
  'programy fabryczne spełniające wszystkie typowe potrzeby prania',
  'w wersji SoftWash Extreme Care Controll ® programy do prania specjalistycznej odzieży ochronnej, sportowej oraz z tkanin delikatnych',
];
const featuresShowerJet = [
  'lepszą jakość prania',
  'łatwość użycia',
  'niższe koszty uruchomienia',
  'zwiększony współczynnik załadunku (aż do 2/3 dla wełny)',
  'możliwość czyszczenia bardziej delikatnych tkanin',
  'lepszą ochronę prania',
  'krótszy czas końcowego prasowania odzieży',
];
const featuresT = [
  'sterownik mikroprocesorowy Full Control (FTC)',
  '20 programów suszenia, 10 wstępnie zaprogramowanych',
  'swobodne programowanie temperatury suszenia, czasu suszenia, schładzania i poziomu wysuszenia',
  'rewersyjne obroty bębna',
  'połączenie przepływu radialnego i osiowego - system Radax®',
  'maksymalne przenoszenie ciepła',
  'maksymalne wykorzystanie ciepła',
  'niskie zużycie energii',
  'krótki czas suszenia',
  'system Sensodry® - pomiar wilgotności',
  'bezpieczne suszenie delikatnych tkanin',
  'wykrywanie wilgoci w %',
  'idealne połączenie z technologią SoftWash®',
  'idealne do pralni chemicznych, obiektów straży pożarnej',
  'duże drzwi załadunekowe dla ławego załadunku i wyładunku',
  'Samoczyszczący filtr włókień',
  'dostępna z systemem pompy ciepła EVO4',
  'podgrzew elektryczny, gazowy, parowy bądź z pompą ciepła',
];
function FireBrigade() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        og_title={title}
        twitter_title={title}
        description={description}
      />
      <Banner classes="banner__fireBrigade banner_height_auto">
        <Title
          variant="h1"
          classes="title_center title_light_500 title_maxWidth_960 title_display_h2"
          content="Zwiększ swoje bezpieczeństwo chroniąc swoją odzież ochronną"
        />
        <Description
          classes="description_center description_maxWidth_960 "
          content="Ochrona właściwości funkcjonalnych tkanin, właściwa impregnacja, to dłuższa żywotność odzieży ochronnej, zachowanie jej właściwości oraz niższe koszty prania"
        />
      </Banner>
      <main className={styles.fireBrigade}>
        <Subtitle content="Straż pożarna, służby cywilne" />
        <Title
          content="Polecane wyposażenie do prania specjalistycznej odzieży ochronnej"
          classes="title_display_h4 title_mb_2"
        />
        <List items={featuredEquipments} />
        {/** washer extractors */}
        <article
          className={`${styles.fireBrigade__article} ${styles.fireBrigade_SW}`}
        >
          <header>
            <Subtitle
              content="Sterownik SoftWash Extreme Care"
              classes="subtitle_max_width_100 subtitle_small"
            />
            <Title
              content="Pralnicowirówki wolnostojące wysokoobrotowe, linia SW"
              variant="h3"
              classes="title_display_h5"
            />
          </header>
          <div className={styles.fireBrigade__content}>
            <Description classes="description_18 description_maxWidth_auto">
              Bazą do budowy wyposażenia przeznaczonego do prania odzieży
              specjalistycznej jest pralnicowirówka wolnostojąca wysokoobrotowa,
              ze sterownikiem <strong>SoftWash Extreme Care Control</strong>{' '}
              oraz systemem <strong>Shower-Jet®</strong>. Inaczej niż w
              standardowej wersji, sterownik <strong>XControl Plus</strong>{' '}
              posiada specjalne programy do prania odzieży ochronnej, sportowej
              oraz delikatnej, które w połączeniu z zastosowanymi technologiami
              i rozwiązaniami, pozwalają na zwiększenie ochrony odzieży podczas
              prania , jej właśicowości oraz zachowanie jej funkcjonalności
              przez wiele lat.
            </Description>
            <div className={styles.fireBrigade__features}>
              <aside className={styles.fireBrigade__image}>
                <Image
                  src="/assets/images/fx.webp"
                  alt="suszarka komorowa, FDC6"
                  width={480}
                  height={640}
                />
              </aside>
              <div className={styles.fireBrigade__list}>
                <Title
                  content="Cechy"
                  variant="h4"
                  classes="title_display_h6"
                />
                <List items={featuresSW} />
              </div>
            </div>
          </div>
          <LinkButton
            label="Poznaj pralnicowirówki FX"
            to="/urzadzenia-pralnia/pralnicowirowki/FX/FX-65"
            classes="linkButton_center"
          />
        </article>
        {/** SoftWash Extreme Care Control */}
        <article
          className={`${styles.fireBrigade__article} ${styles.fireBrigade_SoftWashExtremeCare}`}
        >
          <header>
            <Subtitle
              content="SoftWash Extreme Care"
              classes="subtitle_max_width_100 subtitle_small"
            />
            <Title
              content="Dedykowane programy do prania odzieży specjalistycznej i delikatnej"
              variant="h3"
              classes="title_display_h5"
            />
          </header>
          <div className={styles.fireBrigade__content}>
            <Description classes="description_18 description_maxWidth_auto">
              Sterownik pralnicowirówek - <strong>XControl Plus®</strong> ze
              specjalnym zestawem programów do prania w technologii SoftWash®.{' '}
              <b>
                Programy dedykowane do prania specjalistycznej odzieży ochronnej
                np. ciężkich kombinezonów strażackich, odzieży sportowej oraz
                ubrań z tkanin delikatnych
              </b>
              . Połączenie technologii zastosowanych w pralnicowirówkach wraz ze
              specjalnie dobranymi parametrami poszczególnych programów prania,
              gwarantuje maksymalną ochronę właściwości odzieży i pełną ochronę
              oraz komfort osobą z niej korzystającym. To gwarancja
              bezpieczeństwa podczas pracy, komfortu oraz wygody i oszczędności
              na częstej wymianie odzieży.
            </Description>
            <div className={styles.fireBrigade__features}>
              <aside className={styles.fireBrigade__image}>
                <Image
                  src="/assets/images/controls/XControlPlus_SoftWashWasher2.webp"
                  alt="Sterownik XControl Plus SoftWash Extreme Care"
                  width={480}
                  height={640}
                />
              </aside>
              <div className={styles.fireBrigade__list}>
                <Title
                  content="Cechy"
                  variant="h4"
                  classes="title_display_h6"
                />
                <List items={featuresSoftWash} />
              </div>
            </div>
          </div>
        </article>
        {/** Shower-Jet */}
        <article
          className={`${styles.fireBrigade__article} ${styles.fireBrigade_ShowerJet}`}
        >
          <header>
            <Subtitle
              content="Shower-Jet"
              classes="subtitle_max_width_100 subtitle_small"
            />
            <Title
              content="Mniej działania mechnicznego, więcej hydraulicznego - ochrona właściwości tkanin"
              variant="h3"
              classes="title_display_h5"
            />
          </header>
          <div className={styles.fireBrigade__content}>
            <Description classes="description_18 description_maxWidth_auto">
              Technologia <strong>Shower-Jet®</strong> dostępna w
              pralnicowirówkach wolnostojących wysokoobrotowych ze sterownikiem
              <strong>SoftWash Extreme Care Control®</strong> to system prania
              oparty na działaniu hydraulicznym, zamiast mechanicznym.
              Specjalnie zaprojektowana pompa recyrkulacyjna pobiera wodę z
              dolnej części bębna pralnicowirówki i pompuje ją do góry,
              zraszając pranie. Dzięki temu zamiast obracania bębna woda jest
              przesuwana wokół odzieży. Podstawowym czynnikiem prania jest zatem
              akcja hydrualiczna, a nie machaniczna, podczas której prana odzież
              ociera się o bębęn i siebie. Zmniejszając udział czynnika
              mechanicznego, w procesie prania, bardziej chronimy odzież przed
              uszkodzeniem,{' '}
              <b>
                wydłużamy jej żywtoność i dbamy o zachowanie jej właściwości i
                funkcji
              </b>{' '}
            </Description>
            <div className={styles.fireBrigade__features}>
              <aside className={styles.fireBrigade__image}>
                <Image
                  src="/assets/images/ShowerJet.webp"
                  alt="Technologia ShowerJet"
                  width={480}
                  height={640}
                />
              </aside>
              <div className={styles.fireBrigade__list}>
                <Title
                  content="Cechy"
                  variant="h4"
                  classes="title_display_h6"
                />
                <List items={featuresShowerJet} />
              </div>
            </div>
          </div>
        </article>
        {/** FDC 6 */}
        <article
          className={`${styles.fireBrigade__article} ${styles.fireBrigade_FDC}`}
        >
          <header>
            <Subtitle
              content="Suszarka komorowa, typ FDC6"
              classes="subtitle_max_width_100 subtitle_small"
            />
            <Title
              content="Suszenie cieżkiej odzieży strażackiej bądź ochronnej z systemem Humidity Tracking System ®"
              variant="h3"
              classes="title_display_h5"
            />
          </header>
          <div className={styles.fireBrigade__content}>
            <Description classes="description_18 description_maxWidth_auto">
              <strong>Suszarka komorowa, typ FDC6</strong> została specjalnie
              zaprojektowana do suszenia odzieży ochronnej. Wyposażona jest w 6
              specjalnie zaprojektowanych wieszaków, aby suszyć odzież, zarówno
              z <b>od jej wnętrza jak i z zewnątrz</b>. Suszy skutecznie i
              wydajnie ciężką odzież ochronną. Brak akcji mechanicznej wydłuża
              żywotność odzieży i chroni jej właściwości. FDC 6 może być
              wyposażona w dodatkowe wieszaki do suszenia butów i rękawic.
              Załadunek urządzenia wynosi 20 kg lub 6 dużych kombinezonów
              strażackich.
            </Description>
            <div className={styles.fireBrigade__features}>
              <aside className={styles.fireBrigade__image}>
                <Image
                  src="/assets/images/FDC.webp"
                  alt="suszarka komorowa, FDC6"
                  width={480}
                  height={640}
                />
              </aside>
              <div className={styles.fireBrigade__list}>
                <Title
                  content="Cechy"
                  variant="h4"
                  classes="title_display_h6"
                />
                <List items={featuresFDC} />
              </div>
            </div>
          </div>
          <footer className={styles.fireBrigade__footer}>
            <div>
              <Image
                src="/assets/images/FDC_hangers_gloves_boots.webp"
                alt="suszarka komorowa, uchwyty na buty"
                width={320}
                height={280}
              />
            </div>
            <div>
              <Image
                src="/assets/images/FDC_hangers.webp"
                alt="suszarka komorowa, wieszaki"
                width={320}
                height={280}
              />
            </div>
          </footer>
          <Description classes="description_center description_mb_2 description_maxWidth_760">
            Suszarka komorowa zrealizowana, w bliskiej współpracy ze
            <b> Szwedzkim Instututem ochrony zdrowia i życia strażaków</b>{' '}
            (oryginał: Healthy FireFighters). Suszarka ma unikalną konstrukcję,
            która suszy odzież wydajnie i łagodnie, nie niszcząc właściwości
            odzieży.
          </Description>
          <LinkButton
            label="Poznaj suszarkę komorową FDC"
            to="/urzadzenia-pralnia/suszarki/FDC/FDC"
            classes="linkButton_center"
          />
        </article>
        {/** Humidity Tracking System */}
        <article
          className={`${styles.fireBrigade__article} ${styles.fireBrigade_HTS}`}
        >
          <header>
            <Subtitle
              content="Humidity Tracking System®"
              classes="subtitle_max_width_100 subtitle_small"
            />
            <Title
              content="System śledzenia wilgotności suszonej odzieży"
              variant="h3"
              classes="title_display_h5"
            />
          </header>
          <div className={styles.fireBrigade__content}>
            <Description classes="description_18 description_maxWidth_auto">
              <strong>Suszarka komorowa, typ FDC6</strong> jest wyposażona w
              zawansowany technicznie system śledzenia wilgotności resztkowej
              suszonej odzieży. System wykrywa poziom wilgotności odzieży i
              zatrzymuje pranie dokładnie wtedy kiedy jest ono suche. Takie
              rozwiąznie gwarantuje bardziej wydajny proces suszenia, który
              oszczędza czas i pieniądze.
            </Description>
            <List
              items={[
                'oszczędność czasu',
                'oszczędność pieniędzy',
                'brak ryzyka przesuszenia',
                'maksymalna ochrona odzieży',
                'możliwość suszenia delikatnych tkanin',
                'prosta obsługa',
              ]}
            />
          </div>
        </article>
        {/** T dryers */}
        <article
          className={`${styles.fireBrigade__article} ${styles.fireBrigade_T}`}
        >
          <header>
            <Subtitle
              content="Suszarki bębnowe, seria T"
              classes="subtitle_max_width_100 subtitle_small"
            />
            <Title
              content="W wersji z rewersją bębna i pomiarem wilgotności"
              variant="h3"
              classes="title_display_h5"
            />
          </header>
          <div className={styles.fireBrigade__content}>
            <div className={styles.fireBrigade__features}>
              <aside className={styles.fireBrigade__image}>
                <Image
                  src="/assets/images/T_03.webp"
                  alt="Technologia ShowerJet"
                  width={480}
                  height={640}
                />
              </aside>
              <div className={styles.fireBrigade__list}>
                <Title
                  content="Cechy"
                  variant="h4"
                  classes="title_display_h6"
                />
                <List items={featuresT} />
              </div>
            </div>
          </div>
          <LinkButton
            label="Poznaj suszarki serii T"
            to="/urzadzenia-pralnia/suszarki/T/T-16"
            classes="linkButton_center"
          />
        </article>
      </main>
    </React.Fragment>
  );
}
FireBrigade.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default FireBrigade;
