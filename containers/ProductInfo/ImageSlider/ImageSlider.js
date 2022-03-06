import React from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";

function ImageSlider({ initialState = 0, data = {} }) {
  const [indexes, setIndexes] = React.useState([initialState]);
  const toggleImage = (index) => setIndexes([index]);

  return (
    <div className={styles.slider}>
      {data.main.length ? (
        <div className={styles.slider__imageWrapper}>
          {data.main.map((item, index) => {
            return indexes.includes(index) ? (
              <div key={`image_${index + 1}`} className={styles.slider__image}>
                <Image src={`/assets/images/details/${item}.webp`} alt={data.alt} width='480' height='640' />
              </div>
            ) : null;
          })}
        </div>
      ) : null}
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
