import React from "react";
import { data } from "../../../cache/spareparts";
import HeadMetaTags from "../../../components/HeadMetaTags/HeadMetaTags";
import Subtitle from "../../../components/Subtitle/Subtitle";
import Banner from "../../../components/Banner/Banner";
import SparePartsSearchForm from "../../../containers/SparePartsSearchForm/SparePartsSearchForm";
import SparePartsList from "../../../containers/SparePartsList/SparePartsList";
import Title from "../../../components/Title/Title";
import Pagination from "../../../components/Pagination/Pagination";
import { pagination, paginationPaths } from "../../../lib";

import styles from "../index.module.css";

function SparePartsPerPage({ items, pageNumber, page }) {
  const [filteredSPareParts, setFilteredSpareParts] = React.useState(items);
  const [formData, setFormData] = React.useState({
    sparePartName: "",
    tags: "",
  });

  const searchSparePartsEndpoint = ({ sparePartName, tags }, page) => `/api/spare-parts/search/?title=${sparePartName}&tags=${tags}&page=${page}`;

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

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const clearForm = () => setFormData({ sparePartName: "", tags: "" });

  React.useEffect(() => {
    setFilteredSpareParts(items);
  }, [items]);

  return (
    <React.Fragment>
      <HeadMetaTags />
      <Banner classes='banner__spareParts '>
        <Subtitle content='Do przemysłowych urządzeń pralniczych' classes='subtitle__ball_dark' />
        <Title content='Popularne części eksploatacyjne i zamienne' classes='title_bg_white_dark title_maxWidth_960' />
      </Banner>
      <main className={styles.main}>
        <SparePartsSearchForm handleSearch={handleSearch} formData={formData} handleInput={handleInput} />
        <SparePartsList items={filteredSPareParts} />
        <Pagination page={page} pageNumber={pageNumber} href='/czesci-zamienne-pralki-przemyslowe/strona' />
      </main>
    </React.Fragment>
  );
}
export default SparePartsPerPage;

export async function getStaticPaths() {
  const paths = paginationPaths(data, 10);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const paginationData = pagination(data, context, 10);
  return {
    props: {
      ...paginationData,
    },
  };
}
