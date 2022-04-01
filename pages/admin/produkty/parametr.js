import React from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import Input from '../../../components/Input/Input';
import InputError from '../../../components/InputError/InputError';
import Button from '../../../components/Button/Button';
import RequiredMarker from '../../../components/RequiredMarker/RequiredMarker';
import SelectInput from '../../../components/Select/Select';
import Modal from '../../../components/Modal/Modal';
import { useModal } from '../../../hooks';
import styles from './parametr.module.css';

const units = [
  '-',
  'kg',
  'mm',
  'litrów',
  'kW',
  'kWh',
  'obr./min.',
  'm3',
  'dm3',
  'dB(A)',
  'bar',
  'mbar',
  'kPa',
  'cal',
  'litrów / minutę',
  'litrów / sekundę',
  'gramów / minutę',
  'm3 / godzinę',
  'kg / godzinę',
  'metrów / minutę',
  '0C',
];

const API_ROUTE_ADD_PARAMETER = '/api/products/add-parameter';
function ParameterFrom() {
  const [formData, setFormData] = React.useState({
    name: '',
    unit: units[1],
  });
  const [errors, setErrors] = React.useState({ name: false });
  const { isOpen, setIsOpen, message, setMessage } = useModal(2000);

  const validateForm = () => {
    let isValid = true;
    const tempErrors = {
      name: false,
    };
    if (
      formData.name.match(/^[a-zA-Z0-9ąćęłńóśźżĄĘŁŃÓŚŹŻ\s\.()-]{5,}$/) === null
    ) {
      isValid = false;
      tempErrors.name = true;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };
  const handleForm = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await fetch(API_ROUTE_ADD_PARAMETER, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        setIsOpen(true);
        setMessage(result.message);
      } catch (error) {
        setMessage(error.message);
      } finally {
        resetForm();
      }
    }
  };
  const resetForm = () => {
    setFormData({
      name: '',
      unit: units[1],
    });
    setErrors({
      name: false,
    });
  };
  return (
    <React.Fragment>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)}>
        <Title content="Komunikat" variant="h4" classes="title_display_h5" />
        <Description classes="description_18">{message}</Description>
      </Modal>
      <div className={styles.parameterForm}>
        <Title
          content="Dodaj parametr"
          classes="title_display_h5 title_center title_mb_1"
          variant="h2"
        />
        <form className={styles.parameterForm__form} onSubmit={handleForm}>
          <div className={styles.parameterForm__inputWrapper}>
            <InputError
              message="Nazwa musi być ciągiem znaków o długości co najmniej 5 znaków"
              isError={errors.name}
              classes="inputError_top_minus_05"
            />
            <Input
              type="text"
              fieldName="name"
              placeholder="wpisz nazwę parametru"
              value={formData.name}
              handleInput={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              classes="input_mb_1"
            />

            <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
          </div>
          <div className={styles.parameterForm__inputWrapper}>
            <SelectInput
              selected={formData.unit}
              name="unit"
              options={units}
              action={(e) => setFormData({ ...formData, unit: e.target.value })}
            />
          </div>
          <div className={styles.parameterForm__actionButtons}>
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
      </div>
    </React.Fragment>
  );
}

ParameterFrom.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ParameterFrom;
