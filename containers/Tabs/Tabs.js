import React from 'react';
import Tab from './Tab/Tab';
import Label from '../../components/Label/Label';
import ContentTab from './ContentTab/ContentTab';
import ProductCard from '../../components/ProductCard/ProductCard';

import styles from './Tabs.module.css';

function Tabs({ initialState = 0, data }) {
  const [indexes, setIndexes] = React.useState([initialState]);
  const handleToggleTab = (index) => setIndexes([index]);

  return data.subcategories.length ? (
    <div className={styles.tabs}>
      <div className={styles.tabs__buttons}>
        {data.subcategories.map((button, index) => (
          <Tab
            toggleTab={() => handleToggleTab(index)}
            key={index}
            title={data.name}
            subtitle={button.name}
            classes={indexes.includes(index) ? 'tab_active' : ''}
          />
        ))}
      </div>
      {data.subcategories.map((item, index) => {
        return indexes.includes(index) ? (
          <ContentTab key={index} classes="contentTab_active">
            {item.types.length
              ? item.types.map((item, index) => (
                  <ProductCard
                    key={index}
                    path={item.start_path}
                    image={item.image}
                    list={item.list}
                    label={item.label}
                    horizontal={item.isHorizontal}
                  >
                    <Label
                      label={item.label}
                      classes="label_top_right_vertical label_uppercase"
                    />
                  </ProductCard>
                ))
              : null}
          </ContentTab>
        ) : null;
      })}
    </div>
  ) : null;
}
export default Tabs;
