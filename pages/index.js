import React from "react";
import Hero from "../containers/Hero/Hero";
import ModernLaundryEquipment from "../containers/ModernLaundryEquipment/ModernLaundryEquipment";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <ModernLaundryEquipment/>
    </React.Fragment>
  );
}
