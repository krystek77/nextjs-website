import React from "react";
import Title from "../../components/Title/Title";
import Subtitle from "../../components/Subtitle/Subtitle";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import styles from "./SparePartsSearchForm.module.css";

function SparePartsSearchForm() {
  const [formData, setFormData] = React.useState({ sparePartName: "", tags: "" });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("SEARCH SPARE PARTS");
    clearForm();
  };

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const clearForm = () => setFormData({ sparePartName: "", tags: "" });

  return (
    <div className={styles.sparePartsSearchForm}>
      <div className={styles.sparePartsSearchForm__container}>
        <header className={styles.sparePartsSearchForm__header}>
          <Subtitle content='Podaj nazwę części lub rodzaj urządzenia' />
          <Title content='Znajdź części zamienne lub eksploatacyjne do swojego urządzenia pralniczego' />
        </header>
        <form className={styles.sparePartsSearchForm__form} onSubmit={handleSearch}>
          <Input classes='input_mb_1' type='text' value={formData.sparePartName} fieldName='sparePartName' handleInput={handleInput} placeholder='według nazwy: np. zawór' />
          <Input classes='input_mb_2' type='text' value={formData.tags} fieldName='tags' handleInput={handleInput} placeholder='według tagów np. pralnice,pralnicowirówki' />
          <Button type='submit' label='szukaj' classes="button_center" />
        </form>
      </div>
    </div>
  );
}
export default SparePartsSearchForm;
