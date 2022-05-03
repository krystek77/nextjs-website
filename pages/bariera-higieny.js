/*
 * http://localhost:3000/bariera-higieny
 */
import React from "react";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import Description from "components/Description/Description";
import List from "components/List/List";
import PageLayout from "../components/Layout/PageLayout";
import styles from "styles/bariera-higieny.module.css";
import Subtitle from "components/Subtitle/Subtitle";

const title = "Pralnia z barierą higieny 🏥 dla szptala - najlepsza ochrona przed zarazkami";
const description = "Najlepsza ochrona przed zanieczyszczeniem prania przez super bakterie i zarazki. 🏥 Szeroka gama pralnicowirówek z barierą higieny, największy wybór na rynku i bezkonkurencyjna oferta. Skorzystaj już dziś.";

function HygieneBarrier() {
  return (
    <React.Fragment>
      <HeadMetaTags title={title} description={description} og_title={title} twitter_title={title} />
      <Banner classes='banner__hygieneBarrier banner_height_auto'>
        <Title variant='h1' classes='title_center title_light_500 title_maxWidth_960 title_display_h2' content='Najlepsza ochrona przed zanieczyszczeniem prania przez super bakterie i zarazki' />
        <Description classes='description_center description_maxWidth_960 ' content='Najwyższa czystość prania, bezpieczeństwo i ochrona przed zakażeniem zapewnią Ci pralnicowirówki z barierą higieny marki Primus i Pralma ' />
      </Banner>
      <main className={styles.hygieneBarrier}>
        <header>
          <Subtitle content='STOP zanieczyszczeniom, suberbakteriom i zarazkom' classes='' />
          <Title variant='h2' content='Maksymalna ochrona przed zanieczyszczeniami i przenoszeniem zakażenia' classes='' />
          <Description classes='description_maxWidth_auto description_18 description_mb_2'>Badania pokazują, że pranie jest głównym nośnikiem zakażeń i super bakterii. Konieczne zatem jest stosowanie rozwiązań, które zapewniają najwyższe standardy czystości i higieny.</Description>
          <List
            classes='list_mb_2'
            items={[
              "10 do 15% zakażeń szpitalnych (co prowadzi do średnio dodatkowych 4-5 dni pobytu w szpitalu, a w skrajnych przypadkach, śmierci pacjenta) są spowodowane niezadowalającą higieną bielizny",
              "starsi ludzie i dzieci są bardziej narażeni na infekcje ze względu na ich mniej wydajny układ odpornościowy",
              "utrzymanie wysokiego poziomu higieny prania czyni go wolnym od niektórych bakterii (np.: staphylococcus aureus, salmonella, listeria itp.)",
            ]}
          />
          <Description classes='description_maxWidth_auto description_weight_600 description_mb_2 '>
            {" "}
            Ograniczenie ryzyka transferu zakażeń to tak istotna sprawa, że <b>Primus</b> - światowy leader w dostarczaniu rozwiązań dla pralni przemysłowej, postanowił nawiązać współpracę z dwoma instytutami mikrobiologicznymi i przeprowadzić testy, w rzeczywistych warunkach, ryzyka ponownego
            zanieczyszczenia prania.
          </Description>
          <Description classes='description_maxWidth_auto description_18 description_mb_2'>
            Testy te zostały wykonane w pralni przy użyciu pralek z barierą higieny marki Primus z fizycznym oddzieleniem prania brudnego i czystego. Zakład pralniczy posiadał certyfikat zgodności z RABC wydany przez organizację zewnętrzną (mniej niż 12 CFU<sup>*</sup>/25 cm 2 ).
            <p>
              <sup>*</sup> - jednostka tworząca kolonię będąca miarą ilości bakterii
            </p>
          </Description>
          <Description classes='description_maxWidth_auto description_weight_600 description_bg description_mb_2'>
            Epidemia <strong>COVID-19</strong>, która drastycznie dotknęła cały świat, uświadamia nam wszystkim, że zachowanie higieny prania jest niezwykle ważne, nie tylko dla naszego zdrowia, ale i życia. Pamiętajmy zatem, że:
            <List classes="list_mt_1 list_small list_lowercase " items={[
              "największa liczba zarazków i bakterii jest przenoszona przez ręce",
              "powietrze jest ważnym czynnikiem wpływającym na propagację mikroorganizmów",
              "powierzchnie są również jak transport dla zanieczyszczeń"
            ]}/>
          </Description>
        </header>
      </main>
    </React.Fragment>
  );
}
HygieneBarrier.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default HygieneBarrier;
