/*
 * http://localhost:3000/o-pralma
 */

import React from 'react';
import PageLayout from '../components/Layout/PageLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import Banner from 'components/Banner/Banner';
import Title from 'components/Title/Title';
import Description from 'components/Description/Description';
import OurServices from 'containers/OurServices/OurServices';
import ContactForm from 'containers/ContactForm/ContactForm';
import styles from 'styles/o-pralma.module.css';
function AboutUs() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title="Pralma - producent przemysłowych urządzeń pralniczych"
        twitter_title="Pralma - producent przemysłowych urządzeń pralniczych"
      />
      <Banner classes="banner__aboutUs banner_maxWidth_760">
        <Title
          content=" Przedsiębiorstwo Produkcji Urządzeń Pralniczych PRALMA"
          classes="title_center title_light_500"
        />
        <Description
          classes="description_center description_maxWidth_auto"
          content="Wyposażenie współczesnej i nowoczesnej pralni przemysłowej. Rozwiązania dla małych i dużych pralni przemysłowych, każdego rodzaju i dla każdego"
        />
      </Banner>
      <main className={styles.aboutUs}>
        {/** introduction */}
        <article className={styles.aboutUs__article}>
          <Title content="O nas" variant="h2" />
          <Description classes="description_maxWidth_auto description_18">
            Pralma jest obecnie <b>jedynym</b> producentem przemysłowych
            urządzeń pralniczych oraz wyposażenia do wodnych pralni
            przemysłowych w Polsce.
          </Description>
          <Description classes="description_maxWidth_auto description_18">
            Od chwili powstania w <b>1992</b> roku zbudowaliśmy olbrzymie
            doświadczenie w tworzeniu pełnej gamy urządzeń pralniczych,
            nieustająco modernizując je, aby spełniały każde wymagania
            współczenej i przyszłej pralni.
          </Description>
          <Description classes="description_maxWidth_auto description_18">
            W ofercie posiadamy pralnice, pralnicowirówki sztywnomocowane,
            pralnicowirówki sztywnomocowane z tzw. barierą higieny, wirówki
            pralnicze oraz suszarki bębnowe. Dodatkowo jesteśmy największym
            eksporterem i producentem{' '}
            <b>urządzeń do transportu i składowania prania</b>.
          </Description>
          <Description classes="description_maxWidth_auto description_18">
            Od początku istnienia współpracujemy z firmą <b>Primus</b>,
            wiodącego lidera na świecie, w dostarczaniu komercyjnych rozwiązań
            pralniczych, jako dystrybutor wyposażenia oraz autoryzowany serwis.
          </Description>
          <Description classes="description_maxWidth_auto description_18">
            Przez ten okres wyposażyliśmy, zmodernizowaliśmy bądź doposażyliśmy
            <b> ponad 1000 pralni</b> na terenie całej Polski, różnej wielkości,
            przeznaczenia i rodzaju.
          </Description>
          <Description classes="description_maxWidth_auto description_18">
            <b>Dzięki Waszemu</b> zaufaniu możemy nadal rozwijać się
            dostarczając bezkonkurencyjnych rozwiązań na rynku, do pralni
            przemysłowych, podejmując ciągłe wyzwanie, budowania coraz bardziej
            ekologicznych i inteligentnych systemów pralniczych, aby sprostać
            rosnącym wymaganiom, współczesnego świata pralnczego.
          </Description>
          <p className={styles.aboutUs__greeting}>
            DZIĘKUJEMY i zapraszamy do dalszej współpracy
          </p>
          <p className={styles.aboutUs__signature}>
            {new Date().toLocaleDateString('pl-PL')}, CEO Pralma sp. z o.o.,
            Kielce
          </p>
          <p className={styles.aboutUs__ceo}>Zdzisław Wrona</p>
        </article>
      </main>
      <OurServices />
      <ContactForm />
    </React.Fragment>
  );
}

AboutUs.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default AboutUs;
