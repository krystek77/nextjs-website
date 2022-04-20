/*
 * http://localhost:3000/ekologiczne-wyposazenie-pralni-przemyslowej
 */

import React from "react";
import Banner from "components/Banner/Banner";
import Subtitle from "components/Subtitle/Subtitle";
import Title from "components/Title/Title";
import PageLayout from "../components/Layout/PageLayout";
import HeadMetaTags from "components/HeadMetaTags/HeadMetaTags";
import Description from "components/Description/Description";
import LinkButton from "components/LinkButton/LinkButton";
import List from "components/List/List";
import Link from "next/link";
import Image from "next/image";
import styles from "styles/ekologiczne-wyposazenie-pralni-przemyslowej.module.css";

const cascadeDrumFeatures = [
  "mimo wysokiego współczynnika odwirowania prania G = 400, pranie nie przykleja się do bębna co ułatwia rozładunek",
  "więcej perforacji na tej samej powierzchni zapewnia bardziej skuteczne odwirowania",
  "koncepcja wypukłości powoduje odwirowanie jeszcze większej ilości wody, więc % wilgotności po wirowaniu jest bardzo niski",
  "kształt otworów w bębnie powoduje dodatkowe działanie mechaniczne, co zapewnia jeszcze lepsze rezultaty prania",
];
function GreenPassport() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title='Pralma - sposób na ekologiczną i ekonomiczną pralnię wodną'
        twitter_title='Pralma - sposób na ekologiczną i ekonomiczną pralnię wodną'
        og_title='Pralma - sposób na ekologiczną i ekonomiczną pralnię wodną'
        description='Obniż koszty prania, dostosowując proces do
            aktualnych potrzeb za pomocą wbudowanych sterowników i systemów. Pralma dostarczy Ci urządzeń, które minimalizują zużycia mediów oraz
            rozwiązań, dzięki którym Ty, masz wpływ na ich zużycie'
      />
      <Banner classes='banner__green_passport banner_maxWidth_760'>
        <Title classes='title_center title_light_500' content='Sposób na ekologiczną i ekonomiczną pralnię wodną' />
        <Description classes='description_center description_maxWidth_auto' content='Ponieważ zasoby stają się coraz bardziej cenne, rozwijamy rozwiązania pomagające Ci prać taniej i chronić przy tym naturalne zasoby środkowiska' />
      </Banner>

      <main className={styles.greenPassport}>
        {/** introduction */}
        <section className={styles.greenPassport__introduction}>
          <Description classes='description_maxWidth_auto description_18'>
            Naturalne zasoby ziemi stają się z dnia na dzień coraz bardziej cenne. Nie przybywa ich, a zużycie i koszty ich wytworzenia, np. energii, rosną lawinowo, w wielu krajach, już od wielu lat. Pralma ma świadomość, że koszty prania, w dużym stopniu zależą od zużycia tych mediów, zwłaszcza
            energii, wody i gazu. Dlatego też oferujemy jedynie przemysłowe rozwiązania pralnicze, które minimalizują ich zużycie. Pionierem na świecie, w branży przemysłowych urządzeń pralniczych, w budowie urządzeń skupionych na redukcji zużycia mediów jest Primus, którego przedstawicielem
            jesteśmy nieprzerwanie <b>od 1994 roku</b>.
          </Description>
          <Description classes='description_maxWidth_auto description_18'>
            <strong>Pralma - jedyny w Polsce producent przemysłowych urządzeń pralniczych</strong>( pralnic, wirówek, pralnicowirówek i suszarek ), z kapitałem ludzi, nie kiedy już <b>z ponad 50 letnim doświadczeniem</b> w budowie rozwiązań pralniczych, nieustannie czerpie z najlepszych rozwiązań,
            budując urządzenia trwałe i niezawodne, z naciskiem na jak najniższe zużycia wody i energii.
          </Description>
          <Description classes='description_maxWidth_auto description_18'>
            <b>Dużo zależy od Ciebie</b>. Korzystając z naszych urządzeń masz możliwość optymalizacji kosztów prania, dostosowując proces do aktualnych potrzeb za pomocą wbudowanych sterowników i systemów. My, dostarczamy Ci urządzeń, które minimalizują zużycia mediów oraz rozwiązań, dzięki którym
            Ty, masz wpływ na ich zużycie.
          </Description>
        </section>

        {/** enviroment */}
        <section className={styles.greenPassport__section}>
          <header className={styles.greenPassport__header}>
            <div className={styles.greenPassport__image}>
              <Image src='/assets/images/details/bg_eco3.webp' alt='water' layout='fill' />
            </div>
            <div className={`${styles.greenPassport__title} ${styles.greenPassport__title_passport}`}>
              <Subtitle content='Minimalizuj koszty dbając o środowisko' classes='subtitle_max_width_100' />
              <Title content='Zielony paszport w pralnictwie przemysłowym' />
            </div>
          </header>

          <div className={styles.greenPassport__content}>
            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subitle}>
                <Subtitle content='20%' classes='subtitle_number' />
                <Title variant='h3' content='mniejsze zużycie energii' classes='title_display_h4' />
                <Description>
                  Używając mniejszej ilości wody redukujemy też zużycie energii niezbędnej do jej podgrzania. Korzystaj z w pełni programowalnych sterowników optymalizując koszty prania.
                  <b> Konfiguruj własne programy</b>, z różnymi poziomami poboru wody oraz liczby cykli, zachowując wysokie standardy i jakość prania.
                </Description>
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/eco3_windmill_s.webp' alt='wiatrak' width={360} height={360} />
              </div>
            </div>

            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='15%' classes='subtitle_number' />
                <Title variant='h3' content='mniejsze zużycie wody' classes='title_display_h4' />
                <Description>
                  Optymalizacja przestrzeni pasywnej między bębnem wewnętrznym a bębnem zewnętrznym znacznie minimalizuje zużycie wody. Dlatego też <b>przestrzeń pasywna</b> w pralnicowirówkach jest najmniejesza na rynku. Woda w niej nie bierze udziału w praniu, a im jej mniej tym mniejsze jej
                  zużycie.
                </Description>
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/eco3_water_s.webp' alt='wiatrak' width={360} height={360} />
              </div>
            </div>

            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='25%' classes='subtitle_number' />
                <Title variant='h3' content='mniejsza wilgotność resztkowa' classes='title_display_h4' />
                <Description>
                  Duża średnica bębna wewnętrznego i <b>wysoki współczynnik odwirowania prania tzw. G-faktor</b>, obniża niezbędne obroty wirowania dając pranie o wyjątkowo niskim poziomie pozostałości wilgoci, która również zmniejsza energię wymaganą do jego wysuszenia. Ddoatkowo niższe obroty
                  wirowania zwiększają zywotność całego napędu i gwrantują niższy pobór prądu.
                </Description>
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/eco3_water_drop_s.webp' alt='wiatrak' width={360} height={360} />
              </div>
            </div>
          </div>
          <Description classes='description_maxWidth_760 description_center description_mb_2'>
            NOWA LINIA PRALNICOWIRÓWEK <strong>FX</strong> ZOSTAŁA ZAPROJEKTOWANA Z BARDZO DUŻYM NACISKIEM NA OGRANICZENIE ZUŻYCIA WODY I ENERGII.
          </Description>
          <LinkButton to='/urzadzenia-pralnia/pralnicowirowki/FX/FX-65' label='Poznaj już teraz pralnicowirówki FX' classes='linkButton_center' />
        </section>

        {/** save water */}
        <section className={styles.greenPassport__section}>
          <header className={styles.greenPassport__header}>
            <div className={styles.greenPassport__image}>
              <Image src='/assets/images/for_banners/ekologiczne_eco3.webp' alt='water' layout='fill' />
            </div>
            <div className={`${styles.greenPassport__title}`}>
              <Subtitle content='Kontynuacja wysiłku w innowacjach' />
              <Title content='Oszczędność wody' />
              <Description>
                Technologia <strong>CascadeDrum</strong>,<strong>PowerWash</strong> oraz programy <strong>ECO</strong>.
              </Description>
            </div>
          </header>
          <div className={styles.greenPassport__content}>
            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='CascadeDrum' />
                <Title variant='h3' content='Unikatowa perforacja bębna wewnętrznego' classes='title_display_h4' />
                <Description>Bezkonkurencyjna perforacja bębna wewnętrznego, charakterystyczna dla pralnicowirówek marki Primus daje Ci wiele oszczędności.</Description>
                <List items={cascadeDrumFeatures} />
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/cascade_drum_transition.webp' alt='cascade drum technology' width={360} height={360} />
              </div>
            </div>

            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='Programy ECO' />
                <Title variant='h3' content='Niskie zużycie wody i energii przy zachowaniu jakości prania' classes='title_display_h4' />
                <List items={["nowe, udoskonalone programy prania dla niższych poziomów wody", "używanie więcej mechaniki prania dla osiągnięcia lepszych jego rezultatów", "niższe zużycie wody", "niższe zużycie energii"]} />
                <Description></Description>
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/xcontrol_flex_landing_page.webp' alt='xcontrol flex' width={360} height={360} />
              </div>
            </div>

            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='PowerWash' classes='' />
                <Title variant='h3' content='Efekt spryskiwania pranych tkanin' classes='title_display_h4' />
                <Description></Description>
                <List items={["perforowane przewały bębna wewnętrznego", "dodatkowy efekt prania dzięki spryskiwaniu tkanin podczas ich prania", "lepsze rezultaty przy o 30% mniejszej ilości wody", "więcej działania mechanicznego zapewnia lepszą jakość prania"]} />
              </div>
            </div>
          </div>
        </section>

        {/** save gas and energy */}
        <section className={styles.greenPassport__section}>
          <header className={styles.greenPassport__header}>
            <div className={styles.greenPassport__image}>
              <Image src='/assets/images/bg_windmill.webp' alt='water' layout='fill' />
            </div>
            <div className={styles.greenPassport__title}>
              <Subtitle content='Kontynuacja wysiłku w innowacjach' />
              <Title content='Oszczędność energii i gazu' />
              <Description>Maksymalne wykorzystanie ciepłego powietrza , pomiar wilgtoności, podgrzewanie za pomocą pompą ciepła.</Description>
            </div>
          </header>
          <div className={styles.greenPassport__content}>
            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='RADAX' />
                <Title variant='h3' content='Połączenie osiowego i radialnego przepływu powietrza' classes='title_display_h4' />
                <List
                  items={[
                    "do 30% oszczędności energii elektrycznej",
                    "zwiększona wydajność suszenia",
                    "jednolity efekt suszenia dzięki rewersyjnym obrotom bębna",
                    "maksymalne wykorzystanie ciepłego powietrza",
                    "maksymalny przepływ ciepłego powietrza przez pranie",
                    "najmniejsze straty ciepła",
                    "krótszy cykl suszenia",
                  ]}
                />
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/eco_radax.webp' alt='radax' width={360} height={360} />
              </div>
            </div>

            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='PowerDry & PowerWash' />
                <Title variant='h3' content='Perforowane przewały bębna wewnętrznego' classes='title_display_h4' />
                <List items={["zwiększenie całkowitego przepływu powietrza", "maksymalne wykorzystanie ciepłego powietrza", "krótszy cykl suszenia", "wymuszenie przepływu powietrza przez przewały - dodatkowa akcja mechaniczna, lepszy rezultat suszenia"]} />
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/eco_powerdry.webp' alt='powerdry' width={360} height={360} />
              </div>
            </div>

            <div className={styles.greenPassport__subwrapper}>
              <div className={styles.greenPassport__subtitle}>
                <Subtitle content='EVO4' />
                <Title variant='h3' content='Technologia podgrzewu za pomocą pompy ciepła' classes='title_display_h4' />
                <Description>
                  Wyjątkowe rezultaty technologii suszenia <Link href="/pompa-ciepla-evo4"><a className={styles.link}><b>EVO4</b></a></Link> osiągnięto przez zastosowanie zaawansowanej wiedzy o chłodzeniu powietrza i nagrzewaniu pompami ciepła, w szczególności o właściwościach fizycznych substancji stosowanych jako czynniki chłodzące w lodówkach i klimatyzacjach.
                </Description>
                <List classes='list_mb_2' items={["najkrótszy czas suszenia", "zużycie energii mniejsze o 60%", "mniejszy pobór prądu - mniej niż 4 kW zamiast 10 - 25 kW", "instalacja w pętli zamkniętej  - nie ma potrzeby stosowania rur wentylacyjnych"]} />
              </div>
              <div className={styles.greenPassport__subImage}>
                <Image src='/assets/images/eco_evo4.webp' alt='powerdry' width={360} height={360} />
              </div>
            </div>
            <Description classes='description_maxWidth_760 description_center description_mb_2'>
              LINIA SUSZAREK <strong>T/TX</strong> ŁĄCZY W SOBIE WIELE TECHNOLOGII KŁADĄCYCH NACISK NA OGRANICZENIE ZUŻYCIA ENERGII PRZY ZACHOWANIU JAKOŚCI I WYSOKICH STANDARDÓW SUSZENIA.
            </Description>
            <LinkButton to='/urzadzenia-pralnia/suszarki/T/T-16' label='Poznaj już teraz suszarki serii T/TX' classes='linkButton_center' />
          </div>
        </section>

        {/** save detergents */}
        <section className={styles.greenPassport__section}>
          <header className={styles.greenPassport__header}>
            <div className={styles.greenPassport__image}>
              <Image src='/assets/images/bg_detergents.webp' alt='water' layout='fill' />
            </div>
            <div className={styles.greenPassport__title}>
              <Subtitle content='Kontynuacja wysiłku w innowacjach' />
              <Title content='Oszczędność chemii i właściwości tkanin' />
              <Description>Specjalnie zaprojektowany system dozowania chemii, moduł podłączenia pomp płynnych środków piorących, w pełni programowalne sterowniki do optymalizacji procesu prania i zarządzania nim.</Description>
            </div>
          </header>
          <div className={styles.greenPassport__content}>Oszczędność chemii</div>
        </section>
      </main>
    </React.Fragment>
  );
}
GreenPassport.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default GreenPassport;
