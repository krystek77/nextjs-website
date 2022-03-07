import React from "react";
import Tab from "./Tab/Tab";
import Label from "../../components/Label/Label";
import ContentTab from "./ContentTab/ContentTab";
import ProductCard from "../../components/ProductCard/ProductCard";

import styles from "./Tabs.module.css";

function Tabs({ initialState = 0, data = []}) {
  const [indexes, setIndexes] = React.useState([initialState]);
  const handleToggleTab = (index) => setIndexes([index]);

  return data.length ? (
    <div className={styles.tabs}>
      <div className={styles.tabs__buttons}>
        {data.map((button, index) => (
          <Tab toggleTab={() => handleToggleTab(index)} key={index} title={button.title} subtitle={button.subtitle} classes={indexes.includes(index) ? "tab_active" : ""} />
        ))}
      </div>
      {data.map((_, index) => {
        return indexes.includes(index) ? (
          <ContentTab key={index} classes="contentTab_active">
            <ProductCard parent='/urzadzenia-pralnia' path='/pralnicowirowki/FX105-280/FX105'>
              <Label label='FX105-280' classes='label_top_right_vertical label_uppercase' />
            </ProductCard>
            <ProductCard parent='/urzadzenia-pralnia' path='/pralnicowirowki/FX350-600/FX350'>
              <Label label='FX350 FX450 FX600' classes='label_top_right_vertical label_uppercase' />
            </ProductCard>
            <ProductCard parent='/urzadzenia-pralnia' path='/pralnicowirowki/FS800-1200/FX800'>
              <Label label='FS800 FS1000 FS1200' classes='label_top_right_vertical label_uppercase' />
            </ProductCard>
          </ContentTab>
        ) : null;
      })}
    </div>
  ) : null;
}
export default Tabs;
