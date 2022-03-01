import styles from './Hero.module.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import LinkButton from '../../components/LinkButton/LinkButton';
import HeroLink from '../../components/HeroLink/HeroLink';
import Image from 'next/image';

const data = [
  {
    path: '/urzadzenia-pralnia/pralnicowirowki',
    class: 'link_leftBottom',
    src: 'hero_washer.png',
    alt: 'pralnicowirówki',
    label: 'pralnicowirówki +',
  },
  {
    path: '/urzadzenia-pralnia/suszarki-bebnowe',
    class: 'link_leftTop',
    src: 'hero_dryers.jpeg',
    alt: 'suszarki bębnowe',
    label: 'suszarki +',
  },
  {
    path: '/urzadzenia-pralnia/prasownice',
    class: 'link_rightCenter',
    src: 'hero_ironers_2.png',
    alt: 'prasownice',
    label: 'prasownice +',
  },
  {
    path: '/urzadzenia-pralnia/wozki-i-regaly',
    class: 'link_rightBottom',
    src: 'hero_trolleys.png',
    alt: 'wózki i regały',
    label: 'wózki i regały +',
  },
];

function Hero() {
  return (
    <div className={styles.hero}>
      {/** hero background */}
      <div className={styles.hero__background}>
        <video loop muted autoPlay className={styles.hero__video}>
          <source src="/assets/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      {/** hero content */}
      <div className={styles.hero__content}>
        <Subtitle
          classes="subtitle_light_500"
          content="Przekrocz granice innowacji"
        />
        <Title
          classes="title_light_500"
          variant="h1"
          content="Sposób na ekologiczną i ekonomiczną pralnię wodną"
        />
        <Description
          classes="description_light_500 description_mb_2"
          content="Ponieważ zasoby stają się coraz bardziej cenne, rozwijamy rozwiązania pomagające Ci prać taniej i chronić przy tym naturalne zasoby środkowiska"
        />
        <LinkButton
          classes="linkButton_center"
          label="Odkryj więcej"
          to="/ekologiczne-wyposazenie-pralni-przemyslowej"
        />
      </div>
      {/** hero links */}
      <div className={styles.hero__links}>
        {data.map((heroLink, index) => (
          <HeroLink
            key={index}
            to={heroLink.path}
            classes={heroLink.class}
            label={heroLink.label}
          >
            <Image
              src={`/assets/images/${heroLink.src}`}
              width="475"
              height="350"
              alt={heroLink.alt}
            />
          </HeroLink>
        ))}
      </div>
    </div>
  );
}
export default Hero;
