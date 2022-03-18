import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import TechnicalData from '../../components/TechnicalData/TechnicalData';
import IconLink from '../../components/IconLink/IconLink';
import { cutURL } from '../../lib';
import { spare_parts as data } from '../../constants/spare_parts';

import styles from './SparePartDetails.module.css';
/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe/MDB-03-RA (now: /ID)
 */
function SparePart({ item }) {
  const router = useRouter();
  const { title, tags, image, description, parameters } = item;

  return (
    <React.Fragment>
      <HeadMetaTags title={title} />
      <main className={styles.sparePart}>
        <article className={styles.sparePart__container}>
          <aside className={styles.sparePart__imageWrapper}>
            <Image
              src={`/assets/images/spare_parts/${image}.webp`}
              alt={title}
              layout="fill"
            />
          </aside>
          <div className={styles.sparePart__content}>
            <header className={styles.sparePart__header}>
              <Subtitle content={tags.join(', ')} />
              <Title content={title} variant="h2" />
            </header>
            <Description content={description} classes="description_18" />
            <TechnicalData items={parameters} />
          </div>
        </article>
      </main>
      <IconLink
        to={cutURL(router, -1)}
        src="arrow_back"
        alt="arrow back"
        width="16"
        height="11"
        label="wróć"
      />
    </React.Fragment>
  );
}

export default SparePart;

export async function getStaticPaths(context) {
  // const response = await fetch(`${server}/api/spare-parts`);
  // const result = await response.json();
  const result = data;
  const paths = result.map((item) => {
    return {
      params: {
        slug: item.partID.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(
    'FROM GETSTATICPROPS -/czesci-zamienne-pralki-przemyslowe/[slug]'
  );
  const slug = context.params.slug;
  // const response = await fetch(`${server}/api/spare-parts/${slug}`);
  // const result = await response.json();
  const result = data.find((item) => item.partID === slug);
  const { parameters } = result;
  const formatedParameters = parameters.map((item) => {
    return item.name === 'cena netto'
      ? {
          ...item,
          value: new Intl.NumberFormat('pl-PL', {
            style: 'currency',
            currency: 'PLN',
          }).format(item.value),
        }
      : item;
  });
  return {
    props: {
      item: { ...result, parameters: [...formatedParameters] },
    },
  };
}
