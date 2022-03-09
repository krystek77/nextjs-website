import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import List from '../../components/List/List';
import BigLabel from '../../components/BigLabel/BigLabel';
import styles from './ECO3.module.css';

function ECO3({ items }) {
  return (
    <section className={styles.ECO3}>
      <article className={styles.ECO3__container}>
        <header className={styles.ECO3__header}>
          <Subtitle content="Same korzyści" />
          <Title content="Technologia ECO3" variant="h2" />
          <Description>
            At Primus, we care about the environment, and we know that
            consumption costs are a key to your business. We developed our{' '}
            <strong>ECO3 technology</strong> with this focus, and made it
            available in standard on all FX models.
          </Description>
        </header>
        <aside className={styles.ECO3__image}>
          <Image
            src="/assets/images/details/bg_eco3.webp"
            alt="eco3"
            layout="fill"
          />
        </aside>
        <div className={styles.ECO3__content}>
          <BigLabel classes="bigLabel_top_left" content="ECO3" />
          <div className={styles.ECO3__contentContainer}>
            <div className={styles.ECO3__list}>
              <List items={items} classes="list_mb_3" />
            </div>
            {/** potential component */}
            <div className={styles.ECO3__posters}>
              {/** poster */}
              <div
                className={`${styles.ECO3__poster} ${styles.ECO3__poster_braun}`}
              >
                <div className={styles.ECO3__percentage}>
                  <span className={styles.ECO3__name}>mniej do</span>
                  <span className={styles.ECO3__value}>-20%</span>
                </div>
                <Description classes="description_18 description_center">
                  Optimising the passive space between tub and drum has
                  minimised water consumption considerably.
                </Description>
              </div>
              {/** poster */}
              <div
                className={`${styles.ECO3__poster} ${styles.ECO3__poster_green}`}
              >
                <div className={styles.ECO3__percentage}>
                  <span className={styles.ECO3__name}>mniej do</span>
                  <span className={styles.ECO3__value}>-15%</span>
                </div>
                <Description classes="description_18 description_center">
                  Using lower water levels has reduced the energy required for
                  heating as well.
                </Description>
              </div>
              {/** poster */}
              <div
                className={`${styles.ECO3__poster} ${styles.ECO3__poster_blue}`}
              >
                <div className={styles.ECO3__percentage}>
                  <span className={styles.ECO3__name}>mniej do</span>
                  <span className={styles.ECO3__value}>-25%</span>
                </div>
                <Description classes="description_18 description_center">
                  Thanks to the final extraction’s very high RPM, the laundry
                  has exceptionally low residual moisture, which also reduces
                  the energy required for drying.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ECO3;
