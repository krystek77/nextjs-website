import React from "react";
import Image from "next/image";
import { server } from "../../config";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Description from "../../components/Description/Description";

import styles from "../../styles/czesci-zamienne-pralki-przemyslowe.module.css";
/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe/MDB-03-RA (now: /ID)
 */
function SparePart({ item }) {
  const { title, tags, image, description, weight, net_price, countryOfOrigin, available } = item;
  return (
    <React.Fragment>
      <HeadMetaTags title={title} />
      <main className={styles.sparePart}>
        <article className={styles.sparePart__container}>
          <aside className={styles.sparePart__imageWrapper}>
            <Image src={`/assets/images/spare_parts/${image}.webp`} alt={title} layout='fill' />
          </aside>
          <div className={styles.sparePart__content}>
            <header className={styles.sparePart__header}>
              <Subtitle content={tags.join(", ")} />
              <Title content={title} variant='h2' />
            </header>
            <Description content={description} classes='description_18' />
          </div>
        </article>
      </main>
      ;
    </React.Fragment>
  );
}

export default SparePart;

export async function getStaticPaths(context) {
  const response = await fetch(`${server}/api/spare-parts`);
  const result = await response.json();
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
  const slug = context.params.slug;
  const response = await fetch(`${server}/api/spare-parts/${slug}`);
  const result = await response.json();
  return {
    props: {
      item: result,
    },
  };
}
