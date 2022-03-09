import Image from "next/image";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Description from "../../components/Description/Description";

import styles from "./Friendly.module.css";

function Friendly() {
  return (
    <section className={styles.friendly}>
      <div className={styles.friendly__image}>
        <Image src="/assets/images/details/bg_friendly.webp" alt="pralnicowirówka wolnostojąca wysokoobrotowa" layout="fill"/>
      </div>
      <div className={styles.friendly__content}>
        <Subtitle content='Prosta instalacja, wygodna konserwacja' />
        <Title content='Przyjazna użytkownikowi' variant='h2' />
        <Description classes='description_18'>
          The FX Line is softmounted, to enable a fast installation with the best G-Force possible. All the vital parts of the machines - heating elements, drain, control panel - can be accessed from the front. A USB connection inside the control panel makes programming faster and easier.
        </Description>
        <Subtitle content='Niskie koszty prania' />
        <Title content='Skupiona na ekologii' variant='h2' />
        <Description classes='description_18'>
          The FX machines are designed to consume minimum water without affecting the wash performance. Conveniently placed under the low water level, the heating elements and temperature sensor now enable more water saving with the same high wash quality.
        </Description>
      </div>
    </section>
  );
}
export default Friendly;
