/*
 * http://localhost:3000/urzadzenia-pralnia-samoobslugowa
 */
import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import PageIndicator from "components/Banner/PageIndicator/PageIndicator";
import ModernLaundryEquipment from "containers/ModernLaundryEquipment/ModernLaundryEquipment";

function SelfServiceLaundryEquipment(props) {
  console.log(props.product_cards);
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner>
        <Title variant='h1' content={props.page_title} classes='title_maxWidth_960 title_bg_white_primary' />
        <PageIndicator label={props.page_label} variant='primary' />
      </Banner>
      <main>
        <ModernLaundryEquipment product_cards={props.product_cards} products_title={props.products_title} products_subtitle={props.products_subtitle} />
      </main>
    </React.Fragment>
  );
}

SelfServiceLaundryEquipment.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default SelfServiceLaundryEquipment;

import { connectMongoDB } from "utils/database";
export async function getStaticProps() {
  

  const { database: db } = await connectMongoDB();
  const categoriesCollection = db.collection("categories");
  const vend = await categoriesCollection
    .aggregate([
      { $match: { vend: true } },
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "categoryID",
          as: "list",
          pipeline: [{ $project: { name: 1, _id: 0 } }],
        },
      },
    ])
    .toArray();

    
  return {
    props: {
      page_title: "Inteligentne pralnie samoobsługowe",
      page_label: "urządzenia do samoobsługi",
      product_cards: JSON.parse(JSON.stringify(vend)),
      products_title: "Wyposażenie inteligentnej i nowoczesnej pralni samoobsługowej",
      products_subtitle: "Dedykowane do pralni usługowych i socjalnych",
    },
  };
}
