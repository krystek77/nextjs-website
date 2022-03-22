import React from 'react';
import ModernLaundryEquipment from '../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import HygieneBarrier from '../containers/HygieneBarrier/HygieneBarrier';
import OurServices from '../containers/OurServices/OurServices';
import Softwash from '../containers/Softwash/Softwash';
import Gallery from '../containers/Gallery/Gallery';
import Mop from '../containers/Mop/Mop';
import LatestPosts from '../containers/LatestPosts/LatestPosts';
import RestLinks from '../containers/RestLinks/RestLinks';
import Newsletter from '../containers/Newsletter/Newsletter';
import HomeLayout from '../components/Layout/HomeLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import { getPosts } from '../lib/posts';

function Home({ on_premises, posts }) {
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
      <LatestPosts posts={posts} />
      <RestLinks />
      <Newsletter />
    </React.Fragment>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;

import { links } from '../constants/links';
export async function getStaticProps() {
  //fetch data from the API
  const threeLatestPosts = getPosts().slice(0, 3);
  return {
    props: {
      on_premises: links[0],
      posts: threeLatestPosts,
    },
    revalidate: 10,
  };
}
