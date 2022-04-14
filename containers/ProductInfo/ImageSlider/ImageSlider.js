import React from 'react';
import Image from 'next/image';
import styles from './ImageSlider.module.css';

function ImageSlider({ initialState = -1, data = [] }) {
  const [indexes, setIndexes] = React.useState([initialState]);
  const toggleImage = (index) => setIndexes([index]);

  const render = indexes.includes(-1) ? (
    <div className={styles.slider__image}>
      <Image src={data[0]} alt="zdjęcie urządzenia" width="480" height="640" />
    </div>
  ) : (
    data.map((item, index) => {
      return indexes.includes(index) ? (
        <div
          key={`image_${index + 1}`}
          className={`${styles.slider__image} ${styles.slider__image_active}`}
        >
          <Image src={item} alt="zdjęcie urządzenia" width="480" height="640" />
        </div>
      ) : null;
    })
  );

  return (
    <div className={styles.slider}>
      {data.length ? (
        <React.Fragment>
          <div className={styles.slider__imageWrapper}>{render}</div>
          <div className={styles.slider__thumbs}>
            {data.map((item, index) => {
              return (
                <button
                  onClick={() => toggleImage(index)}
                  key={`thumb_${index + 1}`}
                  type="button"
                  className={styles.slider__thumb}
                >
                  <Image
                    src={item}
                    alt={`miniatura urządzenia_${index}`}
                    layout="fill"
                  />
                </button>
              );
            })}
          </div>
        </React.Fragment>
      ) : null}
    </div>
  );
}
export default ImageSlider;
