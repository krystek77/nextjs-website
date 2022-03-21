/*
 * http://localhost:3000/czesci-zamienne-pralki-przemyslowe
 */
import React from 'react';
import PageLayout from '../../components/Layout/PageLayout';
import { getSpareParts } from '../../lib/spareparts';
import { pagination } from '../../lib';
import HeadMetaTags from '../../components/HeadMetaTags/HeadMetaTags';
import Banner from '../../components/Banner/Banner';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import SparePartsSearchForm from '../../containers/SparePartsSearchForm/SparePartsSearchForm';
import SparePartsList from '../../containers/SparePartsList/SparePartsList';
import Pagination from '../../components/Pagination/Pagination';
import styles from './index.module.css';

function SpareParts({ items, pageNumber, page }) {
  const [filteredSPareParts, setFilteredSpareParts] = React.useState(items);
  const [formData, setFormData] = React.useState({
    sparePartName: '',
    tags: '',
  });

  const searchSparePartsEndpoint = ({ sparePartName, tags }, page) =>
    `/api/spare-parts/search/?title=${sparePartName}&tags=${tags}&page=${page}`;

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(searchSparePartsEndpoint(formData, page));
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
      <main className={styles.main}>
        <SparePartsSearchForm
          handleSearch={handleSearch}
          formData={formData}
          handleInput={handleInput}
        />
        <SparePartsList items={filteredSPareParts} />
        <Pagination
          page={page}
          pageNumber={pageNumber}
          href="/czesci-zamienne-pralki-przemyslowe/strona"
        />
      </main>
    </React.Fragment>
  );
}

SpareParts.getLayout = (page) => {
  return <PageLayout>{page}</PageLayout>;
};

export default SpareParts;

export async function getStaticProps(context) {
  const cachedSpareParts = await getSpareParts();
  const paginationData = pagination(cachedSpareParts, context, 10);
  return {
    props: {
      ...paginationData,
    },
  };
}
