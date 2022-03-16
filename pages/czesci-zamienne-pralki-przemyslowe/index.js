/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe
 */
import { getSpareParts } from '../../lib/spareparts';

import React from 'react';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import SiteInProgess from '../../containers/SiteInProgress/SiteInProgress';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import SparePartsSearchForm from '../../containers/SparePartsSearchForm/SparePartsSearchForm';
import SparePartsList from '../../containers/SparePartsList/SparePartsList';

function SpareParts({ items }) {
  const [filteredSPareParts, setFilteredSpareParts] = React.useState(items);
  const [formData, setFormData] = React.useState({
    sparePartName: '',
    tags: '',
  });

  const searchSparePartsEndpoint = ({ sparePartName, tags }) =>
    `/api/spare-parts/search/?title=${sparePartName}&tags=${tags}`;

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(searchSparePartsEndpoint(formData));
      const result = await response.json();
      setFilteredSpareParts(result);
    } catch (error) {
      console.log(error.message);
    } finally {
      clearForm();
    }
  };

  const handleInput = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const clearForm = () => setFormData({ sparePartName: '', tags: '' });

  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes="banner__spareParts ">
        <Subtitle
          content="Do przemysłowych urządzeń pralniczych"
          classes="subtitle__ball_dark"
        />
        <Title
          content="Popularne części eksploatacyjne i zamienne"
          classes="title_bg_white_dark title_maxWidth_960"
        />
      </Banner>
      <SparePartsSearchForm
        handleSearch={handleSearch}
        formData={formData}
        handleInput={handleInput}
      />
      <SparePartsList items={filteredSPareParts} />
      <SiteInProgess page="CZĘŚCI ZAMIENNE" />
    </React.Fragment>
  );
}

export default SpareParts;

export async function getStaticProps() {
  console.log('FROM GETSTATICPROPS - czesci-zamienne-pralki-przemyslowe ');
  // const result = await fetch(`${server}/api/spare-parts`);
  // const data = await result.json();
  const cachedSpareParts = await getSpareParts();
  return {
    props: {
      items: cachedSpareParts,
    },
  };
}
