import React from 'react';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import Title from '../../../../components/Title/Title';
import InputError from 'components/InputError/InputError';
import RequiredMarker from 'components/RequiredMarker/RequiredMarker';
import Input from 'components/Input/Input';
import InputFileBase64 from 'components/InpufileBase64/InputFileBase64';
import Button from 'components/Button/Button';
import styles from './sterownik.module.css';
import List from 'components/List/List';

function ControlForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    image: '',
    list: [],
  });
  const [listItem, setListItem] = React.useState('');
  const [featureAdded, setFeatureAdded] = React.useState(false);
  const [errors, setErrors] = React.useState({
    name: false,
    image: false,
    listItem: false,
    list: false,
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  const resetForm = (e) => {
    setFormData({ name: '', image: '', list: [] });
    setListItem('');
    setErrors({ name: false, image: false, list: false, listItem: false });
  };

  React.useEffect(() => {
    const timer = setTimeout(function () {
      setFeatureAdded(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [featureAdded]);

  return (
    <React.Fragment>
      <div className={styles.controlForm}>
        <Title
          content="Dodaj sterownik"
          classes="title_display_h5 title_center title_mb_3"
          variant="h2"
        />
        <form className={styles.controlForm__form} onSubmit={handleForm}>
          <div className={styles.controlForm__inputWrapper}>
            <InputError
              message="Niepoprawna nazwa sterownika"
              isError={errors.name}
              classes="inputError_top_minus_05"
            />
            <Input
              type="text"
              fieldName="name"
              placeholder="nazwa sterownika"
              value={formData.name}
              handleInput={(e) =>
                setFormData({
                  ...formData,
                  list: [...formData.list],
                  name: e.target.value,
                })
              }
              classes="input_mb_1"
            />
            <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
          </div>
          <div className={styles.controlForm__inputWrapper}>
            <InputError
              message="Niepoprawna cecha"
              isError={errors.listItem}
              classes="inputError_top_minus_05"
            />
            <Input
              type="text"
              fieldName="listItem"
              placeholder="cecha sterownika"
              value={listItem}
              handleInput={(e) => setListItem(e.target.value)}
              classes="input_mb_1"
            />
            <RequiredMarker classes="requiredMarker_bottom_1_5" />
            <Button
              type="button"
              classes="button_small button_no_wrap button_mb_1 button_to_right"
              label="dodaj cechę"
              action={() => {
                setFormData({
                  ...formData,
                  list: [...formData.list, listItem],
                });
                setListItem('');
                setFeatureAdded(true);
              }}
            >
              +
            </Button>
            {featureAdded && (
              <span className={styles.controlForm__featureAddedIndicator}>
                Cecha dodana
              </span>
            )}
          </div>
          <InputFileBase64
            action={({ base64 }) =>
              setFormData({
                ...formData,
                list: [...formData.list],
                image: base64,
              })
            }
          >
            <InputError
              message="Zdjęcie musi być dodane"
              isError={errors.image}
              classes="inputError_top_minus_1_5"
            />
            <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
          </InputFileBase64>
          <div className={styles.controlForm__actionButtons}>
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
        {/** form legend */}
        {formData.list.length ? (
          <div className={styles.controlForm__legend}>
            <Title
              content="Dodane cechy"
              classes="title_display_h6 title_mb_0 title_uppercase"
              variant="h2"
            />
            <List items={formData.list} classes="list_mt_1" />
          </div>
        ) : null}
      </div>
    </React.Fragment>
  );
}

ControlForm.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ControlForm;
