/*
 * http://localhost:3000/wiadomosci
 */

import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import Subtitle from '../../components/Subtitle/Subtitle';
import PostsList from '../../containers/PostsList/PostsList';
import Pagination from '../../components/Pagination/Pagination';
import { getPosts } from '../../lib/posts';
import { pagination } from '../../lib';

import styles from './index.module.css';

function Posts({ items, pageNumber, page }) {
  const title =
    'Wiadomośći z branży 📰 pralni przemysłowych - PPUP Pralma, Kielce';
  return (
    <React.Fragment>
      <HeadMetaTags
        title={title}
        og_title={title}
        twitter_title={title}
        description="Bądź na bieżąco z nowoczesnymi rozwiązaniami z branży przemysłowych urządeń pralniczych i pralni przemysłowych. Innowacyjne, ekologiczne pralnie, 🍀 ciekawostki, technologie i wypsażenie pralncze"
      />
      <Banner classes="banner__news">
        <Subtitle content="Bądź na bieżąco" />
        <Title
          variant="h1"
          content="Wiadomości ze świata Pralma"
          classes="title_bg_white_red title_maxWidth_640 title_light_500"
        />
      </Banner>
      <main className={styles.main}>
        <PostsList items={items} />
        <Pagination
          page={page}
          pageNumber={pageNumber}
          href={'/wiadomosci/strona'}
        />
      </main>
    </React.Fragment>
  );
}
Posts.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default Posts;

export async function getStaticProps(context) {
  const data = getPosts();
  const paginationData = pagination(data, context);
  console.log('revalidate');
  return {
    props: {
      ...paginationData,
    },
    revalidate: 10,
  };
}
