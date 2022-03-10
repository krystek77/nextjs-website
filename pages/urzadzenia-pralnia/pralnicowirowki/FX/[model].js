/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX/FX-105
 */

import React from "react";
import HeadMetaTags from "../../../../components/HeadMetaTags/HeadMetaTags";
import Banner from "../../../../components/Banner/Banner";
import Title from "../../../../components/Title/Title";
import PageIndicator from "../../../../components/Banner/PageIndicator/PageIndicator";
import ProductInfo from "../../../../containers/ProductInfo/ProductInfo";
import ProductData from "../../../../containers/ProductData/ProductData";
import ProductControls from "../../../../containers/ProductControls/ProductControls";
import Leaflets from "../../../../containers/Leaflets/Leaflets";
import Extreme from "../../../../containers/Extreme/Extreme";
import ECO3 from "../../../../containers/ECO3/ECO3";
import CascadeDrum from "../../../../containers/CascadeDrum/CascadeDrum";
import FXDesign from "../../../../containers/FXDesign/FXDesign";
import Friendly from "../../../../containers/Friendly/Friendly";

const parameters = [
  { name: "załadunek (moduł załadunku 1:10)", value: "10.5", unit: "kg" },
  {
    name: "załadunek maksymalny (moduł załadunku 1:9)",
    value: "12",
    unit: "kg",
  },
  { name: "pojemność bębna", value: "105", unit: "litrów" },
  { name: "średnica bębna", value: "620", unit: "mm" },
  { name: "obrtoty prania", value: "49", unit: "obr./min." },
  { name: "obrtoty wirowania", value: "1075", unit: "obr./min." },
  { name: "G-faktor", value: "400", unit: "-" },
  { name: "moc podgrzewu elektrycznego", value: "6/9/12", unit: "kW" },
  {
    name: "podłączenie pary (dla podgrzewu parowego)",
    value: "1/2",
    unit: "cal",
  },
  {
    name: "ciśnienie pary (dla podgrzewu parowego)",
    value: "1 - 8",
    unit: "bar",
  },
  { name: "podłączenie wody", value: "3/4", unit: "cal" },
  { name: "ciśnienie wody", value: "1 - 8", unit: "bar" },
  { name: "zasilanie (standard)", value: "3x380 - 415/50Hz/3", unit: "-" },
  { name: "wymiary (w. x sz. x gł.)", value: "1225x795x795", unit: "mm" },
  { name: "masa netto", value: "210", unit: "kg" },
  { name: "masa brutto'", value: "235", unit: "kg" },
];
const features = [
  "wolnostojąca wysokoobrotowa",
  "nierdzewny panel górny",
  "przedni i boczne panele ocynkowane lakierowane w aktrakcyjnym kolorze stali INOX",
  "nierdzewny bęben wewnętrzny i zewnętrzny",
  "XControl - łatwy w użyciu sterownik mikroprocesorowy",
  "opatentowany pojemnik na detergenty",
  "duża średnica zaworu spustowego - 76 mm",
  "łatwy dostęp do wszystkich istotnych podzespołów",
  "szeroko otwierane drzwi dla łatwego załadunku i wyładunku",
  "moduł podłączenia do 8 sygnałów pomp płynnych środków piorących",
  "napęd z przemiennikiem częstotliwości",
];
const leaflets = [
  { label: "karta informacyjna", fileName: "FX6580105135 KI" },
  {
    label: "instrukcja instalacji pralnicowirówki",
    fileName: "FX105 instalacja",
  },
];

const controls = [
  {
    name: "XControl FLEX +",
    image: "XControl FLEX Plus",
    list: ["7 calowy ekran dotykoway", "możliwość wyświetlania komunikatów w 34 językach", "wbudowane wifi", "zdalne programowanie i aktualizacje", "w pełni programowalny", "20 fabrycznych programów prania spełniających wszystkie podstawowe potrzeby", "do 99 programów użytkownika"],
  },
  {
    name: "XControl +",
    image: "XControl Plus",
    list: ["do 99 programów prania", "w pełni programowalny", "wyświetlacz graficzny", "obsługa w 21 językach, w tym polskim", "port USB"],
  },
  {
    name: "XControl",
    image: "XControl",
    list: ["15 programów prania", "w pełni programowalny", "wyświetlacz graficzny", "obsługa w 25 językach, w tym w polskim", "port USB"],
  },
];

const extreme = ["Ekstremalny design", "Ekstremalnie ekologiczne", "Ekstremalnie ergonomiczne"];

const eco = [
  "As in all Primus equipment, only premium materials are used in the fabrication of our machines,to ensure one of the largest lifespans on the market",
  "A soap mixer makes sure the soap is properly blended with water before being in contact with the linen, optimizing the action of the soap and protecting loads from undiluted chemicals",
  "Up to 8 liquid soap pumps can be added, to use exactly the right detergent dosages for each load",
  "U Our CASCADE DRUM provides additional mechanical action to deeply wash linens. In addition,the load is distributed more evenly in the drum, so water flows through the cylinder better,delivering an improved wash",
  "A 400 G-Force spin helps bring loads to 50% residual moisture or less.Smartload semi-automatic weighing system makes sure you use only the waterand energy needed (for XControl+)",
];

