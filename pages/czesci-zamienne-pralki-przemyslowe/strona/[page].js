import React from 'react';
import { data } from '../../../cache/spareparts';
import HeadMetaTags from '../../../components/HeadMetaTags/HeadMetaTags';
import Subtitle from '../../../components/Subtitle/Subtitle';
import Banner from '../../../components/Banner/Banner';
import SparePartsSearchForm from '../../../containers/SparePartsSearchForm/SparePartsSearchForm';
import SparePartsList from '../../../containers/SparePartsList/SparePartsList';
import Title from '../../../components/Title/Title';
import Pagination from '../../../components/Pagination/Pagination';
import styles from '../index.module.css';

function SparePartsPerPage({ items, pageNumber, page }) {
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

  React.useEffect(() => {
    setFilteredSpareParts(items);
  }, [items]);

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
        <Pagination pageNumber={pageNumber} />
      </main>
    </React.Fragment>
  );
}
export default SparePartsPerPage;

export async function getStaticPaths() {
  /** REQUEST CACHE DATA TO CALCULATE TOTAL PAGE NUMBER */
  const LIMIT = 10;
  const pageNumber = Math.ceil(data.length / LIMIT);
  const paths = Array.from({ length: pageNumber }).map((_, index) => {
    return { params: { page: (index + 1).toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  /** FETCH PAGE DATA */
  const LIMIT = 10;
  const page = context.params.page;
  const pageNumber = Math.ceil(data.length / LIMIT);
  const dataPerPage = data.slice(LIMIT * (page - 1), LIMIT * page);
  return {
    props: {
      items: dataPerPage,
      pageNumber: pageNumber,
      page: page,
    },
  };
}
