import React from "react";
import Tab from "../Tabs/Tab/Tab";
import ContentTab from "../Tabs/ContentTab/ContentTab";
import List from "../../components/List/List";
import TechnicalData from "../../components/TechnicalData/TechnicalData";

import styles from "./ProductData.module.css";

function ProductData({ features, parameters, initialState = 0 }) {
  const [tab, setTab] = React.useState(initialState);
  const handleToggleTab = (tab) => setTab(tab);

  return (
    <section className={styles.productData}>
      <div className={styles.productData__buttons}>
        <Tab title='Cechy' toggleTab={() => handleToggleTab(0)} classes={tab === 0 ? "tab_productData tab_active" : "tab_productData"} />
        <Tab title='Specyfikacja' toggleTab={() => handleToggleTab(1)} classes={tab === 1 ? "tab_productData tab_active" : "tab_productData"} />
      </div>
      {tab === 0 && (
        <ContentTab classes={`contentTab_productData contentTab_active`}>
          <List items={features} />
        </ContentTab>
      )}
      {tab === 1 && (
        <ContentTab classes='contentTab_productData contentTab_active'>
          <TechnicalData items={parameters} />
        </ContentTab>
      )}
    </section>
  );
}
export default ProductData;
