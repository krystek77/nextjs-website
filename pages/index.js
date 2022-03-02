import React from 'react';
import Hero from '../containers/Hero/Hero';
import ModernLaundryEquipment from '../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import HygieneBarrier from '../containers/HygieneBarrier/HygieneBarrier';
import OurServices from '../containers/OurServices/OurServices';
import Softwash from '../containers/Softwash/Softwash';
import Gallery from '../containers/Gallery/Gallery';
import Mop from '../containers/Mop/Mop';
import News from '../containers/News/News';
import RestLinks from '../containers/RestLinks/RestLinks';
import Newsletter from '../containers/Newsletter/Newsletter';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ModernLaundryEquipment />
      <HygieneBarrier />
      <OurServices />
      <Softwash />
      <Gallery />
      <Mop />
      <News />
      <RestLinks/>
      <Newsletter/>
    </React.Fragment>
  );
}
