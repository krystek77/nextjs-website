import PageLayout from "components/Layout/PageLayout";
import React from "react";
import HeadMetaTags from "components/HeadMetaTags/HeadMetaTags";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Description from "components/Description/Description";
import List from "components/List/List";
import styles from "./wozki-i-regaly.module.css";
import Subtitle from "components/Subtitle/Subtitle";
import Image from "next/image";

const title = "Urządzenia 🛒 do transportu i składowania prania w pralni przemysłowej";
const description = "Popraw komfort 🛒👱 i organizację pracy w pralni przemysłowej. Wygodnie transportuj suche i mokre pranie, przechowuj czyste w sposob schludny i poukładany.";
function TransportEquipments() {
  return (
    <React.Fragment>
      <HeadMetaTags title={title} description={description} twitter_title={title} og_title={title} />
      <Banner>
        <Title content='Urządzenia do transportu i składowania prania' variant='h1' classes='title_light_500 title_center title_maxWidth_960' />
        <Description classes='description_center'>Popraw komfort i organizację pracy w pralni przemysłowej. Wygodnie transportuj suche i mokre pranie, przechowuj czyste w sposob schludny i poukładany.</Description>
      </Banner>
      <main className={styles.transportEquipments}>
        {/** WM-150 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image src='/assets/images/transport-equipments/wm150.webp' alt='wózek na mokre pranie' width={480} height={640} />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content='WM-150' />
            <Title content='Wózek na mokre pranie' />
            <Description classes='description_18'>
              Wózek, typ WM-150, w wersji standardowej, jest przeznaczony do transportu międzyoperacyjnego mokrego prania w pomieszczeniach pralni. Podwozie wykonane ze <b>stali kwasoodpornej</b> jest osadzone na <b>kółkach łożyskowanych z niebrudzącą gumą</b> o średnicy Φ125 mm. Poruszanie się
              wózkiem jest komfortowe a kółka nie pozostawiają śladów na posadzce. Dodatkowo 2 kółka skrętne ułatwiają manewrowanie pełnym wózkiem w ciasnych korytarzach. Pojemnik polipropylenowy ma atest PZH. Gumowy wąż ułatwia odprowadzanie wody pozostałej po mokrym praniu.
            </Description>
            <Title content='Dane techniczne' variant='h3' classes='title_display_h4 ' />
            <List items={["pojemność: 150 litrów", "kółka: 2 skrętne, 2 stałe", "wężyk do odporowadzania wody", "średnica kółka: Φ 125 mm", "wysokość: 750 mm", "szerokość: 600 mm", "długość: 800 mm"]} />
          </div>
        </div>
        {/** WS-150 */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>IMAGE</div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content='WS-150' />
            <Title content='Wózek na suche pranie' />
            <Description classes='description_18'>
              Wózek, typ WS-150, w wersji standardowej, jest przeznaczony do transportu międzyoperacyjnego suchego bądź brudnego prania w pomieszczeniach pralni. Podwozie wykonane ze <b>stali kwasoodpornej</b> jest osadzone na <b>kółkach łożyskowanych z niebrudzącą gumą</b> o średnicy Φ125 mm.
              Poruszanie się wózkiem jest komfortowe a kółka nie pozostawiają śladów na posadzce. Dodatkowo 2 kółka skrętne ułatwiają manewrowanie pełnym wózkiem w ciasnych korytarzach. Pojemnik polipropylenowy ma atest PZH. Wózek może być wyposażony w pokrywę: plastikową bądź aluminiową.
            </Description>
            <Title content='Dane techniczne' variant='h3' classes='title_display_h4 ' />
            <List items={["pojemność: 150 litrów", "kółka: 2 skrętne, 2 stałe", "średnica kółka: Φ 125 mm", "wysokość: 750 mm", "szerokość: 600 mm", "długość: 800 mm"]} />
          </div>
        </div>
        {/** KJ */}
        <div className={styles.transportEquipments__item}>
          <div className={styles.transportEquipments__image}>
            <Image src='/assets/images/transport-equipments/KJ.webp' alt='kontener jezdny' width={480} height={640} />
          </div>
          <div className={styles.transportEquipments__content}>
            <Subtitle content='KJ' />
            <Title content='Kontener jezdny' />
            <Description classes='description_18'>
              Kontenery jezdne, serii KJ to doskonałe rozwiązanie do transportu większej ilości bielizny do pomieszczeń pralni przemysłowej. Konstrukcja jest wykonana z rurek galwanizowanych o dużej średnicy. Podwozie osadzone na 2 kółkach skrętnych i 2 stałych jest solidne oraz wytrzymałe.
              Standardowe wymiary dopasowane są tak, aby poruszanie się po wąskich korytarzach było wygodne i komfortowe. Kontener posiada 3 półki, w tym 2 składane co umożliwia dopasowanie kontenera do indywidualnych potrzeb transportu bielizny, zaś 2 drzwi ułatwiają jego załadunek i rozładunek.
              Kontener może być wyposażony w kółka o większej średnicy do poruszania się po nierównym terenie oraz dopasowane wymiary do potrzeb transportowych użytkownika np. 800x650x1600 mm, 1000x720x1810 mm. Dodatkowe wyposażenie stanowi pokrowiec wewnętrzny lub zewnetrzny.
            </Description>
            <Title content='Dane techniczne' variant='h3' classes='title_display_h4 ' />
            <List items={["półki: 3, w tym 2 składane", "kółka: 2 skrętne, 2 stałe", "wysokość: 1810 mm", "szerokość: 800 mm", "głębokość: 720 mm", "wykonanie: ocynk galwanizowany"]} />
            <p className={styles.transportEquipments__option}>
              <span className={styles.transportEquipments__optionLabel}>Opcje: </span> pokrowiec wewnętrzny bądź zewnętrzny. Inny wymiar kontenera
            </p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

TransportEquipments.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default TransportEquipments;
