import React from 'react';
import ModernLaundryEquipment from '../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import HygieneBarrier from '../containers/HygieneBarrier/HygieneBarrier';
import CustomersLinks from '../containers/CustomersLinks/CustomersLinks';
import OurServices from '../containers/OurServices/OurServices';
import Softwash from '../containers/Softwash/Softwash';
import Gallery from '../containers/Gallery/Gallery';
import Mop from '../containers/Mop/Mop';
import LatestPosts from '../containers/LatestPosts/LatestPosts';
import RestLinks from '../containers/RestLinks/RestLinks';
import Newsletter from '../containers/Newsletter/Newsletter';
import HomeLayout from '../components/Layout/HomeLayout';
import HeadMetaTags from '../components/HeadMetaTags/HeadMetaTags';
import { customers } from '../constants/customers';
import { getPosts } from '../lib/posts';
import { connectMongoDB } from '../utils/database';

function Home({ on_premises, posts, laundriesPhotos }) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <main>
        <ModernLaundryEquipment data={on_premises} />
      </main>
      <HygieneBarrier />
      <CustomersLinks customers={customers} />
      <OurServices />
      <Softwash />
      <Gallery laundries={laundriesPhotos} />
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
  const { database: db } = await connectMongoDB();
  const laundriesPhotos = await db
    .collection('gallery')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const threeLatestPosts = getPosts().slice(0, 3);
  return {
    props: {
      on_premises: links[0],
      posts: threeLatestPosts,
      laundriesPhotos: JSON.parse(JSON.stringify(laundriesPhotos)),
    },
    revalidate: 10,
  };
}
