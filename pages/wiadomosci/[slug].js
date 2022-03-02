/*
 * http://localhost:3000/wiadomosci/pralnia-samoobslugowa-krasnik
 */
import { useRouter } from 'next/router';
import React from 'react';
import Banner from '../../components/Banner/Banner';
function PostItem() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Banner post={router.query.slug} />
    </React.Fragment>
  );
}
export default PostItem;
