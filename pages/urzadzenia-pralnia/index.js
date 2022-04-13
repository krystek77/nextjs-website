/*
 * http://localhost:3000/urzadzenia-pralnia
 */
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import PageIndicator from '../../components/Banner/PageIndicator/PageIndicator';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import ModernLaundryEquipment from '../../containers/ModernLaundryEquipment/ModernLaundryEquipment';
import { connectMongoDB } from 'utils/database';

import styles from './index.module.css';

function LaundryEquipment(props) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes="banner__equipments">
        <Title
          variant="h1"
          content={props.page_title}
          classes="title_maxWidth_960 title_bg_white_primary"
        />
        <PageIndicator label={props.page_label} variant="primary" />
      </Banner>
      <main className={styles.laundryEquipment}>
        <ModernLaundryEquipment
          product_cards={props.product_cards}
          products_title={props.products_title}
          products_subtitle={props.products_subtitle}
        />
      </main>
    </React.Fragment>
  );
}

LaundryEquipment.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default LaundryEquipment;

export async function getStaticProps() {
  const { database: db } = await connectMongoDB();
  const categoriesCollection = db.collection('categories');
  const product_cards = await categoriesCollection
    .aggregate([
      { $match: { vend: false } },
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
  return {
    props: {
      page_title: 'Najwyższa jakość i doskonałe rezultaty prania',
      page_label: 'przemysłowe urządzenia pralnicze',
      product_cards: JSON.parse(JSON.stringify(product_cards)),
      products_title: 'Wyposażenie pralni przemysłowej',
      products_subtitle: 'Dla każdego rodzaju i wielkości',
    },
  };
}
