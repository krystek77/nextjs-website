/*
 * http://localhost:3000/wiadomosci/pralnia-samoobslugowa-krasnik
 */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import { useRouter } from 'next/router';
import IconLink from '../../components/IconLink/IconLink';
import { getPosts } from '../../lib/posts';
import { cutURL } from '../../lib';

function PostDetails({ item }) {
  const { title, content } = item;
  const router = useRouter();
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content={title}
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
      <main>{content}</main>
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

export default PostDetails;

export async function getStaticPaths() {
  const allPosts = getPosts();
  const paths = allPosts.map((post) => {
    return {
      params: {
        id: encodeURIComponent(post.id),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const allPosts = getPosts();
  const postData = allPosts.find((post) => post.id === id);
  return {
    props: {
      item: postData,
    },
  };
}
