import React, { useRef } from 'react';
import Image from 'next/image';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import Button from '../../components/Button/Button';
import styles from './Gallery.module.css';

const photoGallery = [
  'laundry_01',
  'laundry_02',
  'laundry_03',
  'laundry_04',
  'laundry_05',
  'laundry_06',
];

function Gallery() {
  const imagesRef = useRef(null);

  const scroll = (direction) => {
    if (direction === 'TO_LEFT') {
      imagesRef.current.scrollLeft += 336;
    } else {
      imagesRef.current.scrollLeft -= 336;
    }
  };

  return (
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
            {photoGallery.map((fileName, index) => {
              return (
                <div key={index} className={styles.gallery__image}>
                  <Image
                    src={`/assets/images/${fileName}.png`}
                    alt={`wyposażenie pralni przemysłowej 0${index + 1}`}
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
          <Button action={() => scroll('TO_LEFT')} classes="button_only_icon ">
            <Image
              src="/assets/icons/to_left.svg"
              alt="scroll to Left"
              width="24"
              height="24"
            />
          </Button>
          <Button action={() => scroll('TO_RIGHT')} classes="button_only_icon ">
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
  );
}

export default Gallery;
