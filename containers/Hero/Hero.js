import styles from "./Hero.module.css";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Description from "../../components/Description/Description";
import LinkButton from "../../components/LinkButton/LinkButton";
import Image from "next/image";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__background}>
        <Image src='/assets/videos/video_poster.png' layout='fill' width='1920' height='700' alt='video' />
      </div>
      <div className={styles.hero__content}>
        <Subtitle classes='subtitle_light_500' content='Przekrocz granice innowacji' />
        <Title classes='title_light_500' variant='h1' content='Sposób na ekologiczną i ekonomiczną pralnię wodną' />
        <Description classes='description_light_500' content='Ponieważ zasoby stają się coraz bardziej cenne, rozwijamy rozwiązania pomagające Ci prać taniej i chronić przy tym naturalne zasoby środkowiska' />
        <LinkButton classes="linkButton_center" label='Odkryj więcej' />
      </div>
      <div className={styles.hero__links}>
          <div className={styles.hero__link}>LinkA</div>
          <div className={styles.hero__link}>LinkB</div>
          <div className={styles.hero__link}>LinkC</div>
          <div className={styles.hero__link}>LinkD</div>
      </div>
    </div>
  );
}
export default Hero;
