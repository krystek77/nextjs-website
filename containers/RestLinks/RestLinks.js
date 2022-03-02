import Link from "next/link";
import Image from "next/image";
import Label from "../../components/Label/Label";
import styles from "./RestLinks.module.css";

function RestLinks() {
  return (
    <section className={styles.restLinks}>
      <Link href='/urzadzenia-pralnicze-dla-strazy-pozarnej'>
        <a className={styles.restLinks__item}>
          <Image src='/assets/images/rest_links_fire_brigade.png' alt='wyposażenie pralnicze dla służb cywilnych - straż pożarna' width='640' height='640' />
          <Label label='Służby cywilne' classes="label_bottom_left" />
        </a>
      </Link>
      <Link href='/urzadzenia-pralnicze-dla-marynarki-wojennej'>
        <a className={styles.restLinks__item}>
          <Image src='/assets/images/rest_links_navy.png' alt='wyposażenie pralnicze dla wojska - marynarka wojenna' width='640' height='640' />
          <Label label='Marynarka wojenna' classes="label_top_left"/>
        </a>
      </Link>
      <Link href='/czesci-zamienne-pralki-przemyslowe'>
        <a className={styles.restLinks__item}>
          <Image src='/assets/images/rest_links_spare_parts.png' alt='części zamienne do pralek przemysłowych' width='640' height='640' />
          <Label label='Części zamienne' classes="label_bottom_right"/>
        </a>
      </Link>
      <Link href='/pompa-ciepla-evo4'>
        <a className={styles.restLinks__item}>
          <Image src='/assets/images/rest_links_evo4.png' alt='technologia EVO4 - suszarki z pompą ciepła' width='640' height='640' />
          <Label label='Technologia EVO4' classes="label_top_right " />
        </a>
      </Link>
    </section>
  );
}
export default RestLinks;
