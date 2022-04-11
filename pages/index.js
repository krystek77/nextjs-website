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

function Home(props) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <main>
        <ModernLaundryEquipment
          product_cards={props.product_cards}
          products_title={props.products_title}
          products_subtitle={props.products_subtitle}
          classes="modernLaundryEquipment_bg_primary"
        />
        <ModernLaundryEquipment
          product_cards={props.product_cards_vend}
          products_title={props.products_title_vend}
          products_subtitle={props.products_subtitle_vend}
        />
      </main>
      <HygieneBarrier />
      <CustomersLinks customers={customers} />
      <OurServices />
      <Softwash />
      <Gallery laundries={props.laundriesPhotos} />
      <Mop />
      <LatestPosts posts={props.posts} />
      <RestLinks />
      <Newsletter />
    </React.Fragment>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
export default Home;

export async function getStaticProps() {
  const { database: db } = await connectMongoDB();
  // galleries
  const laundriesPhotos = await db
    .collection('gallery')
    .find({})
    .sort({ createdAt: -1 })
    .toArray();
  const threeLatestPosts = getPosts().slice(0, 3);
  //product_cards
  const categoriesCollection = db.collection('categories');
  const product_cards_all = await categoriesCollection
    .aggregate([
      {
        $lookup: {
          from: 'subcategories',
          localField: '_id',
          foreignField: 'categoryID',
          as: 'list',
          pipeline: [{ $project: { name: 1, _id: 0 } }],
        },
      },
    ])
    .toArray();
  const product_cards_vend = product_cards_all.filter(
    (product_card) => product_card.vend === true
  );
  const product_cards = product_cards_all.filter(
    (product_card) => product_card.vend === false
  );

  return {
    props: {
      posts: threeLatestPosts,
      page_title: '',
      page_label: '',
      products_title: 'Wyposażenie nowoczesnej pralni przemysłowej',
      products_subtitle: 'Do pralni każdej wielkości i rodzaju',
      product_cards: JSON.parse(JSON.stringify(product_cards)),
      products_title_vend: 'Wyposażenie inteligentnej pralni samoobsługowej',
      products_subtitle_vend:
        'Odpowiedne do każdej pralni komercyjnej jak i socjalnej',
      product_cards_vend: JSON.parse(JSON.stringify(product_cards_vend)),
      laundriesPhotos: JSON.parse(JSON.stringify(laundriesPhotos)),
    },
    revalidate: 10,
  };
}
