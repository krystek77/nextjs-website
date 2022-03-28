import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks';
import styles from './Gallery.module.css';

const photoGallery = [
  { src: 'laundry_01', title: 'Pralnia samoobslugowa' },
  { src: 'laundry_02', title: 'Szpital - pralnia z "bariera higieny"' },
  { src: 'laundry_03', title: 'Pralnia w Domu Pomocy Społecznej' },
  { src: 'laundry_04', title: 'Pralnia komercyjna' },
  { src: 'laundry_05', title: 'Pralnia w apartamentowcu' },
  { src: 'laundry_06', title: 'Pralnai w Domu Pomocy Społecznej' },
];

function Gallery() {
  const imagesRef = useRef(null);
  const [indexes, setIndexes] = useState([0]);
  const { isOpen, setIsOpen } = useModal();

  const scroll = (direction) => {
    if (direction === 'TO_LEFT') {
      imagesRef.current.scrollLeft += 336;
    } else {
      imagesRef.current.scrollLeft -= 336;
    }
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
        classes="modal_center modal_pb_3"
      >
        <Title
          content={photoGallery[indexes[0]].title}
          variant="h3"
          classes="title_display_h5 title_uppercase title_weight_small title_center"
        />
        <div className={styles.galleryImageModal}>
          <Image
            src={`/assets/images/${photoGallery[indexes[0]].src}.webp`}
            alt={`wyposażenie pralni przemysłowej ${
              photoGallery[indexes[0]].src
            }`}
            width="440"
            height="586"
          />
        </div>
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
              {photoGallery.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={styles.gallery__image}
                    onClick={() => {
                      setIndexes([index]);
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src={`/assets/images/${item.src}.webp`}
                      alt={`wyposażenie pralni przemysłowej ${item.src}`}
                      width="440"
                      height="586"
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
