import React from 'react';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import ModelIndicator from './ModelIndicator/ModelIndicator';
import ImageSlider from './ImageSlider/ImageSlider';
import AvailableModels from './AvailableModels/AvailableModels';
import ScrollToAnchor from '../../components/ScrollToAnchor/ScrollToAnchor';
import styles from './ProductInfo.module.css';

function ProductInfo({
  vertical = false,
  model = '',
  line = '',
  category = '',
  description = '',
  available_models = [],
  slider = [],
}) {
  return (
    <section
      className={
        vertical
          ? `${styles.productInfo} ${styles.productInfo_vertical}`
          : `${styles.productInfo}`
      }
    >
      <div className={styles.productInfo__container}>
        <ModelIndicator model={model} />
        <ModelIndicator model={model} down />
        <ImageSlider data={slider} initialState={-1} vertical={vertical} />

        <div className={styles.productInfo__content}>
          <Subtitle content={line} />
          <Title variant="h2" content={category} classes="title_capitalize" />
          <Description
            classes={
              vertical ? `description_maxWidth_auto` : `description_mb_3`
            }
          >
            {description}
          </Description>
          <AvailableModels items={available_models} model={model} />
          <ScrollToAnchor anchor="specyfikacja" label="zobacz specyfikację" />
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
