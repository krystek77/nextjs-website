import React from "react";
import Hero from "../containers/Hero/Hero";
import ModernLaundryEquipment from "../containers/ModernLaundryEquipment/ModernLaundryEquipment";
import HygieneBarrier from "../containers/HygieneBarrier/HygieneBarrier";
import OurServices from "../containers/OurServices/OurServices";
import Softwash from "../containers/Softwash/Softwash";
import Gallery from "../containers/Gallery/Gallery";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ModernLaundryEquipment />
      <HygieneBarrier />
      <OurServices />
      <Softwash />
      <Gallery />
    </React.Fragment>
  );
}
