import React from 'react';
import Image from 'next/image';
import Title from '../../components/Title/Title';
import List from '../../components/List/List';
import styles from './ProductControls.module.css';

function ProductControls({ controls, initialState = 0 }) {
  const [indexes, setIndexes] = React.useState([initialState]);

  const handleAccordion = (index) => {
    if (indexes.includes(index)) {
      const filteredIndexes = indexes.filter((item) => item !== index);
      setIndexes(filteredIndexes);
    } else {
      setIndexes([...indexes, index]);
    }
  };
  return controls.length ? (
    <section className={styles.productControls}>
      <div className={styles.productControls__container}>
        <Title content="Sterowniki" variant="h3" classes="title_mb_3" />
        {/** potential component */}
        <div className={styles.accordion}>
          {controls.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <button
                  type="button"
                  className={`${
                    indexes.includes(index)
                      ? `${styles.accordion__button} ${styles.accordion__button_active}`
                      : styles.accordion__button
                  }`}
                  onClick={() => handleAccordion(index)}
                >
                  {indexes.includes(index) ? (
                    <Image
                      src="/assets/icons/collapse_menu.svg"
                      alt="zwiń"
                      width="32"
                      height="32"
                    />
                  ) : (
                    <Image
                      src="/assets/icons/expand_menu_dark.svg"
                      alt="rozwiń"
                      width="32"
                      height="32"
                    />
                  )}

                  <span className={styles.accordion__buttonLabel}>
                    {item.name}
                  </span>
                </button>
                {indexes.includes(index) ? (
                  <div className={styles.accordion__contentContainer}>
                    <div className={styles.accordion__content}>
                      <div className={styles.accordion__image}>
                        <div className={styles.accordion__imageWrapper}>
                          <Image
                            src={item.image}
                            alt="sterownik"
                            layout="fill"
                          />
                        </div>
                      </div>
                      <div className={styles.accordion__list}>
                        <List items={item.list} />
                      </div>
                    </div>
                  </div>
                ) : null}
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
