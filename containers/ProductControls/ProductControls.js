import React from 'react';
import Image from 'next/image';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import styles from './ProductControls.module.css';

function ProductControls({ controls }) {
  return controls.length ? (
    <section className={styles.productControls}>
      <div className={styles.productControls__container}>
        <Title content="Sterowniki" variant="h3" classes="title_mb_3" />
        {/** potential component */}
        <div className={styles.accordion}>
          {controls.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <button type="button" className={styles.accordion__button}>
                  {/* <Image
            src="/assets/icons/expand_menu.svg"
            alt="rozwiń"
            width="32"
            height="32"
          /> */}
                  <Image
                    src="/assets/icons/collapse_menu.svg"
                    alt="zwiń"
                    width="32"
                    height="32"
                  />
                  <span className={styles.accordion__buttonLabel}>
                    {item.name}
                  </span>
                </button>
                <div className={styles.accordion__contentContainer}>
                  <div className={styles.accordion__content}>
                    <div className={styles.accordion__image}>
                      <div className={styles.accordion__imageWrapper}>
                        <Image
                          src={`/assets/images/controls/${item.image}.webp`}
                          alt={item.image}
                          layout="fill"
                        />
                      </div>
                    </div>
                    <div className={styles.accordion__list}>
                      <List items={item.list} />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        {/** end potential component */}
      </div>
    </section>
  ) : null;
}
export default ProductControls;
