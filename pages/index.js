import React from 'react';
import Hero from '../containers/Hero/Hero';
import ModernLaundryEquipment from '../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import HygieneBarrier from '../containers/HygieneBarrier/HygieneBarrier';
import OurServices from '../containers/OurServices/OurServices';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ModernLaundryEquipment />
      <HygieneBarrier />
      <OurServices />
    </React.Fragment>
  );
}