function FX() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title='Pralnicowirówki wolnostojące wysokoobrotowe'
        description='Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga najlepszych
    z najlepszych rozwiązań pralniczych. Zaprojektowane, aby zapewnić najniższe koszty zużycia wody
    i energii, wysoką wydajność i przyjazną obsługę. Innowacyjne technologie: CascadeDrum,
    supereco, Xcontrol FLEX plus czy TRACE-TECH, czynią ją bezkonkurencyjne na rynku.'
        og_title='Pralnicowirówki wolnostojące wysokoobrotowe'
        twitter_title='Pralnicowirówki wolnostojące wysokoobrotowe'
      />
      <Banner classes='banner__washerExtractors_FX'>
        <Title variant='h1' content='Pralnicowirówka wysokoobrotowa, FX-65' classes='title_maxWidth_960 title_bg_white_red' />
        <PageIndicator label='pralnicowirówki wysokoobrotowe' variant='red' />
      </Banner>
      <main>
        <ProductInfo />
        <ProductData features={features} parameters={parameters} />
        <ProductControls controls={controls} />
        <Leaflets leaflets={leaflets} />
      </main>
      <Extreme items={extreme} />
      <ECO3 items={eco} />
      <CascadeDrum />
      <Friendly />
      <FXDesign />
    </React.Fragment>
  );
}

export async function getStaticPaths(context) {
  return {
    paths: [{ params: { model: "FX-65" } }, { params: { model: "FX-80" } }, { params: { model: "FX-105" } }, { params: { model: "FX-135" } }, { params: { model: "FX-180" } }, { params: { model: "FX-240" } }, { params: { model: "FX-280" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      model: "FX-105",
      title:"Pralnicowirówka wysokoobrotowa, typ FX-65",
      category:"Pralnicowirówki wysokoobrotowe",
      line: "Linia FX",
      available_models: [
        { title: "FX-65", subtitle: "załadunek 6.5 - 7 kg" },
        { title: "FX-80", subtitle: "załadunek 8 - 9 kg" },
        { title: "FX-105", subtitle: "załadunek 10.5 - 12 kg" },
        { title: "FX-135", subtitle: "załadunek 13.5 - 15 kg" },
        { title: "FX-180", subtitle: "załadunek 18 - 20 kg" },
        { title: "FX-240", subtitle: "załadunek 24 - 27 kg" },
        { title: "FX-280", subtitle: "załadunek 28 -32 kg" },
      ],
      slider: ["fx105_01", "fx105_02", "fx105_03", "fx105_04", "fx105_05", "fx105_06"],
      isSliderVertical: false,
      features: [
        "wolnostojąca wysokoobrotowa",
        "nierdzewny panel górny",
        "przedni i boczne panele ocynkowane lakierowane w aktrakcyjnym kolorze stali INOX",
        "nierdzewny bęben wewnętrzny i zewnętrzny",
        "XControl - łatwy w użyciu sterownik mikroprocesorowy",
        "opatentowany pojemnik na detergenty",
        "duża średnica zaworu spustowego - 76 mm",
        "łatwy dostęp do wszystkich istotnych podzespołów",
        "szeroko otwierane drzwi dla łatwego załadunku i wyładunku",
        "moduł podłączenia do 8 sygnałów pomp płynnych środków piorących",
        "napęd z przemiennikiem częstotliwości",
      ],
      parameters: [
        { name: "załadunek (moduł załadunku 1:10)", value: "10.5", unit: "kg" },
        {
          name: "załadunek maksymalny (moduł załadunku 1:9)",
          value: "12",
          unit: "kg",
        },
        { name: "pojemność bębna", value: "105", unit: "litrów" },
        { name: "średnica bębna", value: "620", unit: "mm" },
        { name: "obrtoty prania", value: "49", unit: "obr./min." },
        { name: "obrtoty wirowania", value: "1075", unit: "obr./min." },
        { name: "G-faktor", value: "400", unit: "-" },
        { name: "moc podgrzewu elektrycznego", value: "6/9/12", unit: "kW" },
        {
          name: "podłączenie pary (dla podgrzewu parowego)",
          value: "1/2",
          unit: "cal",
        },
        {
          name: "ciśnienie pary (dla podgrzewu parowego)",
          value: "1 - 8",
          unit: "bar",
        },
        { name: "podłączenie wody", value: "3/4", unit: "cal" },
        { name: "ciśnienie wody", value: "1 - 8", unit: "bar" },
        { name: "zasilanie (standard)", value: "3x380 - 415/50Hz/3", unit: "-" },
        { name: "wymiary (w. x sz. x gł.)", value: "1225x795x795", unit: "mm" },
        { name: "masa netto", value: "210", unit: "kg" },
        { name: "masa brutto'", value: "235", unit: "kg" },
      ],
      controls: [
        {
          name: "XControl FLEX +",
          image: "XControl FLEX Plus",
          list: ["7 calowy ekran dotykoway", "możliwość wyświetlania komunikatów w 34 językach", "wbudowane wifi", "zdalne programowanie i aktualizacje", "w pełni programowalny", "20 fabrycznych programów prania spełniających wszystkie podstawowe potrzeby", "do 99 programów użytkownika"],
        },
        {
          name: "XControl +",
          image: "XControl Plus",
          list: ["do 99 programów prania", "w pełni programowalny", "wyświetlacz graficzny", "obsługa w 21 językach, w tym polskim", "port USB"],
        },
        {
          name: "XControl",
          image: "XControl",
          list: ["15 programów prania", "w pełni programowalny", "wyświetlacz graficzny", "obsługa w 25 językach, w tym w polskim", "port USB"],
        },
      ],
      leaflets: [
        { label: "karta informacyjna", fileName: "FX6580105135 KI" },
        {
          label: "instrukcja instalacji pralnicowirówki",
          fileName: "FX105 instalacja",
        },
      ],
    },
  };
}
export default FX;
