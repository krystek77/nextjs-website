import Image from "next/image";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import LinkButton from "../../components/LinkButton/LinkButton";

import Description from "../../components/Description/Description";

import styles from "./Mop.module.css";

function Mop() {
  return (
    <section className={styles.mop}>
      <div className={styles.mop__image}>
        <Image src='/assets/images/bg_mop.webp' alt='wyposażenie do prania mopów' width={960} height={700} />
      </div>
      <div className={styles.mop__content}>
        <Subtitle content='Pralma - Twój partner w utrzymaniu czystosci' />
        <Title content='Dbanie o czystość i porządek  stało się łatwiejsze' classes='title_maxWidth_640' />
        <Description
          classes='description_18 description_maxWidth_760 '
          content='Jednym z elementów niezbędnym do świadczenia usług sprzątania o wysokiej jakości jest sprzęt pralniczy. Rosnące wymagania w zakresie higieny i wydajności czyszczenia podłóg wymagają innowacyjnych
          rozwiązań oraz wysokowydajnych i wygodnych w eksploatacji urządzeń do prania.'
        />
        <LinkButton label='Poznaj szczegóły' to='/do-prania-mop' />
      </div>
    </section>
  );
}

export default Mop;
