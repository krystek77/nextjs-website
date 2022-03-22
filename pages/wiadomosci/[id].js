/*
 * http://localhost:3000/wiadomosci/pralnia-samoobslugowa-krasnik
 */

import React from "react";
import PageLayout from "../../components/Layout/PageLayout";
import { useRouter } from "next/router";
import { getPost, getPosts } from "../../lib/posts";
import { cutURL } from "../../lib";
import HeadMetaTags from "../../components/HeadMetaTags/HeadMetaTags";
import Banner from "../../components/Banner/Banner";
import Title from "../../components/Title/Title";
import DateBar from "../../components/DateBar/DateBar";
import PostDetailsContent from "../../containers/PostDetailsContent/PostDetailsContent";
import IconLink from "../../components/IconLink/IconLink";
import SimilarPosts from "../../containers/SimilarPosts/SimilarPosts";

function PostDetails({ item, similarPosts }) {
  const { title, info, content, date } = item;
  const router = useRouter();
  return (
    <React.Fragment>
      <HeadMetaTags title={title} og_title={title} twitter_title={title} description={info} />
      <Banner classes='banner_height_auto banner_maxWidth_960'>
        <Title variant='h1' content={title} classes='title_light_500 title_display_h4 title_mb_0 title_center title_uppercase title_weight_small' />
      </Banner>
      <DateBar date={date} />
      <PostDetailsContent content={content} />
      <SimilarPosts similarPosts={similarPosts} />
      <IconLink to={cutURL(router, -1)} src='arrow_back' alt='arrow back' width='16' height='11' label='wszystkie wiadomości' />
    </React.Fragment>
  );
}
PostDetails.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

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
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const id = decodeURIComponent(context.params.id);
  const postData = await getPost(id);
  const allPosts = getPosts();

  const similarPosts = allPosts.filter((post) => {
    if (post.id !== id) {
      const similarPost = post.tags.find((postTag) => {
        return postData.tags.some((tag) => tag === postTag);
      });
      return similarPost;
    }
  });
  return {
    props: {
      item: postData,
      similarPosts,
    },
  };
}
