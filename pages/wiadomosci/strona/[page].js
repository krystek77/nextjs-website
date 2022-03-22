import React from 'react';
import PageLayout from '../../../components/Layout/PageLayout';
import HeadMetaTags from '../../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../../components/Banner/Banner';
import Subtitle from '../../../components/Subtitle/Subtitle';
import Title from '../../../components/Title/Title';
import PostsList from '../../../containers/PostsList/PostsList';
import Pagination from '../../../components/Pagination/Pagination';
import { pagination, paginationPaths } from '../../../lib';
import { getPosts } from '../../../lib/posts';
import styles from '../index.module.css';

function PostsPerPage({ items, pageNumber, page }) {
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

PostsPerPage.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};
export default PostsPerPage;

export function getStaticPaths() {
  const data = getPosts();
  const paths = paginationPaths(data);
  return {
    paths,
    fallback: 'blocking',
  };
}

export function getStaticProps(context) {
  const data = getPosts();
  const paginationData = pagination(data, context);
  return {
    props: {
      ...paginationData,
    },
    revalidate: 10,
  };
}
