import React from "react";
import AdminLayout from "components/Layout/AdminLayout";
import Title from "components/Title/Title";
import SelectInput from "components/Select/Select";
import Input from "components/Input/Input";
import InputError from "components/InputError/InputError";
import RequiredMarker from "components/RequiredMarker/RequiredMarker";
import TextareaInput from "components/InputTextarea/InputTextarea";
import InputFileBase64 from "components/InpufileBase64/InputFileBase64";
import Button from "components/Button/Button";
import styles from "./urzadzenie.module.css";
/*
 * route: http://localhost:3000/user/dashboard/produkty/urzadzenie
 */
function AddEquipmentForm(props) {
  const { categories, parameters, controls } = props;
  // console.log(categories);
  // console.log(parameters);
  // console.log(controls);

  const [product, setProduct] = React.useState({
    typeID: "",
    model: "",
    label: "",
    title: "",
    description: "",
    features: [],
    controls: [],
    parameters: [],
    slider: [],
    leaflets: [],
    isVertical: false,
  });
  const [added, setAdded] = React.useState({
    parameter: false,
    control: false,
    features: false,
    slider: false,
    leaflets: false,
  });
  const [exists, setExists] = React.useState({
    parameter: false,
    control: false,
    features: false,
    slider: false,
    leaflets: false,
  });
  const [categoryName, setCategoryName] = React.useState(() => categories[0]?.name);
  const [subcategoryName, setSubcategoryName] = React.useState(categories[0]?.subcategories[0]?.name);
  const [typeName, setTypeName] = React.useState(categories[0]?.subcategories[0]?.types[0]?.name);
  const [parameter, setParameter] = React.useState({
    name: parameters[0]?.name,
    unit: parameters[0]?.unit,
    value: "",
  });
  // add control
  const [control, setControl] = React.useState(controls[0]?.name);
  const addControl = () => {
    const isExistsControl = product.controls.find((item) => item?.name === control);
    if (!isExistsControl) {
      const newControl = controls.find((item) => item.name === control);
      setProduct({ ...product, controls: [...product.controls, newControl] });
      setAdded({ ...added, control: true });
      resetControl();
    } else {
      setExists({ ...exists, control: true });
    }
  };
  const resetControl = () => setControl(controls[0]?.name);
  //add parameter
  const addParameter = () => {
    const isAddedAlready = product.parameters.find((item) => item.name === parameter.name);
    if (!isAddedAlready) {
      setProduct({
        ...product,
        parameters: [...product.parameters, parameter],
      });
      setAdded({ ...added, parameter: true });
      setParameter({ ...parameter, value: "" });
    } else {
      setExists({ ...exists, parameter: true });
    }
  };
  const resetParameter = () =>
    setParameter({
      name: parameters[0]?.name,
      unit: parameters[0]?.unit,
      value: "",
    });

  const resetForm = () => {};

  React.useEffect(() => {
    const timer = setTimeout(function () {
      setAdded({
        parameter: false,
        control: false,
        features: false,
        slider: false,
        leaflets: false,
      });
      setExists({
        parameter: false,
        control: false,
        features: false,
        slider: false,
        leaflets: false,
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [added, exists]);
  return (
    <React.Fragment>
      <div className={styles.addEquipmentForm}>
        <Title content='Dodaj urządzenie' classes='title_display_h5 title_center title_mb_1' variant='h2' />
      </div>
      <form className={styles.addEquipmentForm__form}>
        <div className={styles.addEquipmentForm__inputsGroup}>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title content='Kategoria' variant='h3' classes='title_display_h6 title_uppercase  title_mb_05' />
            <SelectInput
              selected={categoryName}
              name='categoryName'
              options={categories.map((item) => item.name)}
              action={(e) => {
                setCategoryName(e.target.value);
                setSubcategoryName(categories.find((item) => item.name === e.target.value)?.subcategories[0]?.name);
                setTypeName(categories.find((item) => item.name === e.target.value)?.subcategories[0]?.types[0]?.name);
              }}
            />
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title content='Podkategoria' variant='h3' classes='title_display_h6 title_uppercase  title_mb_05' />
            <SelectInput
              selected={subcategoryName}
              name='subcategoryName'
              options={categories.find((item) => item.name === categoryName)?.subcategories.map((item) => item.name)}
              action={(e) => {
                setSubcategoryName(e.target.value);
                setTypeName(categories.find((item) => item.name === categoryName)?.subcategories.find((item) => item.name === e.target.value)?.types[0]?.name);
              }}
            />
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title content='Oznaczenie serii' variant='h3' classes='title_display_h6 title_uppercase  title_mb_05' />
            <SelectInput
              selected={typeName}
              name='typeName'
              options={categories
                .find((item) => item.name === categoryName)
                ?.subcategories.find((item) => item.name === subcategoryName)
                ?.types.map((item) => item.name)}
              action={(e) => setTypeName(e.target.value)}
            />
          </div>
          {/** parametr */}
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title content='Dodaj parametr' variant='h3' classes='title_display_h6 title_uppercase  title_mb_05' />
            <div className={styles.addEquipmentForm__parameter}>
              <SelectInput
                selected={parameter?.name}
                name='parameter'
                options={parameters.map((item) => item.name)}
                action={(e) =>
                  setParameter({
                    ...parameter,
                    name: e.target.value,
                    unit: parameters.find((item) => item.name === e.target.value)?.unit,
                  })
                }
              />
              <div className={styles.addEquipmentForm__inputWrapper}>
                <Input type='text' fieldName='parameter' placeholder='Wpisz wartość parametru' value={parameter.value} handleInput={(e) => setParameter({ ...parameter, value: e.target.value })} classes='input_mb_1' />
                <InputError isError={true} message='Wartość jest wymagana' />
                <RequiredMarker classes='requiredMarker_bottom_5_5' />

                <Button label='dodaj parametr' classes='button_small button_no_wrap button_mb_1 button_to_right' action={addParameter}>
                  +
                </Button>
                {added.parameter && !exists.parameter && <span className={`${styles.addEquipmentForm__Indicator}`}>Parametr dodany</span>}
                {exists.parameter && <span className={`${styles.addEquipmentForm__Indicator} ${styles.addEquipmentForm__Indicator_bottom_3_5}`}>Parametr o tej nazwie już został dodany</span>}
                <div className={styles.addEquipmentForm__valueContainer}>
                  <span className={styles.addEquipmentForm__value}>{parameter.value ? parameter.value : "-brak wartości-"}</span>
                  <span className={styles.addEquipmentForm__unit}>{`${parameter.unit !== "" ? `[${parameter.unit}]` : ""}`}</span>
                </div>
              </div>
            </div>
          </div>
          {/** end parametr */}
        </div>
        {/** ---------------------------------------------------------------- */}
        <div className={styles.addEquipmentForm__inputsGroup}>
          <div className={styles.addEquipmentForm__model}>
            {/** model */}
            <div className={styles.addEquipmentForm__inputWrapper}>
              <Title content='Model' variant='h3' classes='title_display_h6 title_uppercase title_mb_0' />
              <Input type='text' fieldName='model' placeholder='Wpisz oznaczenie modelu: np. Pralma-16F' value={product.model} handleInput={(e) => setProduct({ ...product, model: e.target.value })} classes='input_mb_1' />
              <InputError isError={true} message='Model jest wymagany' classes='inputError_to_right inputError_top_minus_05' />
              <RequiredMarker classes='requiredMarker_bottom_minus_05' />
            </div>
            {/**  end model */}
            {/** label */}
            <div className={styles.addEquipmentForm__inputWrapper}>
              <Title content='Etykieta' variant='h3' classes='title_display_h6 title_uppercase title_mb_0' />
              <Input type='text' fieldName='label' placeholder='Wpisz etykietę produktu: np. załadunek 16 kg' value={product.label} handleInput={(e) => setProduct({ ...product, label: e.target.value })} classes='input_mb_1' />
              <InputError isError={true} message='Etykieta jest wymagana' classes='inputError_to_right inputError_top_minus_05' />
              <RequiredMarker classes='requiredMarker_bottom_minus_05' />
            </div>
            {/**  end label */}
          </div>
          {/** title */}
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title content='Tytuł' variant='h3' classes='title_display_h6 title_uppercase title_mb_0' />
            <Input type='text' fieldName='title' placeholder='Wpisz tytuł produktu: np. Suszarka bębnowa, typ TX-9' value={product.title} handleInput={(e) => setProduct({ ...product, title: e.target.value })} classes='input_mb_1' />
            <InputError isError={true} message='Tytuł jest wymagana' classes='inputError_to_right inputError_top_minus_05' />
            <RequiredMarker classes='requiredMarker_bottom_minus_1_5' />
          </div>
          {/**  end title */}
          {/** control */}
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title content='Dodaj sterownik' variant='h3' classes='title_display_h6 title_uppercase title_mb_05 title_pt_1' />
            <SelectInput selected={control} name='control' options={controls.map((item) => item.name)} action={(e) => setControl(e.target.value)} />
            <Button label='dodaj sterownik' classes='button_small button_no_wrap button_mb_1 button_to_right' action={addControl}>
              +
            </Button>
            {added.control && !exists.control && <span className={styles.addEquipmentForm__Indicator}>Sterownik dodany</span>}
            {exists.control && <span className={styles.addEquipmentForm__Indicator}>Ten sterownik został już dodany</span>}
          </div>
          {/** add control */}
        </div>
        {/** ---------------------------------------------------------------- */}
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
  const categoriesCollection = db.collection("categories");
  const parametersCollection = db.collection("parameters");
  const controlsCollection = db.collection("controls");
  try {
    const categories = await categoriesCollection
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
    const parameters = await parametersCollection.find({}).sort({ name: 1 }).project({ _id: 0 }).toArray();
    const controls = await controlsCollection.find({}).sort({ name: 1 }).project({ _id: 0 }).toArray();
    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories)),
        parameters: JSON.parse(JSON.stringify(parameters)),
        controls: JSON.parse(JSON.stringify(controls)),
      },
    };
  } catch (error) {
    console.log(error.message);
  }
}
