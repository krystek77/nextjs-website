import React from "react";
import dynamic from "next/dynamic";

const ModernLaundryEquipment = dynamic(() => import("../containers/ModernLaundryEquipment/ModernLaundryEquipment"));
const HygieneBarrier = dynamic(() => import("../containers/HygieneBarrier/HygieneBarrier"));
const CustomersLinks = dynamic(() => import("../containers/CustomersLinks/CustomersLinks"));
const OurServices = dynamic(() => import("../containers/OurServices/OurServices"));
const Softwash = dynamic(() => import("../containers/Softwash/Softwash"));
const Gallery = dynamic(() => import("../containers/Gallery/Gallery"));
const Mop = dynamic(() => import("../containers/Mop/Mop"));
const LatestPosts = dynamic(() => import("../containers/LatestPosts/LatestPosts"));
const RestLinks = dynamic(() => import("../containers/RestLinks/RestLinks"));
const Newsletter = dynamic(() => import("../containers/Newsletter/Newsletter"));
const HomeLayout = dynamic(() => import("../components/Layout/HomeLayout"));
const HeadMetaTags = dynamic(() => import("../components/HeadMetaTags/HeadMetaTags"));
import { customers } from "../constants/customers";
import { getPosts } from "../lib/posts";
import { connectMongoDB } from "../utils/database";

function Home(props) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <main>
        <ModernLaundryEquipment product_cards={props.product_cards} products_title={props.products_title} products_subtitle={props.products_subtitle} />
      </main>
      <HygieneBarrier />
      <CustomersLinks customers={customers} />
      <OurServices />
      <Softwash />
      <Gallery laundries={props.laundriesPhotos} />
      <Mop />
      <LatestPosts posts={props.posts} />
      <RestLinks />
      <Newsletter />
    </React.Fragment>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;

import { links } from "../constants/links";
export async function getStaticProps() {
  const { database: db } = await connectMongoDB();
  const laundriesPhotos = await db.collection("gallery").find({}).sort({ createdAt: -1 }).toArray();
  const threeLatestPosts = getPosts().slice(0, 3);
  return {
    props: {
      posts: threeLatestPosts,
      page_title: "",
      page_label: "",
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
      products_title: "Wyposażenie nowoczesnej pralni przemysłowej",
      products_subtitle: "Do pralni każdej wielkości i rodzaju",
      laundriesPhotos: JSON.parse(JSON.stringify(laundriesPhotos)),
    },
    revalidate: 10,
  };
}
