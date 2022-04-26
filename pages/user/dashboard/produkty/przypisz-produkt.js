import React from "react";
import AdminLayout from "components/Layout/AdminLayout";
import Title from "components/Title/Title";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import styles from "./przypisz-produkt.module.css";

function AssigningProduct() {
  const [category, setCategory] = React.useState({
    name: "",
    title: "",
    description: "",
    image: "",
    vend: false,
    path: "",
    label: "",
  });

  const resetCategoryForm = () =>
    setCategory({
      name: "",
      title: "",
      description: "",
      image: "",
      vend: false,
      path: "",
      label: "",
    });
  const handleCategory = async (e) => {
    e.preventDefault();

    console.log("SET CATEGORY", result);
    resetCategoryForm();
  };
  return (
    <React.Fragment>
      <div className={styles.assigningProduct}>
        <Title content='Przypisz produkt do typu' classes='title_display_h5 title_center title_mb_1' variant='h2' />
      </div>
      <form className={styles.assigningProduct__categoryForm} onSubmit={handleCategory}>
        <div className={styles.assigningProduct__inputWrapper}>
          <Input type='text' fieldName='name' placeholder='wpisz nazwę kategorii' value={category.name} handleInput={(e) => setCategory({ ...category, name: e.target.value })} classes='input_mb_1' />
        </div>
        <div className={styles.parameterForm__actionButtons}>
          <Button classes='button_mr_2 button_no_wrap' label='dodaj' type='submit' />
          <Button classes='button_dangerous' label='zresetuj' type='button' action={resetCategoryForm} />
        </div>
      </form>
    </React.Fragment>
  );
}

AssigningProduct.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default AssigningProduct;
