import React from 'react';
import { useRouter } from 'next/router';
import Title from '../../../components/Title/Title';
import LinkButton from '../../../components/LinkButton/LinkButton';
import styles from './AvailableModels.module.css';

function AvailableModels({ items, model }) {
  const router = useRouter();
  // console.log(router);
  // console.log(router.query.model);
  // console.log(model); // item.title replace that later
  return items.length ? (
    <React.Fragment>
      <Title variant="h3" content="Dostępne modele" classes="title_mb_3" />
      <div className={styles.linksToModels}>
        {items.map((item) => (
          <LinkButton
            key={item.title}
            label={item.title}
            classes={`linkButton_model ${
              router.query.model === item.title && 'linkButton_activeModel'
            }`}
            to={{
              pathname: router.pathname,
              query: { model: item.title },
            }}
          >
            {item.subtitle}
          </LinkButton>
        ))}
      </div>
    </React.Fragment>
  ) : null;
}

export default AvailableModels;
