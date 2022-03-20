import React from "react";
import HeadMetaTags from "../../../components/HeadMetaTags/HeadMetaTags";
import Banner from "../../../components/Banner/Banner";
import Subtitle from "../../../components/Subtitle/Subtitle";
import Title from "../../../components/Title/Title";
import PostsList from "../../../containers/PostsList/PostsList";
import Pagination from "../../../components/Pagination/Pagination";
import { pagination, paginationPaths } from "../../../lib";
import { getPosts } from "../../../lib/posts";
import styles from "../index.module.css";

function PostsPerPage({ items, pageNumber, page }) {
  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes='banner__news'>
        <Subtitle content='Bądź na bieżąco' />
        <Title variant='h1' content='Wiadomości ze świata Pralma' classes='title_bg_white_red title_maxWidth_640 title_light_500' />
      </Banner>
      <main className={styles.main}>
        <PostsList items={items} />
        <Pagination page={page} pageNumber={pageNumber} href={"/wiadomosci/strona"} />
      </main>
    </React.Fragment>
  );
}
export default PostsPerPage;

export function getStaticPaths() {
  const data = getPosts();
  const paths = paginationPaths(data);
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const data = getPosts();
  const paginationData = pagination(data, context);
  return {
    props: {
      ...paginationData,
    },
  };
}
