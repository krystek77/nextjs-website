import React from 'react';
import Tab from './Tab/Tab';
import Label from '../../components/Label/Label';
import ContentTab from './ContentTab/ContentTab';
import ProductCard from '../../components/ProductCard/ProductCard';

import styles from './Tabs.module.css';

function Tabs({ initialState = 0, data = [] }) {
  const [indexes, setIndexes] = React.useState([initialState]);
  const handleToggleTab = (index) => setIndexes([index]);

  return data.length ? (
    <div className={styles.tabs}>
      <div className={styles.tabs__buttons}>
        {data.map((button, index) => (
          <Tab
            toggleTab={() => handleToggleTab(index)}
            key={index}
            title={button.title}
            subtitle={button.subtitle}
            classes={indexes.includes(index) ? 'tab_active' : ''}
          />
        ))}
      </div>
      {data.map((_, index) => {
        return indexes.includes(index) ? (
          <ContentTab key={index} classes="contentTab_active">
            {_.content.length
              ? _.content.map((item, index) => (
                  <ProductCard key={index} path={item.path} image={item.image}>
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
