/*
 * http://localhost:3000/wiadomosci/pralnia-samoobslugowa-krasnik
 */

import React from 'react';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';

function PostItem() {
  return (
    <React.Fragment>
      <Banner>
        <Title
          variant="h1"
          content="Tytuł wspaniałej wiadomości"
          classes="title_maxWidth_960 title_light_500"
        />
      </Banner>
    </React.Fragment>
  );
}

export default PostItem;
