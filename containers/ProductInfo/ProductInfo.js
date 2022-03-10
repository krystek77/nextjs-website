import styles from './ProductInfo.module.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import LinkButton from '../../components/LinkButton/LinkButton';
import ModelIndicator from './ModelIndicator/ModelIndicator';
import ImageSlider from './ImageSlider/ImageSlider';
import ScrollToAnchor from '../../components/ScrollToAnchor/ScrollToAnchor';

const slider = [
  'fx105_01',
  'fx105_02',
  'fx105_03',
  'fx105_04',
  'fx105_05',
  'fx105_06',
];

function ProductInfo({ vertical }) {
  return (
    <section
      className={
        vertical
          ? `${styles.productInfo} ${styles.productInfo_vertical}`
          : `${styles.productInfo}`
      }
    >
      <div className={styles.productInfo__container}>
        <ModelIndicator model="FX-65" />
        <ModelIndicator model="FX-65" down />
        <ImageSlider data={slider} initialState={-1} />

        <div className={styles.productInfo__content}>
          <Subtitle content="Linia FX" />
          <Title variant="h2" content="Pralnicowirówki wysokoobrotowe" />
          <Description classes="description_mb_3">
            Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga
            najlepszych z najlepszych rozwiązań pralniczych. Zaprojektowane, aby
            zapewnić najniższe koszty zużycia wody i energii, wysoką wydajność i
            przyjazną obsługę. Innowacyjne technologie:{' '}
            <strong>CascadeDrum</strong>, <strong>supereco</strong>,{' '}
            <strong>Xcontrol FLEX +</strong> czy <strong>TRACE-TECH</strong>,
            czynią je bezkonkurencyjne na rynku.
          </Description>
          <Title variant="h3" content="Dostępne modele" classes="title_mb_3" />

          {/** potential component */}
          <div className={styles.linksToModels}>
            <LinkButton label="FX-65" classes="linkButton_model" to="/">
              załadunek 6.5 - 7 kg
            </LinkButton>
            <LinkButton label="FX-80" classes="linkButton_model" to="/">
              załadunek 8 - 9 kg
            </LinkButton>
            <LinkButton label="FX-105" classes="linkButton_model" to="/">
              załadunek 10.5 - 12 kg
            </LinkButton>
            <LinkButton label="FX-135" classes="linkButton_model" to="/">
              załadunek 13.5 kg
            </LinkButton>
            <LinkButton label="FX-180" classes="linkButton_model" to="/">
              załadunek 18 kg
            </LinkButton>
            <LinkButton label="FX-240" classes="linkButton_model" to="/">
              załadunek 24 - 27 kg
            </LinkButton>
            <LinkButton label="FX-280" classes="linkButton_model" to="/">
              załadunek 28 - 32 kg
            </LinkButton>
          </div>
          {/** end potential component */}
          <ScrollToAnchor anchor="specyfikacja" label="zobacz specyfikację" />
        </div>
      </div>
    </section>
  );
}

export default ProductInfo;
