import React from 'react';
import dynamic from 'next/dynamic';

const ModernLaundryEquipment = dynamic(() =>
  import('../containers/ModernLaundryEquipment/ModernLaundryEquipment')
);
const HygieneBarrier = dynamic(() =>
  import('../containers/HygieneBarrier/HygieneBarrier')
);
const CustomersLinks = dynamic(() =>
  import('../containers/CustomersLinks/CustomersLinks')
);
const OurServices = dynamic(() =>
  import('../containers/OurServices/OurServices')
);
const Softwash = dynamic(() => import('../containers/Softwash/Softwash'));
const Gallery = dynamic(() => import('../containers/Gallery/Gallery'));
const Mop = dynamic(() => import('../containers/Mop/Mop'));
const LatestPosts = dynamic(() =>
  import('../containers/LatestPosts/LatestPosts')
);
const RestLinks = dynamic(() => import('../containers/RestLinks/RestLinks'));
const Newsletter = dynamic(() => import('../containers/Newsletter/Newsletter'));
const HomeLayout = dynamic(() => import('../components/Layout/HomeLayout'));
const HeadMetaTags = dynamic(() =>
  import('../components/HeadMetaTags/HeadMetaTags')
);
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
  const { database: db, client } = await connectMongoDB();
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
