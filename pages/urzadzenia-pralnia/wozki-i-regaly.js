import PageLayout from 'components/Layout/PageLayout';
import React from 'react';
import HeadMetaTags from 'components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import List from 'components/List/List';
import styles from './wozki-i-regaly.module.css';
import Subtitle from 'components/Subtitle/Subtitle';
import Leaflets from 'containers/Leaflets/Leaflets';
import Image from 'next/image';

const title =
  'Urządzenia 🛒 do transportu i składowania prania w pralni przemysłowej';
const description =
  'Popraw komfort 🛒👱 i organizację pracy w pralni przemysłowej. Wygodnie transportuj suche i mokre pranie, przechowuj czyste w sposob schludny i poukładany.';
function TransportEquipments() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        description={description}
        twitter_title={title}
        og_title={title}
      />
      <Banner classes="banner__trolleys">
        <Title
          content="Urządzenia do transportu i składowania prania"
          variant="h1"
          classes="title_light_500 title_center title_maxWidth_960"
        />
        <Description classes="description_center">
          Popraw komfort i organizację pracy w pralni przemysłowej. Wygodnie
          transportuj suche i mokre pranie, przechowuj czyste w sposob schludny
          i poukładany.
        </Description>
      </Banner>
      <main className={styles.transportEquipments}>
        {/** WM-150 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/wm150.webp"
              alt="wózek na mokre pranie"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="WM-150" />
            <Title content="Wózek na mokre pranie" />
            <Description classes="description_18">
              Wózek, typ WM-150, w wersji standardowej, jest przeznaczony do
              transportu międzyoperacyjnego mokrego prania w pomieszczeniach
              pralni. Podwozie wykonane ze <b>stali kwasoodpornej</b> jest
              osadzone na <b>kółkach łożyskowanych z niebrudzącą gumą</b> o
              średnicy Φ125 mm. Poruszanie się wózkiem jest komfortowe a kółka
              nie pozostawiają śladów na posadzce. Dodatkowo 2 kółka skrętne
              ułatwiają manewrowanie pełnym wózkiem w ciasnych korytarzach.
              Pojemnik polipropylenowy ma atest PZH. Gumowy wąż ułatwia
              odprowadzanie wody pozostałej po mokrym praniu.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'pojemność: 150 litrów',
                'kółka: 2 skrętne, 2 stałe',
                'wężyk do odporowadzania wody',
                'średnica kółka: Φ 125 mm',
                'wysokość: 750 mm',
                'szerokość: 600 mm',
                'długość: 800 mm',
              ]}
            />
          </div>
        </div>
        {/** WS-150 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/ws150.webp"
              alt="wózek na mokre pranie"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="WS-150" />
            <Title content="Wózek na suche pranie" />
            <Description classes="description_18">
              Wózek, typ WS-150, w wersji standardowej, jest przeznaczony do
              transportu międzyoperacyjnego suchego bądź brudnego prania w
              pomieszczeniach pralni. Podwozie wykonane ze{' '}
              <b>stali kwasoodpornej</b> jest osadzone na{' '}
              <b>kółkach łożyskowanych z niebrudzącą gumą</b> o średnicy Φ125
              mm. Poruszanie się wózkiem jest komfortowe a kółka nie
              pozostawiają śladów na posadzce. Dodatkowo 2 kółka skrętne
              ułatwiają manewrowanie pełnym wózkiem w ciasnych korytarzach.
              Pojemnik polipropylenowy ma atest PZH. Wózek może być wyposażony w
              pokrywę: plastikową bądź aluminiową.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'pojemność: 150 litrów',
                'kółka: 2 skrętne, 2 stałe',
                'średnica kółka: Φ 125 mm',
                'wysokość: 750 mm',
                'szerokość: 600 mm',
                'długość: 800 mm',
              ]}
            />
          </div>
        </div>
        {/** WST-280 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/wst280.webp"
              alt="wózek siatkowy na suche pranie"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="WST-280" />
            <Title content="Wózek siatkowy na suche pranie" />
            <Description classes="description_18">
              Wózki siatkowe WST przeznaczone są do transportu
              międzyoperacyjnego suchega prania, brudnego bądź czystego.
              Ergonomiczna rączka, szerokość 600 mm oraz 4 kółka skrętne
              gwarantują wygodne poruszanie się po pomieszczeniach i wąskich
              korytarzach. Solidna konstrukcja zapewnia{' '}
              <b>nośność aż do 100 kg</b>. Urządzenia wykonane są z rurek
              lakierowanych proszkowo na atrakcyjnie wyglądający kolor
              niebieski, burty wypełnione są gęsto utkaną siatką z rurek. Wózek
              może być wyposażony w większe kółka do przemieszczania się po
              nierównym podłożu.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'pojemność: 280 litrów',
                'konstrukcja: siatka z drutu 4x50x50 mm, lakierowana',
                'nośność: 100 kg',
                'kółka: 4 skrętne',
                'średnica kółka: Φ 125 mm',
                'wysokość: 750 mm',
                'szerokość: 600 mm',
                'długość: 800 mm',
              ]}
            />
            <p className={styles.transportEquipments__option}>
              <span className={styles.transportEquipments__optionLabel}>
                Opcje:
              </span>
              Kółka o średnicy 165 mm
            </p>
          </div>
        </div>
        {/** WST-400 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/wst280.webp"
              alt="wózek siatkowy na suche pranie"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="WST-400" />
            <Title content="Wózek siatkowy na suche pranie" />
            <Description classes="description_18">
              Wózki siatkowe WST przeznaczone są do transportu
              międzyoperacyjnego suchega prania, brudnego bądź czystego.
              Ergonomiczna rączka, szerokość 600 mm oraz 4 kółka skrętne
              gwarantują wygodne poruszanie się po pomieszczeniach i wąskich
              korytarzach. Solidna konstrukcja zapewnia{' '}
              <b>nośność aż do 150 kg</b>. Urządzenia wykonane są z rurek
              lakierowanych proszkowo na atrakcyjnie wyglądający kolor
              niebieski, burty wypełnione są gęsto utkaną siatką z rurek. Wózek
              może być wyposażony w większe kółka do przemieszczania się po
              nierównym podłożu.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'pojemność: 280 litrów',
                'konstrukcja: siatka z drutu 4x50x50 mm, lakierowana',
                'nośność: 150 kg',
                'kółka: 4 skrętne',
                'średnica kółka: Φ 125 mm',
                'wysokość: 750 mm',
                'szerokość: 600 mm',
                'długość: 1000 mm',
              ]}
            />
            <p className={styles.transportEquipments__option}>
              <span className={styles.transportEquipments__optionLabel}>
                Opcje:
              </span>
              Kółka o średnicy 165 mm
            </p>
          </div>
        </div>
        {/** KJ */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/KJ.webp"
              alt="kontener jezdny"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="KJ" />
            <Title content="Kontener jezdny" />
            <Description classes="description_18">
              Kontenery jezdne, serii KJ to doskonałe rozwiązanie do transportu
              większej ilości bielizny do pomieszczeń pralni przemysłowej.
              Konstrukcja jest wykonana z rurek galwanizowanych o dużej
              średnicy. Podwozie osadzone na 2 kółkach skrętnych i 2 stałych
              jest solidne oraz wytrzymałe. Standardowe wymiary dopasowane są
              tak, aby poruszanie się po wąskich korytarzach było wygodne i
              komfortowe. Kontener posiada 3 półki, w tym 2 składane co
              umożliwia dopasowanie kontenera do indywidualnych potrzeb
              transportu bielizny, zaś 2 drzwi ułatwiają jego załadunek i
              rozładunek. Kontener może być wyposażony w kółka o większej
              średnicy do poruszania się po nierównym terenie oraz dopasowane
              wymiary do potrzeb transportowych użytkownika np. 800x650x1600 mm,
              1000x720x1810 mm. Dodatkowe wyposażenie stanowi pokrowiec
              wewnętrzny lub zewnetrzny.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'półki: 3, w tym 2 składane',
                'kółka: 2 skrętne, 2 stałe',
                'wysokość: 1810 mm',
                'szerokość: 800 mm',
                'głębokość: 720 mm',
                'wykonanie: ocynk galwanizowany',
              ]}
            />
            <p className={styles.transportEquipments__option}>
              <span className={styles.transportEquipments__optionLabel}>
                Opcje:{' '}
              </span>{' '}
              pokrowiec wewnętrzny bądź zewnętrzny. Inny wymiar kontenera
            </p>
          </div>
        </div>
        {/** WPD400 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/wpd400.webp"
              alt="wózek na mokre pranie z podnoszonym dnem"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="WPD-400" />
            <Title content="Wózek na mokre pranie z podnoszonym dnem" />
            <Description classes="description_18">
              Pewnie niegdy nie zastanawiałeś się ile podnosisz prania pracując
              w pralni. Po dłuższym czasie będą to setki kg. Oszczędzaj swój
              kręgosłup i korzystaj z rozwiązań ułatwiających i poprawiających
              wygodę pracy z korzyścią dla Twojego organizmu. WPD-400 wyposażony
              jest w{' '}
              <b>
                ruchome dno automatycznie podnoszące się, odpowiednio do ciężaru
                prania
              </b>
              . Korzystanie z niego jest wygodne i komfortowe. Całość wykonana
              jest ze <b>stali kwasoodpornej</b> z kółkami łożyskowanymi z
              niebrudzącą gumą.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'pojemność: 400 litrów',
                'nośność: 90 kg',
                'konstrukcja: stal kwasoodporna',
                'kółka: 4 skrętne',
                'średnica kółka: Φ 125 mm',
              ]}
            />
            <p className={styles.transportEquipments__option}>
              <span className={styles.transportEquipments__optionLabel}>
                Opcje:
              </span>
              Kółka o średnicy 165 mm
            </p>
          </div>
        </div>
        {/** WPR */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image
              src="/assets/images/transport-equipments/wpr.webp"
              alt="wózek platformowy"
              width={480}
              height={640}
            />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content="WPR" />
            <Title content="Wózek platformowy" />
            <Description classes="description_18">
              Wózek platformowy WPR w pralni przemysłowej pełni rolę wyposażenia
              uzupełaniającego urządzeń do transportu i składowania prania.
              Świetnie nadaje się do transportu chemii, płynów do prania, w
              pomieszczeniach pralni. Podwozie jest wykonane z grubej sklejki,
              rama z rurek o dużej średnicy i grubych ściankach, lakierowanych
              proszkowo w 2 kolorach: niebieskim bądź czerwonym. Duża średnica
              kółek oraz ergonomiczny uchwyt zapewniają komfortowe poruszanie
              się nim i wygodne użytkowanie.
            </Description>
            <Title
              content="Dane techniczne"
              variant="h3"
              classes="title_display_h4 "
            />
            <List
              items={[
                'burty: jedna lub dwie',
                'blat: impregnowane drewno',
                'szerokość: 700 mm',
                'długość: 1000 mm',
                'średnica kółka: Φ165 mm',
              ]}
            />
            <p className={styles.transportEquipments__option}>
              <span className={styles.transportEquipments__optionLabel}>
                Opcje:
              </span>
              wymiary - 500x800; kółko Φ125 mm
            </p>
          </div>
        </div>
      </main>
      <Leaflets
        leaflets={[{ label: 'Karta informacyjna', fileName: 'wozki-i-regały' }]}
      />
    </React.Fragment>
  );
}

TransportEquipments.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default TransportEquipments;
