import Image from "next/image";
import Title from "../../components/Title/Title";
import styles from "./SparePartsList.module.css";
function SparePartsList({ items }) {
  console.log(items);
  return (
    <section className={styles.sparePartsList}>
      <div className={styles.sparePartsList__container}>
        {/** potential component */}
        <div className={styles.sparePartCard}>
          <div className={styles.sparePartCard__image}>
            <Image src='/assets/images/spare_parts/drain_valve.webp' alt='zawór spustowy MDB-03RA' width='480' height='480' />
          </div>
          <div className={styles.sparePartCard__title}>
            <Title content='Zawór spustowy MDB-03RA' variant='h3' classes='title_light_500 title_display_h5 title_weight_small title_center title_mb_05' />
            <div className={styles.sparePartCard__tags}>
              <span className={styles.sparePartCard__tag}>pralnice</span>
              <span className={styles.sparePartCard__tag}>pralnicowirówki</span>
            </div>
            <div className={styles.sparePartCard__actions}>
              <a className={styles.sparePartCard__email} href='mailto:biuro@pralma.pl' title='zapytaj'>
                <Image src='/assets/icons/filled_email.svg' alt='email icon' width='20' height='16' />
              </a>
              <a className={styles.sparePartCard__allegro} href='http://www.pralma.pl' title='kup na allegro'>
                <Image src='/assets/icons/allegro.svg' alt='allegro icon' width='48' height='16' />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.sparePartCard}>
          <div className={styles.sparePartCard__image}>
            <Image src='/assets/images/spare_parts/drain_valve.webp' alt='spare part 1' width='480' height='480' />
          </div>
          <div className={styles.sparePartCard__title}>
            <Title content='Grzałka 5.5 kW 400V' variant='h3' classes='title_light_500 title_display_h5 title_weight_small title_center title_mb_05' />
            <div className={styles.sparePartCard__tags}>
              <span className={styles.sparePartCard__tag}>pralnice</span>
            </div>
            <div className={styles.sparePartCard__actions}>
              <a className={styles.sparePartCard__email} href='mailto:biuro@pralma.pl' title='zapytaj'>
                <Image src='/assets/icons/filled_email.svg' alt='email icon' width='20' height='16' />
              </a>
              <a className={styles.sparePartCard__allegro} href='http://www.pralma.pl' title='kup na allegro'>
                <Image src='/assets/icons/allegro.svg' alt='allegro icon' width='48' height='16' />
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.sparePartCard} ${styles.sparePartCard_bg_blue}`}>
          <div className={styles.sparePartCard__image}>
            <Image src='/assets/images/spare_parts/drain_valve.webp' alt='spare part 1' width='480' height='480' />
          </div>
          <div className={styles.sparePartCard__title}>
            <Title content='Komplet naprawczy zaworu spustowego' variant='h3' classes='title_light_500 title_display_h5 title_weight_small title_center title_mb_05' />
            <div className={styles.sparePartCard__tags}>
              <span className={styles.sparePartCard__tag}>prasownice</span>
            </div>
            <div className={styles.sparePartCard__actions}>
              <a className={styles.sparePartCard__email} href='mailto:biuro@pralma.pl' title='zapytaj'>
                <Image src='/assets/icons/filled_email.svg' alt='email icon' width='20' height='16' />
              </a>
              <a className={styles.sparePartCard__allegro} href='http://www.pralma.pl' title='kup na allegro'>
                <Image src='/assets/icons/allegro.svg' alt='allegro icon' width='48' height='16' />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.sparePartCard}>
          <div className={styles.sparePartCard__image}>
            <Image src='/assets/images/spare_parts/drain_valve.webp' alt='spare part 1' width='480' height='480' />
          </div>
          <div className={styles.sparePartCard__title}>
            <Title variant='h3' classes='title_light_500 title_display_h5 title_weight_small title_center title_mb_05' />
            <div className={styles.sparePartCard__tags}>
              <span className={styles.sparePartCard__tag}>pralnice</span>
            </div>
            <div className={styles.sparePartCard__actions}>
              <a className={styles.sparePartCard__email} href='mailto:biuro@pralma.pl' title='zapytaj'>
                <Image src='/assets/icons/filled_email.svg' alt='email icon' width='20' height='16' />
              </a>
              <a className={styles.sparePartCard__allegro} href='http://www.pralma.pl' title='kup na allegro'>
                <Image src='/assets/icons/allegro.svg' alt='allegro icon' width='48' height='16' />
              </a>
            </div>
          </div>
        </div>
        <div className={`${styles.sparePartCard} ${styles.sparePartCard_bg_blue}`}>
          <div className={styles.sparePartCard__image}>
            <Image src='/assets/images/spare_parts/drain_valve.webp' alt='spare part 1' width='480' height='480' />
          </div>
          <div className={styles.sparePartCard__title}>
            <Title variant='h3' classes='title_light_500 title_display_h5 title_weight_small title_center title_mb_05' />
            <div className={styles.sparePartCard__tags}>
              <span className={styles.sparePartCard__tag}>pralnicowirówki</span>
            </div>
            <div className={styles.sparePartCard__actions}>
              <a className={styles.sparePartCard__email} href='mailto:biuro@pralma.pl' title='zapytaj'>
                <Image src='/assets/icons/filled_email.svg' alt='email icon' width='20' height='16' />
              </a>
              <a className={styles.sparePartCard__allegro} href='http://www.pralma.pl' title='kup na allegro'>
                <Image src='/assets/icons/allegro.svg' alt='allegro icon' width='48' height='16' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SparePartsList;
