import Title from '../../../components/Title/Title';
import Subtitle from '../../../components/Subtitle/Subtitle';
import Description from '../../../components/Description/Description';
import LinkButton from '../../../components/LinkButton/LinkButton';
import Image from 'next/image';

import styles from './CustomerItem.module.css';

function CustomerItem({ image, title, subtitle, description, page }) {
  return (
    <div className={styles.customerItem}>
      <div className={styles.customerItem__image}>
        <Image
          src={`/assets/images/customers/${image}.jpg`}
          alt={title}
          layout="fill"
        />
      </div>
      <div className={styles.customerItem__content}>
        <Subtitle content={subtitle} />
        <Title content={title} />
        <Description classes="description_maxWidth_480 description_18 description_mb_2">
          {description}
        </Description>

        {page && (
          <LinkButton
            label="dowiedz się więcej"
            to={page}
            classes="linkButton_center"
          />
        )}
      </div>
    </div>
  );
}
export default CustomerItem;
