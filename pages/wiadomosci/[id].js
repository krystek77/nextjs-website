/*
 * http://localhost:3000/wiadomosci/pralnia-samoobslugowa-krasnik
 */

import React from 'react';
import { useRouter } from 'next/router';
import { getPost, getPosts } from '../../lib/posts';
import { cutURL } from '../../lib';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import DateBar from '../../components/DateBar/DateBar';
import IconLink from '../../components/IconLink/IconLink';
import PostDetailsContent from '../../containers/PostDetailsContent/PostDetailsContent';

function PostDetails({ item }) {
  const { title, info, content, date } = item;
  const router = useRouter();
  return (
    <React.Fragment>
      <HeadMetaTags title={title} description={info} />
      <Banner classes="banner_height_auto banner_maxWidth_960">
        <Title
          variant="h1"
          content={title}
          classes="title_light_500 title_display_h4 title_mb_0 title_center title_uppercase title_weight_small"
        />
      </Banner>
      <DateBar date={date} />
      <PostDetailsContent content={content} />
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
  const id = decodeURIComponent(context.params.id);
  const postData = await getPost(id);
  return {
    props: {
      item: postData,
    },
  };
}
