import React from 'react';
import Hero from '../containers/Hero/Hero';
import ModernLaundryEquipment from '../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import HygieneBarrier from '../containers/HygieneBarrier/HygieneBarrier';

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ModernLaundryEquipment />
      <HygieneBarrier />
    </React.Fragment>
  );
}
