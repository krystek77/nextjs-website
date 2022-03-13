import React from "react";
import ModernLaundryEquipment from "../containers/ModernLaundryEquipment/ModernLaundryEquipment";
import HygieneBarrier from "../containers/HygieneBarrier/HygieneBarrier";
import OurServices from "../containers/OurServices/OurServices";
import Softwash from "../containers/Softwash/Softwash";
import Gallery from "../containers/Gallery/Gallery";
import Mop from "../containers/Mop/Mop";
import News from "../containers/News/News";
import RestLinks from "../containers/RestLinks/RestLinks";
import Newsletter from "../containers/Newsletter/Newsletter";
import HomeLayout from "../components/Layout/HomeLayout";
import HeadMetaTags from "../components/HeadMetaTags/HeadMetaTags";

function Home({ on_premises }) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <main>
        <ModernLaundryEquipment data={on_premises} />
      </main>
      <HygieneBarrier />
      <OurServices />
      <Softwash />
      <Gallery />
      <Mop />
      <News />
      <RestLinks />
      <Newsletter />
    </React.Fragment>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;

import { links } from "../constants/links";
export async function getStaticProps() {
  //fetch data from the API
  return {
    props: {
      on_premises: links[0],
    },
  };
}
