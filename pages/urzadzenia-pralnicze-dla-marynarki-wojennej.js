/*
 * http://localhost:3000/urzadzenia-pralnicze-dla-marynarki-wojennej
 */
import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Subtitle from 'components/Subtitle/Subtitle';
import Description from 'components/Description/Description';
import List from 'components/List/List';
import LinkButton from 'components/LinkButton/LinkButton';
import Image from 'next/image';
import styles from 'styles/urzadzenia-pralnicze-dla-marynarki-wojennej.module.css';

const title =
  'Wyposażenie pralnicze dla marynarki wojennej, na okręty i statki';
const description =
  'Przemysłowe pralnicowirówki i suszarki w wykonaniu morskim 🚢, do pracy w trudnych warunkach atmosferycznych, idealne na statki jak i okręty wojenne. Trwałe pralnicowiówki, suszarki i prasownice. Serwis w większosci portów';
function Navy() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        og_title={title}
        twitter_title={title}
        description={description}
      />
      <Banner classes="banner__navy banner_height_auto">
        <Title
          classes="title_center title_light_500 title_maxWidth_960 title_display_h2"
          content="Wyposażenie pralnicze dla marynarki wojennej i na statki"
          variant="h1"
        />
        <Description
          classes="description_center description_maxWidth_960 "
          content="Przemysłowe pralnicowirówki i suszarki w wykonaniu morskim, do pracy w trudnych warunkach atmosferycznych, idealne na statki jak i okręty wojenne"
        />
      </Banner>
      <main className={styles.navy}>
        <Subtitle
          content="Pralnia przemysłowa na statkach i okrętach"
          classes="subtitle_max_width_100"
        />
        <Title
          content="Przemysłowe wyposażenie pralnicze dedykowane do instalacji na statkach i okrętach"
          classes="title_display_h4 title_mb_2"
          variant="h2"
        />
        <Description classes="description_18 description_maxWidth_auto">
          Od dawna wiadomo, że komfort służby na okręcie ma pozytywny wpływ na
          jej jakość. Podobnie, długa podróż winna być wygodna i komfortowa a
          pasażerowie powinni czuć się na wodzie, jak w domu. Wyposażenie
          pralnicze jest zatem niezbędne na każdym statku. Urządzenia marki
          <b>Primus i Pralma</b> pozwalają sprostać tym potrzebom. Primus jest
          wiodącym producentem przemysłowych urządzeń pralniczych na świecie,
          Pralma jedynym w Polsce. Dzięki szerokiej ofercie pralnicowirówek,
          pralnic, prasownic oraz suszarek, w wykonaniu morskim, można
          zrealizować każdej wielkości pralnię na dowolnym statku bądź okręcie.
        </Description>
        <Description classes="description_18 description_maxWidth_auto">
          Od <b>1911</b> roku, Primus buduje urządzenia pralnicze w oparciu o
          filozofję “jakość bez kompromisu ”, dostarczając urządzenia o
          najwyższym standardzie i niezawodności.
        </Description>
        <Description classes="description_18 description_maxWidth_auto">
          Nasze produkty znane są z przyjaznej obsługi, trwałości oraz długiej
          żywotności. Przez lata opracowaliśmy specjalne usługi, dla marynarki
          wojennej i statków, dzięki którym gwarantujemy wszelkie niezbędne
          wsparcie, takie jak: natychmiastowa dostawa części i maszyn, specjalne
          napięcia morskie, wszystkie dokumenty techniczne i rysunki. Posiadamy
          również własny dział projektowy, który może Ci pomóc w realizacji
          projektu pralni okrętowej.
        </Description>
        <article className={styles.navy__article}>
          <header>
            <Subtitle
              content="Dlaczego nasza oferta jest najlepsza"
              classes="subtitle_max_width_100"
            />
            <Title
              content="Niezawodne, solidne i trwałe przemysłowe urządzenia pralnicze z rozbudowaną siecią wsparcia technicznego"
              variant="h2"
              classes="title_display_h4 title_mb_2"
            />
          </header>
          <ul className={styles.navy__list}>
            <li className={styles.navy__item}>
              <Subtitle
                content="Jeden dostawca"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <List
                classes="list_small"
                items={[
                  'profesjonalne i komercyjne pralnice, suszarki i prasownice',
                  'dostępność wszystkich rodzajów marynarskich napięć',
                  'produkty dostosowane do wszystkich segmentów marynarki wojennej, w tym statków turystycznych',
                ]}
              />
            </li>
            <li className={styles.navy__item}>
              <Subtitle
                content="Profesjonalny serwis"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <List
                classes="list_small"
                items={[
                  'centralne zarządzanie cześciami zamiennymi',
                  'dział projektowania, rysunków i footprintów',
                  'darmowe wsparcie techniczne - tel. 664962002',
                ]}
              />
            </li>
            <li className={styles.navy__item}>
              <Subtitle
                content="Warunki dostawy"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <List
                classes="list_small"
                items={[
                  'centralny magazyn maszyn i części zamiennych',
                  'natychmiastowa dostawa części zamiennych w czasie krótszym niż 24 godzin',
                  'szeroka gama urządzeń z zasilaniem marynarskim',
                ]}
              />
            </li>
            <li className={styles.navy__item}>
              <Subtitle
                content="Globalny serwis Primus'a"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <List
                classes="list_small"
                items={[
                  'dostarczamy urządzenia na całym świecie',
                  'sieć handlowa w ponad 100 państwach',
                  'działy sprzedaży w Hiszpanii, Francji, Belgii, Dubaju, Honk-Kongu, Urugwaju, Chinach',
                ]}
              />
            </li>
            <li className={styles.navy__item}>
              <Subtitle
                content="Jakość"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <List
                classes="list_small"
                items={[
                  'solidne urządzenia',
                  'wzmocnione komponenty',
                  'niezawodne produkty o dużej żywotności',
                ]}
              />
            </li>
            <li className={styles.navy__item}>
              <Subtitle
                content="Szybki i łatwy kontakt"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <List
                classes="list_small"
                items={[
                  'sprzedaż: biuro@pralma.pl | tel. +48413450561',
                  'po sprzedaży: info@pralma.pl | tel. +48602191607',
                  'części zamienne: serwis@pralma.pl | tel. +48664962002',
                ]}
              />
            </li>
          </ul>
          <footer>
            <ul className={styles.navy__iconsList}>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>łatwa obsługa</span>
                <Image
                  src="/assets/images/navy/ease.svg"
                  alt="łatwa obsługa"
                  width={100}
                  height={100}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>
                  pralnicowirówki wolnostojące
                </span>
                <Image
                  src="/assets/images/navy/free.svg"
                  alt="pralnicowirówki wolnostojące"
                  width={100}
                  height={100}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>
                  stal nierdzewna
                </span>
                <Image
                  src="/assets/images/navy/inox.svg"
                  alt="pralnicowirówki ze stali nierdzewnej"
                  width={100}
                  height={100}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>
                  różne załadunki
                </span>
                <Image
                  src="/assets/images/navy/loading.svg"
                  alt="pralnicowiówki i suszarki o różnych załadunkach"
                  width={100}
                  height={100}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>
                  pralnicowirówki sztywnomocowane
                </span>
                <Image
                  src="/assets/images/navy/rigid.svg"
                  alt="pralnicowirówki sztywnomocowane"
                  width={100}
                  height={100}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>
                  pralko suszarki, zestawy
                </span>
                <Image
                  src="/assets/images/navy/stackable.svg"
                  alt="zestawy pralnicze"
                  width={100}
                  height={100}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <span className={styles.navy__iconCaption}>
                  zasilanie na statek
                </span>
                <Image
                  src="/assets/images/navy/voltage.svg"
                  alt="wszystkie zasilania marynarskie"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </footer>
        </article>
      </main>
      <section className={styles.navy__featuredEquipment}>
        <div className={styles.navy__featuredEquipmentInner}>
          <header className={styles.navy__featuredEquipmentHeader}>
            <Subtitle content="Wykonanie morskie" />
            <Title
              content="Polecane wyposażenie pralnicze"
              variant="h2"
              classes="title_display_h4"
            />
          </header>
          <article className={styles.navy__featuredEquipmentArticle}>
            <ul className={styles.navy__iconsList}>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/loading.svg"
                  alt="różne załadunki"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/stackable.svg"
                  alt="pralko - suszarki, zestawy"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/ease.svg"
                  alt="łatwa obsług"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/voltage.svg"
                  alt="zasilanie na statek"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <header>
              <Subtitle
                content="Małe załadunki 6.5 - 10 kg"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <Title
                content="Pralnicowirówki, suszarki i słupki pralnicze"
                variant="h3"
                classes="title_display_h5 title_mb_2"
              />
            </header>
            <Description classes="description_18 description_maxWidth_auto">
              pralnicowirówki, suszarki mogą być łączone w zestawy tworzące
              słupki pralnicze, aby zajmowały minimum miejsca na statku -
              idealne rozwiązanie dla pralni na potrzeby załogi statku, łodzi
              wycieczkowych.
            </Description>
            <div className={styles.featuredEquipmentBannerImage}>
              <Image
                src="/assets/images/navy/banner_low.webp"
                alt="pralnicowirówki i suszarki o małym załadunku"
                width={1280}
                height={500}
              />
            </div>
            <LinkButton
              label="Poznaj"
              to="/urzadzenia-pralnia/profesionalne-pralnico-suszarki"
              classes="linkButton_center"
            />
          </article>
          <article className={styles.navy__featuredEquipmentArticle}>
            <ul className={styles.navy__iconsList}>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/loading.svg"
                  alt="różne załadunki"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/inox.svg"
                  alt="stal nierdzewna"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/rigid.svg"
                  alt="pralnicowirówki sztywnomocowane"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/ease.svg"
                  alt="łatwa obsług"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/voltage.svg"
                  alt="zasilanie na statek"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <header>
              <Subtitle
                content="Załadunki 8 - 52 kg"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <Title
                content="Pralnicowirówki sztywnomocowane"
                variant="h3"
                classes="title_display_h5 title_mb_2"
              />
            </header>
            <Description classes="description_18 description_maxWidth_auto">
              idealne dla statków towarowych oraz kontenerowych, cystern oraz
              statków o podobnym przeznaczeniu
            </Description>
            <div className={styles.featuredEquipmentBannerImage}>
              <Image
                src="/assets/images/navy/banner_rigid.webp"
                alt="pralnicowirówki sztywnomocowane"
                width={1280}
                height={500}
              />
            </div>
            <LinkButton
              label="Poznaj"
              to="/urzadzenia-pralnia/pralnicowirowki"
              classes="linkButton_center"
            />
          </article>
          <article className={styles.navy__featuredEquipmentArticle}>
            <ul className={styles.navy__iconsList}>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/loading.svg"
                  alt="różne załadunki"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/free.svg"
                  alt="pralnicowirówki wolnostojące"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/inox.svg"
                  alt="stal nierdzewna"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/ease.svg"
                  alt="łatwa obsług"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/voltage.svg"
                  alt="zasilanie na statek"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <header>
              <Subtitle
                content="Załadunki 6.5 - 120 kg"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <Title
                content="Pralnicowirówki wolnostojące"
                variant="h3"
                classes="title_display_h5 title_mb_2"
              />
            </header>
            <Description classes="description_18 description_maxWidth_auto">
              dla statków wycieczkowych i promów
            </Description>
            <div className={styles.featuredEquipmentBannerImage}>
              <Image
                src="/assets/images/navy/banner_highspin.webp"
                alt="pralnicowirówki wolnosotojące"
                width={1280}
                height={500}
              />
            </div>
            <LinkButton
              label="Poznaj"
              to="/urzadzenia-pralnia"
              classes="linkButton_center"
            />
          </article>
          <article className={styles.navy__featuredEquipmentArticle}>
            <ul className={styles.navy__iconsList}>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/loading.svg"
                  alt="różne załadunki"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/inox.svg"
                  alt="stal nierdzewna"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/ease.svg"
                  alt="łatwa obsług"
                  width={50}
                  height={50}
                />
              </li>
              <li className={styles.navy__iconItem}>
                <Image
                  src="/assets/images/navy/voltage.svg"
                  alt="zasilanie na statek"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
            <header>
              <Subtitle
                content="Odpowiednio do potrzeb prania: suszarki, prasownice"
                classes="subtitle_max_width_100 subtitle_small"
              />
              <Title
                content="Pozostałe urządzenia pralnicze"
                variant="h3"
                classes="title_display_h5 title_mb_2"
              />
            </header>
            <Description classes="description_18 description_maxWidth_auto">
              suszarki bębnowe, suszarki komorowe, prasownice walcowe i nieckowe
              przydatne na każdym rodzaju statku bądź okrętu
            </Description>
            <div className={styles.featuredEquipmentBannerImage}>
              <Image
                src="/assets/images/navy/banner_rest.webp"
                alt="pozostałe wyposażenie"
                width={1280}
                height={500}
              />
            </div>
          </article>
        </div>
      </section>
    </React.Fragment>
  );
}
Navy.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default Navy;
