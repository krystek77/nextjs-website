/*
 * http://localhost:3000/urzadzenia-pralnia/pralnicowirowki/FX105-280/FX105
 */

import React from 'react';
import HeadMetaTags from '../../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../../components/Banner/Banner';
import Title from '../../../../components/Title/Title';
import PageIndicator from '../../../../components/Banner/PageIndicator/PageIndicator';
import ProductInfo from '../../../../containers/ProductInfo/ProductInfo';
import ProductData from '../../../../containers/ProductData/ProductData';
import Leaflets from '../../../../containers/Leaflets/Leaflets';

const parameters = [
  { name: 'załadunek (moduł załadunku 1:10)', value: '10.5', unit: 'kg' },
  {
    name: 'załadunek maksymalny (moduł załadunku 1:9)',
    value: '12',
    unit: 'kg',
  },
  { name: 'pojemność bębna', value: '105', unit: 'litrów' },
  { name: 'średnica bębna', value: '620', unit: 'mm' },
  { name: 'obrtoty prania', value: '49', unit: 'obr./min.' },
  { name: 'obrtoty wirowania', value: '1075', unit: 'obr./min.' },
  { name: 'G-faktor', value: '400', unit: '-' },
  { name: 'moc podgrzewu elektrycznego', value: '6/9/12', unit: 'kW' },
  {
    name: 'podłączenie pary (dla podgrzewu parowego)',
    value: '1/2',
    unit: 'cal',
  },
  {
    name: 'ciśnienie pary (dla podgrzewu parowego)',
    value: '1 - 8',
    unit: 'bar',
  },
  { name: 'podłączenie wody', value: '3/4', unit: 'cal' },
  { name: 'ciśnienie wody', value: '1 - 8', unit: 'bar' },
  { name: 'zasilanie (standard)', value: '3x380 - 415/50Hz/3', unit: '-' },
  { name: 'wymiary (w. x sz. x gł.)', value: '1225x795x795', unit: 'mm' },
  { name: 'masa netto', value: '210', unit: 'kg' },
  { name: "masa brutto'", value: '235', unit: 'kg' },
];
const features = [
  'wolnostojąca wysokoobrotowa',
  'nierdzewny panel górny',
  'przedni i boczne panele ocynkowane lakierowane w aktrakcyjnym kolorze stali INOX',
  'nierdzewny bęben wewnętrzny i zewnętrzny',
  'XControl - łatwy w użyciu sterownik mikroprocesorowy',
  'opatentowany pojemnik na detergenty',
  'duża średnica zaworu spustowego - 76 mm',
  'łatwy dostęp do wszystkich istotnych podzespołów',
  'szeroko otwierane drzwi dla łatwego załadunku i wyładunku',
  'moduł podłączenia do 8 sygnałów pomp płynnych środków piorących',
  'napęd z przemiennikiem częstotliwości',
];
const leaflets = [
  { label: 'karta informacyjna', fileName: 'FX6580105135 KI' },
  {
    label: 'instrukcja instalacji pralnicowirówki',
    fileName: 'FX105 instalacja',
  },
];

function FX105280() {
  return (
    <React.Fragment>
      <HeadMetaTags
        title="Pralnicowirówki wolnostojące wysokoobrotowe"
        description="Najlepszy wybór do pralni przemysłowych, których dzialanie wymaga najlepszych
    z najlepszych rozwiązań pralniczych. Zaprojektowane, aby zapewnić najniższe koszty zużycia wody
    i energii, wysoką wydajność i przyjazną obsługę. Innowacyjne technologie: CascadeDrum,
    supereco, Xcontrol FLEX plus czy TRACE-TECH, czynią ją bezkonkurencyjne na rynku."
        og_title="Pralnicowirówki wolnostojące wysokoobrotowe"
        twitter_title="Pralnicowirówki wolnostojące wysokoobrotowe"
      />
      <Banner classes="banner__washerExtractors_FX">
        <Title
          variant="h1"
          content="Seria FX o załadunku od 6.5 kg do 32 kg"
          classes="title_maxWidth_960 title_bg_white_red"
        />
        <PageIndicator
          label="pralnicowirówki wysokoobrotowe FX"
          variant="red"
        />
      </Banner>
      <main>
        <ProductInfo />
      </main>
      <ProductData features={features} parameters={parameters} />
      <Leaflets leaflets={leaflets} />
    </React.Fragment>
  );
}
export default FX105280;
