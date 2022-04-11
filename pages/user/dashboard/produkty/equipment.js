import React from "react";
import AdminLayout from "components/Layout/AdminLayout";
import Title from "components/Title/Title";
import SelectInput from "components/Select/Select";
import Button from "components/Button/Button";
import styles from "./equipment.module.css";
/*
 * route: http://localhost:3000/user/dashboard/produkty/equipment
 */
function AddEquipmentForm(props) {
  const { dataForForm } = props;
  console.log(dataForForm);

  const [formData, setFormData] = React.useState({});
  const [categoryName, setCategoryName] = React.useState(dataForForm[0].name);
  const [subcategoryName, setSubcategoryName] = React.useState(dataForForm[0].subcategories[0].name);

  const resetForm = () => {};
  return (
    <React.Fragment>
      <div className={styles.addEquipmentForm}>
        <Title content='Dodaj produkt' classes='title_display_h5 title_center title_mb_1' variant='h2' />
      </div>
      <form className={styles.addEquipmentForm__form}>
        <div className={styles.addEquipmentForm__inputsGroup}>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <SelectInput selected={categoryName} name='categoryName' options={dataForForm.map((item) => item.name)} action={(e) => setCategoryName(e.target.value)} />
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <SelectInput selected={subcategoryName} name='subcategoryName' options={dataForForm.find((item) => item.name === categoryName).subcategories.map((item) => item.name)} action={(e) => setSubcategoryName(e.target.value)} />
          </div>
        </div>
        <div className={styles.addEquipmentForm__inputsGroup}>Prawa lewa strona</div>
        <div className={styles.addEquipmentForm__actionButtons}>
          <Button classes='button_mr_2 button_no_wrap' label='dodaj' type='submit' />
          <Button classes='button_dangerous' label='zresetuj' type='button' action={resetForm} />
        </div>
      </form>
    </React.Fragment>
  );
}
AddEquipmentForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default AddEquipmentForm;

import { connectMongoDB } from "utils/database";
export async function getStaticProps() {
  const { database: db } = await connectMongoDB();
  const categories = db.collection("categories");
  const dataForForm = await categories
    .aggregate([
      {
        $lookup: {
          from: "subcategories",
          localField: "_id",
          foreignField: "categoryID",
          as: "subcategories",
          pipeline: [
            {
              $lookup: {
                from: "types",
                localField: "_id",
                foreignField: "subCategoryID",
                as: "types",
              },
            },
            { $project: { name: 1, _id: 0, types: 1 } },
          ],
        },
      },
      { $project: { name: 1, _id: 0, subcategories: 1 } },
    ])
    .toArray();

  return {
    props: {
      dataForForm: JSON.parse(JSON.stringify(dataForForm)),
    },
  };
}
