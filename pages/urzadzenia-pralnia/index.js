/*
 * http://localhost:3000/urzadzenia-pralnia
 */
import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import ModernLaundryEquipment from "../../containers/ModernLaundryEquipment/ModernLaundryEquipment";
import PageIndicator from "../../components/Banner/PageIndicator/PageIndicator";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import { links } from "../../constants/links";

import styles from "./index.module.css";

function LaundryEquipment(props) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner>
        <Title variant='h1' content={props.page_title} classes='title_maxWidth_960 title_bg_white_primary' />
        <PageIndicator label={props.page_label} variant='primary' />
      </Banner>
      <main className={styles.laundryEquipment}>
        <ModernLaundryEquipment product_cards={props.product_cards} products_title={props.products_title} products_subtitle={props.products_subtitle} />
      </main>
    </React.Fragment>
  );
}

LaundryEquipment.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default LaundryEquipment;

export async function getStaticProps() {
  //fetch data from the API

  return {
    props: {
      page_title: "Najlepsze wyposażenie do pralni przemysłowej",
      page_label: "urządzenia",
      product_cards: [
        {
          label: "Pralnicowirówki",
          path: "urzadzenia-pralnia/pralnicowirowki",
          image: "washer_extractors.webp",
          list: ["sztywnomocowane", "normalnoobrotowe", "wysokoobrotowe"],
        },
        {
          label: "Suszarki",
          path: "urzadzenia-pralnia/suszarki",
          image: "dryers.png",
          list: ["suszarki bębnowe", "suszarki z pompą ciepła", "suszarki komorowe"],
        },
        {
          label: "Prasownice",
          path: "urzadzenia-pralnia/prasownice",
          image: "ironers.png",
          list: ["nieckowe", "walcowe", "z wprowadzarką", "z wprowadzarka i skladarką", "z tylnym wywiezieniem", "wielowalcowe"],
        },
        {
          label: "Bariery higieny",
          path: "urzadzenia-pralnia/bariery-higieny",
          image: "barriers.png",
          list: ["wolnostojące przelotowe", "sztywnomocowane przelotowe", "bez wirowania, kątowe"],
        },
        {
          label: "Wirówki pralnicze",
          path: "urzadzenia-pralnia/wirowki-pralnicze",
          image: "washer_extractors.png",
          list: ["sterowanie automatyczne", "napęd z przemiennikiem częstotliwości"],
        },
        {
          label: "Pralnice",
          path: "urzadzenia-pralnia/pralnice",
          image: "washer_extractors.png",
          list: ["bębnowe o załadunku czołowym", "bębnowe o załadunku bocznym"],
        },
        {
          label: "Profesjonalne pralnico - suszarki",
          path: "urzadzenia-pralnia/profesionalne-pralnico-suszarki",
          image: "washer_dryer.png",
          list: ["kompaktowa budowa", "oszczędność miejsca", "ergonomiczna konstrukcja"],
        },
        {
          label: "Profesjonalne suszarko - suszarki",
          path: "urzadzenia-pralnia/profesjonalne-suszarko-suszarki",
          image: "dryer_dryer.png",
          list: ["kompaktowa budowa", "oszczędność miejsca", "ergonomiczna konstrukcja"],
        },
        {
          label: "Małe komercyjne pralnicowirówki",
          path: "urzadzenia-pralnia/male-komercyjne-pralnicowirowki",
          image: "small_washer_2.png",
          list: ["kompaktowa budowa", "idelane dla złobków i przedszkoli"],
        },
        {
          label: "Małe komercyjne suszarki",
          path: "urzadzenia-pralnia/male-komercyjne-suszarki",
          image: "small_dryers.png",
          list: ["kompaktowa budowa", "idelane dla złobków i przedszkoli"],
        },
        {
          label: "Wózki i regały",
          path: "urzadzenia-pralnia/wozki-i-regaly",
          image: "trolleys.png",
          list: ["na suche, brudne pranie", "na mokre pranie", "regały jezdne i stacjonarne", "kontenery jezdne", "stoły manipulacyjne"],
        },
        {
          label: "Prasowanie fasonowe",
          path: "urzadzenia-pralnia/prasowanie-fasonowe",
          image: "ironing.png",
          list: ["zestawy do prasowania", "prasy"],
        },
      ],
      products_title: "Wyposażenie nowoczesnej pralni",
      products_subtitle: "Do każdego rodzaju i wielkości pralni przemysłowej",
    },
  };
}
