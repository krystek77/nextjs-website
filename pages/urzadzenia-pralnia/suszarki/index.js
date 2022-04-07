import React from "react";
import PageLayout from "components/Layout/PageLayout";
import HeadMetaTags from "components/HeadMetaTags/HeadMetaTags";
import Banner from "components/Banner/Banner";
import Title from "components/Title/Title";
import PageIndicator from "components/Banner/PageIndicator/PageIndicator";
import Tabs from "containers/Tabs/Tabs";
import { connectMongoDB } from "utils/database";

import styles from "./index.module.css";
function ThumbleDryers({ items }) {
  const { title, description, name, subcategories } = items[0];
  return (
    <React.Fragment>
      <HeadMetaTags title={title} description={description} twitter_title={title} />
      <Banner classes='banner__thumbleDryers'>
        <Title variant='h1' content={title} classes='title_maxWidth_960 title_bg_white_red' />
        <PageIndicator label={name} variant='red' />
      </Banner>
      <main className={styles.thumbleDryers}>
        <Tabs data={{ subcategories: subcategories, name }} initialState={0} />
      </main>
    </React.Fragment>
  );
}
ThumbleDryers.defaultProps = {
  items: [{ title: "some title", description: "some description", name: "suszarki", subcategories: [] }],
};
ThumbleDryers.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default ThumbleDryers;

export async function getStaticProps() {
  let items = [];
  try {
    const { database: db } = await connectMongoDB();
    const categories = db.collection("categories");
    items = await categories
      .aggregate([
        {
          $lookup: {
            from: "subcategories",
            localField: "_id",
            foreignField: "categoryID",
            as: "subcategories",
            pipeline: [
              {
                $lookup: {
                  from: "types",
                  localField: "_id",
                  foreignField: "subCategoryID",
                  as: "types",
                },
              },
            ],
          },
        },
        { $match: { name: "suszarki" } },
      ])
      .toArray();
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
