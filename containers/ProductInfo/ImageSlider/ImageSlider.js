import React from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

function ImageSlider({ initialState = -1, data = {} }) {
  const [indexes, setIndexes] = React.useState([initialState]);
  const toggleImage = (index) => setIndexes([index]);

  const render = indexes.includes(-1) ? (
    <div className={styles.slider__image}>
      <Image src={`/assets/images/details/${data.main[0]}.webp`} alt={data.alt} width='480' height='640' />
    </div>
  ) : (
    data.main.map((item, index) => {
      return indexes.includes(index) ? (
        <div key={`image_${index + 1}`} className={`${styles.slider__image} ${styles.slider__image_active}`}>
          <Image src={`/assets/images/details/${item}.webp`} alt={data.alt} width='480' height='640' />
        </div>
      ) : null;
    })
  );

  return (
    <div className={styles.slider}>
      {data.main.length ? <div className={styles.slider__imageWrapper}>{render}</div> : null}
      {data.thumbs.length ? (
        <div className={styles.slider__thumbs}>
          {data.thumbs.map((item, index) => {
            return (
              <button onClick={() => toggleImage(index)} key={`thumb_${index + 1}`} type='button' className={styles.slider__thumb}>
                {item}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
export default ImageSlider;
