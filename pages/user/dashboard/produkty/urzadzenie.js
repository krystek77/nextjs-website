import React from 'react';
import AdminLayout from 'components/Layout/AdminLayout';
import Title from 'components/Title/Title';
import SelectInput from 'components/Select/Select';
import Input from 'components/Input/Input';
import InputError from 'components/InputError/InputError';
import RequiredMarker from 'components/RequiredMarker/RequiredMarker';
import TextareaInput from 'components/InputTextarea/InputTextarea';
import InputFileBase64 from 'components/InpufileBase64/InputFileBase64';
import Button from 'components/Button/Button';
import styles from './urzadzenie.module.css';
/*
 * route: http://localhost:3000/user/dashboard/produkty/urzadzenie
 */

const ENDPOINT_TO_ADD_MODEL = '/api/dashboard/products/add-equipment';
function AddEquipmentForm(props) {
  const { categories, parameters, controls } = props;

  const [product, setProduct] = React.useState({
    model: '',
    label: '',
    title: '',
    description: '',
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
  const [categoryName, setCategoryName] = React.useState(categories[0]?.name);
  const [subcategoryName, setSubcategoryName] = React.useState(
    categories[0]?.subcategories[0]?.name
  );
  const [typeName, setTypeName] = React.useState(
    categories[0]?.subcategories[0]?.types[0]?.name
  );
  const [typeID, setTypeID] = React.useState(
    categories[0]?.subcategories[0]?.types[0]?._id
  );

  const [parameter, setParameter] = React.useState({
    name: parameters[0]?.name,
    unit: parameters[0]?.unit,
    value: '',
  });
  // add features
  const [features, setFeatures] = React.useState('');
  // add control
  const [control, setControl] = React.useState(controls[0]?.name);
  const addControl = () => {
    const isExistsControl = product.controls.find(
      (item) => item?.name === control
    );
    if (!isExistsControl) {
      const newControl = controls.find((item) => item.name === control);
      setProduct({ ...product, controls: [...product.controls, newControl] });
      setAdded({ ...added, control: true });
      setTimeout(function () {
        setAdded({ ...added, control: false });
      }, 2000);
      resetControl();
    } else {
      setExists({ ...exists, control: true });
      setTimeout(function () {
        setExists({ ...exists, control: false });
      }, 2000);
    }
  };
  const resetControl = () => setControl(controls[0]?.name);
  //add parameter
  const addParameter = () => {
    const isAddedAlready = product.parameters.find(
      (item) => item.name === parameter.name
    );
    if (!isAddedAlready) {
      setProduct({
        ...product,
        parameters: [...product.parameters, parameter],
      });
      setAdded({ ...added, parameter: true });
      setTimeout(function () {
        setAdded({ ...added, parameter: false });
      }, 2000);
      setParameter({ ...parameter, value: '' });
    } else {
      setExists({ ...exists, parameter: true });
      setTimeout(function () {
        setExists({ ...exists, parameter: false });
      }, 2000);
    }
  };
  const resetParameter = () =>
    setParameter({
      name: parameters[0]?.name,
      unit: parameters[0]?.unit,
      value: '',
    });
  const resetFeatures = () => setFeatures('');
  const handleForm = async (e) => {
    e.preventDefault();
    const featuresList = features.split('\n').filter((item) => item !== '');
    const newProduct = {
      typeID,
      model: product.model,
      label: product.label,
      title: product.title,
      description: product.description,
      features: featuresList,
      controls: product.controls,
      parameters: product.parameters,
      slider: product.slider,
      leaflets: [],
      isVertical: product.isVertical,
    };
    console.log(newProduct);
    try {
      const response = await fetch(ENDPOINT_TO_ADD_MODEL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      const result = await response.json();
      console.log(result.message);
      resetForm();
    } catch (error) {
      console.log(error.message);
      console.log(result.message);
    }
  };
  const resetForm = () => {
    setCategoryName(categories[0]?.name);
    setSubcategoryName(categories[0]?.subcategories[0]?.name);
    setTypeName(categories[0]?.subcategories[0]?.types[0]?.name);
    setTypeID(categories[0]?.subcategories[0]?.types[0]?._id);
    resetParameter();
    resetControl();
    resetFeatures();
    setProduct({
      model: '',
      label: '',
      title: '',
      description: '',
      features: [],
      controls: [],
      parameters: [],
      slider: [],
      leaflets: [],
      isVertical: false,
    });
  };

  return (
    <React.Fragment>
      <div className={styles.addEquipmentForm}>
        <Title
          content="Dodaj urządzenie"
          classes="title_display_h5 title_center title_mb_1"
          variant="h2"
        />
      </div>
      <form className={styles.addEquipmentForm__form} onSubmit={handleForm}>
        {/** ---------------------------------------------------------------- */}
        <div className={styles.addEquipmentForm__inputsGroup}>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Kategoria"
              variant="h3"
              classes="title_display_h6 title_uppercase  title_mb_05"
            />
            <SelectInput
              selected={categoryName}
              name="categoryName"
              options={categories.map((item) => item.name)}
              action={(e) => {
                setCategoryName(e.target.value);
                setSubcategoryName(
                  categories.find((item) => item.name === e.target.value)
                    ?.subcategories[0]?.name
                );
                setTypeName(
                  categories.find((item) => item.name === e.target.value)
                    ?.subcategories[0]?.types[0]?.name
                );
                setTypeID(
                  categories.find((item) => item.name === e.target.value)
                    ?.subcategories[0]?.types[0]?._id
                );
              }}
            />
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Podkategoria"
              variant="h3"
              classes="title_display_h6 title_uppercase  title_mb_05"
            />
            <SelectInput
              selected={subcategoryName}
              name="subcategoryName"
              options={categories
                .find((item) => item.name === categoryName)
                ?.subcategories.map((item) => item.name)}
              action={(e) => {
                setSubcategoryName(e.target.value);
                setTypeName(
                  categories
                    .find((item) => item.name === categoryName)
                    ?.subcategories.find((item) => item.name === e.target.value)
                    ?.types[0]?.name
                );
                setTypeID(
                  categories
                    .find((item) => item.name === categoryName)
                    ?.subcategories.find((item) => item.name === e.target.value)
                    .types[0]?._id
                );
              }}
            />
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Oznaczenie serii"
              variant="h3"
              classes="title_display_h6 title_uppercase  title_mb_05"
            />
            <SelectInput
              selected={typeName}
              name="typeName"
              options={categories
                .find((item) => item.name === categoryName)
                ?.subcategories.find((item) => item.name === subcategoryName)
                ?.types.map((item) => item.name)}
              action={(e) => {
                setTypeName(e.target.value);
                setTypeID(
                  categories
                    .find((item) => item.name === categoryName)
                    ?.subcategories.find(
                      (item) => item.name === subcategoryName
                    )
                    .types.find((item) => item.name === e.target.value)?._id
                );
              }}
            />
          </div>
          {/** parametr */}
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Dodaj parametr"
              variant="h3"
              classes="title_display_h6 title_uppercase  title_mb_05"
            />
            <div className={styles.addEquipmentForm__parameter}>
              <SelectInput
                selected={parameter?.name}
                name="parameter"
                options={parameters.map((item) => item.name)}
                action={(e) =>
                  setParameter({
                    ...parameter,
                    name: e.target.value,
                    unit: parameters.find(
                      (item) => item.name === e.target.value
                    )?.unit,
                  })
                }
              />
              <div className={styles.addEquipmentForm__inputWrapper}>
                <Input
                  type="text"
                  fieldName="parameter"
                  placeholder="Wpisz wartość parametru"
                  value={parameter.value}
                  handleInput={(e) =>
                    setParameter({ ...parameter, value: e.target.value })
                  }
                  classes="input_mb_1"
                />
                <InputError isError={true} message="Wartość jest wymagana" />
                <RequiredMarker classes="requiredMarker_bottom_5_5" />

                <Button
                  label="dodaj parametr"
                  classes="button_small button_no_wrap button_mb_1 button_to_right"
                  action={addParameter}
                >
                  +
                </Button>
                {added.parameter && !exists.parameter && (
                  <span
                    className={`${styles.addEquipmentForm__Indicator} ${styles.addEquipmentForm__Indicator_bottom_3_5}`}
                  >
                    Parametr dodany
                  </span>
                )}
                {exists.parameter && (
                  <span
                    className={`${styles.addEquipmentForm__Indicator} ${styles.addEquipmentForm__Indicator_bottom_3_5}`}
                  >
                    Parametr o tej nazwie już został dodany
                  </span>
                )}
                <div className={styles.addEquipmentForm__valueContainer}>
                  <span className={styles.addEquipmentForm__value}>
                    {parameter.value ? parameter.value : '-brak wartości-'}
                  </span>
                  <span className={styles.addEquipmentForm__unit}>{`${
                    parameter.unit !== '' ? `[${parameter.unit}]` : ''
                  }`}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.addEquipmentForm__inputWrapper} ${styles.addEquipmentForm__inputWrapper_checkbox}`}
          >
            <input
              id="vertical"
              type="checkbox"
              onChange={(e) =>
                setProduct({ ...product, isVertical: !product.isVertical })
              }
              checked={product.isVertical}
            />
            <label htmlFor="vertical">Układ pionowy</label>
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Zdjęcia"
              variant="h3"
              classes="title_display_h6 title_uppercase  title_mb_05"
            />
            <InputFileBase64
              multiple={true}
              action={(files) => {
                const base64 = files.map(({ base64 }) => base64);
                setProduct({
                  ...product,
                  slider: [...product.slider, ...base64],
                });
              }}
            />
          </div>
        </div>
        {/** ---------------------------------------------------------------- */}
        <div className={styles.addEquipmentForm__inputsGroup}>
          {/** model container */}
          <div className={styles.addEquipmentForm__model}>
            {/** model */}
            <div className={styles.addEquipmentForm__inputWrapper}>
              <Title
                content="Model"
                variant="h3"
                classes="title_display_h6 title_uppercase title_mb_0"
              />
              <Input
                type="text"
                fieldName="model"
                placeholder="Oznaczenie modelu: np. Pralma-16F, FX-105 itp."
                value={product.model}
                handleInput={(e) =>
                  setProduct({ ...product, model: e.target.value })
                }
                classes="input_mb_1"
              />
              <InputError
                isError={true}
                message="Model jest wymagany"
                classes="inputError_to_right inputError_top_minus_05"
              />
              <RequiredMarker classes="requiredMarker_bottom_minus_05" />
            </div>
            {/** label */}
            <div className={styles.addEquipmentForm__inputWrapper}>
              <Title
                content="Etykieta"
                variant="h3"
                classes="title_display_h6 title_uppercase title_mb_0"
              />
              <Input
                type="text"
                fieldName="label"
                placeholder="Wpisz etykietę produktu: np. załadunek 16 kg"
                value={product.label}
                handleInput={(e) =>
                  setProduct({ ...product, label: e.target.value })
                }
                classes="input_mb_1"
              />
              <InputError
                isError={true}
                message="Etykieta jest wymagana"
                classes="inputError_to_right inputError_top_minus_05"
              />
              <RequiredMarker classes="requiredMarker_bottom_minus_05" />
            </div>
          </div>
          {/** title */}
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Tytuł"
              variant="h3"
              classes="title_display_h6 title_uppercase title_mb_0"
            />
            <Input
              type="text"
              fieldName="title"
              placeholder="Tytuł produktu: np. Suszarka bębnowa, typ TX-9"
              value={product.title}
              handleInput={(e) =>
                setProduct({ ...product, title: e.target.value })
              }
              classes="input_mb_1"
            />
            <InputError
              isError={true}
              message="Tytuł jest wymagana"
              classes="inputError_to_right inputError_top_minus_05"
            />
            <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
          </div>
          {/**  end title */}
          {/** control */}
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Dodaj sterownik"
              variant="h3"
              classes="title_display_h6 title_uppercase title_mb_05 title_pt_1"
            />
            <SelectInput
              selected={control}
              name="control"
              options={controls.map((item) => item.name)}
              action={(e) => setControl(e.target.value)}
            />
            <Button
              label="dodaj sterownik"
              classes="button_small button_no_wrap button_mb_1 button_to_right"
              action={addControl}
            >
              +
            </Button>
            {added.control && !exists.control && (
              <span className={styles.addEquipmentForm__Indicator}>
                Sterownik dodany
              </span>
            )}
            {exists.control && (
              <span className={styles.addEquipmentForm__Indicator}>
                Ten sterownik został już dodany
              </span>
            )}
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Opis modelu"
              variant="h3"
              classes="title_display_h6 title_uppercase title_mb_05"
            />
            <TextareaInput
              placeholder="Dodaj krótki opis modelu"
              action={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              rows={5}
              classes=""
              name="description"
              value={product.description}
            />
          </div>
          <div className={styles.addEquipmentForm__inputWrapper}>
            <Title
              content="Cechy modelu"
              variant="h3"
              classes="title_display_h6 title_uppercase title_mb_05"
            />
            <TextareaInput
              placeholder="Lista cech"
              action={(e) => setFeatures(e.target.value)}
              rows={5}
              classes=""
              name="features"
              value={features}
            />
          </div>
        </div>
        {/** ---------------------------------------------------------------- */}
        <div className={styles.addEquipmentForm__actionButtons}>
          <Button
            classes="button_mr_2 button_no_wrap"
            label="dodaj"
            type="submit"
          />
          <Button
            classes="button_dangerous"
            label="zresetuj"
            type="button"
            action={resetForm}
          />
        </div>
      </form>
    </React.Fragment>
  );
}
AddEquipmentForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default AddEquipmentForm;

import { connectMongoDB } from 'utils/database';
export async function getStaticProps() {
  const { database: db } = await connectMongoDB();
  const categoriesCollection = db.collection('categories');
  const parametersCollection = db.collection('parameters');
  const controlsCollection = db.collection('controls');
  try {
    const categories = await categoriesCollection
      .aggregate([
        {
          $lookup: {
            from: 'subcategories',
            localField: '_id',
            foreignField: 'categoryID',
            as: 'subcategories',
            pipeline: [
              {
                $lookup: {
                  from: 'types',
                  localField: '_id',
                  foreignField: 'subCategoryID',
                  as: 'types',
                },
              },
              { $project: { name: 1, _id: 0, types: 1 } },
            ],
          },
        },
        { $project: { name: 1, _id: 0, subcategories: 1 } },
      ])
      .toArray();
    const parameters = await parametersCollection
      .find({})
      .sort({ name: 1 })
      .project({ _id: 0 })
      .toArray();
    const controls = await controlsCollection
      .find({})
      .sort({ name: 1 })
      .project({ _id: 0 })
      .toArray();
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
