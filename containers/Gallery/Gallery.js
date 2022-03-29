import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import moment from 'moment';
import 'moment/locale/pl';
moment.locale('pl');

import { useModal } from '../../hooks';
import styles from './Gallery.module.css';

function Gallery({ laundries }) {
  const imagesRef = useRef(null);
  const [index, setIndex] = useState(laundries[0]._id);
  const { isOpen, setIsOpen } = useModal();

  const scroll = (direction) => {
    if (direction === 'TO_LEFT') {
      imagesRef.current.scrollLeft += 336;
    } else {
      imagesRef.current.scrollLeft -= 336;
    }
  };
  const laundry = laundries.find((item) => item._id === index);

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
        classes="modal_maxWidth_1280 modal_pb_2 modal_bg_squares"
      >
        <article className={styles.gallery__modal}>
          <div className={styles.gallery__modalInner}>
            <aside className={styles.gallery__modalImage}>
              <Image
                src={laundry.image}
                alt={`wyposażenie pralni przemysłowej ${laundry.title}`}
                width="440"
                height="586"
                unoptimized
              />
            </aside>
            <div className={styles.gallery__modalDescription}>
              <div className={styles.gallery__modalHeader}>
                <Subtitle
                  content={`dodano: ${moment(
                    laundry.createdAt,
                    'DD.MM.YYYY'
                  ).fromNow()}`}
                  classes="subtitle_small"
                />
                <Title
                  content={laundry.title}
                  variant="h3"
                  classes="title_display_h5 title_uppercase"
                />
              </div>
              <div className={styles.gallery__modalContent}>
                <Title
                  content="Wyposażenie"
                  variant="h4"
                  classes="title_display_h6"
                />
                {laundry.equipments.length ? (
                  <ul className={styles.gallery__equipmentsList}>
                    {laundry.equipments.map((item, index) => (
                      <li
                        key={index}
                        className={styles.gallery__equipmentsListItem}
                      >
                        <div className={styles.gallery__equipmentsListType}>
                          <span
                            className={styles.gallery__equipmentsListProduct}
                          >
                            {item.product.toLowerCase()}
                          </span>
                          , typ
                          <strong
                            className={styles.gallery__equipmentsListModel}
                          >
                            {item.model}
                          </strong>
                        </div>
                        <span className={styles.gallery__equipmentsListAmount}>
                          - szt. <b>{item.amount}</b>
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Description classes="description_18" content={laundry.desc} />
              </div>
              {laundry.realization && (
                <footer className={styles.gallery__modalFooter}>
                  <Title
                    content="Okres realizacji"
                    variant="h4"
                    classes="title_display_h6"
                  />
                  <div className={styles.gallery__modalRealizationPeriod}>
                    <strong className={styles.gallery__modalRealizationLabel}>
                      od:
                    </strong>
                    <span className={styles.gallery__modalRealizationDate}>
                      {laundry.realization?.from}
                    </span>
                    <strong className={styles.gallery__modalRealizationLabel}>
                      do:
                    </strong>
                    <span className={styles.gallery__modalRealizationDate}>
                      {laundry.realization?.to}
                    </span>
                  </div>
                </footer>
              )}
            </div>
          </div>
        </article>
      </Modal>
      <section className={styles.gallery}>
        <div className={styles.gallery__content}>
          <Subtitle content="Projekty pralni każdego typu i wielkości" />
          <Title content="Nasze realizacje" variant="h2" />
          <Description
            content="Realizujemy projekty wyposażenia pralni przemysłowych już dziesiątki lat.
        Wiemy, że Twoja pralnia to konkretne potrzeby prania, warunki lokalowe czy sposób finansowania. Dzięki
        wielu latom doświadczenia dostarczymy Ci wyposażenie pralni każdego typu i wielkości, optymalne
        do Twoich potrzeb."
          />
        </div>
        <div className={styles.gallery__outer}>
          <div className={styles.gallery__images} ref={imagesRef}>
            <div className={styles.gallery__container}>
              {laundries.map((item) => {
                const { _id, image, title } = item;
                return (
                  <div
                    key={_id}
                    className={styles.gallery__image}
                    onClick={() => {
                      setIndex(_id);
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`wyposażenie pralni przemysłowej ${title}`}
                      width="440"
                      height="586"
                      unoptimized
                    />
                    <div className={styles.gallery__zoom}>
                      <Image
                        src="/assets/icons/zoom.svg"
                        alt="scroll to right"
                        width="32"
                        height="32"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.gallery__controls}>
            <Button action={() => scroll('TO_LEFT')} classes="button_only_icon">
              <Image
                src="/assets/icons/to_left.svg"
                alt="scroll to Left"
                width="24"
                height="24"
              />
            </Button>
            <Button
              action={() => scroll('TO_RIGHT')}
              classes="button_only_icon"
            >
              <Image
                src="/assets/icons/to_right.svg"
                alt="scroll to right"
                width="24"
                height="24"
              />
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Gallery;
