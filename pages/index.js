import React from 'react';
import ModernLaundryEquipment from '../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import HygieneBarrier from '../containers/HygieneBarrier/HygieneBarrier';
import OurServices from '../containers/OurServices/OurServices';
import Softwash from '../containers/Softwash/Softwash';
import Gallery from '../containers/Gallery/Gallery';
import Mop from '../containers/Mop/Mop';
import News from '../containers/News/News';
import RestLinks from '../containers/RestLinks/RestLinks';
import Newsletter from '../containers/Newsletter/Newsletter';
import HomeLayout from '../components/Layout/HomeLayout';

export default function Home() {
  return (
    <main>
      <ModernLaundryEquipment />
      <HygieneBarrier />
      <OurServices />
      <Softwash />
      <Gallery />
      <Mop />
      <News />
      <RestLinks />
      <Newsletter />
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
