import React from 'react';

import InputFileBase64 from '../../../../components/InpufileBase64/InputFileBase64';
import TextareaInput from '../../../../components/InputTextarea/InputTextarea';
import AdminLayout from '../../../../components/Layout/AdminLayout';
import Title from '../../../../components/Title/Title';
import Description from '../../../../components/Description/Description';
import Input from '../../../../components/Input/Input';
import SelectInput from '../../../../components/Select/Select';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import InputError from '../../../../components/InputError/InputError';
import RequiredMarker from '../../../../components/RequiredMarker/RequiredMarker';

import { equipmenst as select } from '../../../../constants/equipments';
import jwt from 'jsonwebtoken';

import { useModal } from '../../../../hooks';
import styles from './index.module.css';

const API_ROUTE_TO_ADD_LAUNDRY = '/api/dashboard/laundries/add';
function OurLaundries() {
  const { isOpen, setIsOpen, message, setMessage } = useModal(2000);
  const [equipmentAdded, setEquipmentAdded] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: '',
    desc: '',
    from: '',
    to: '',
    product: select[0].product,
    model: select[0].models[0],
    amount: 1,
    equipments: [],
    image: '',
  });
  const [errors, setErrors] = React.useState({
    title: false,
    description: false,
    selectedFileBase64: false,
  });
  const validateForm = () => {
    let isValid = true;
    const tempErrors = {
      title: false,
      description: false,
      selectedFileBase64: false,
    };

    if (formData.title.length <= 2) {
      tempErrors.title = true;
      isValid = false;
    }
    if (formData.desc.length <= 50) {
      tempErrors.description = true;
      isValid = false;
    }
    if (formData.image === '') {
      tempErrors.selectedFileBase64 = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };
  const handleForm = async (e) => {
    e.preventDefault();

    const data = {
      title: formData.title,
      desc: formData.desc,
      createdAt: new Date().toLocaleDateString('pl-PL'),
      realization: {
        from: formData.from,
        to: formData.to,
      },
      equipments: formData.equipments,
      image: formData.image,
    };
    const isValidForm = validateForm();
    if (isValidForm) {
      const response = await fetch(API_ROUTE_TO_ADD_LAUNDRY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setIsOpen(true);
      setMessage(result.message);
      resetForm();
    }
  };
  const resetForm = () => {
    setFormData({
      title: '',
      desc: '',
      from: '',
      to: '',
      product: select[0].product,
      model: select[0].models[0],
      amount: 1,
      equipments: [],
      image: '',
    });
    setErrors({
      title: false,
      description: false,
      selectedFileBase64: false,
    });
  };
  const handleEquipments = () => {
    const equipment = {
      product: formData.product,
      model: formData.model,
      amount: Number(formData.amount),
    };
    const equipments = [...formData.equipments, equipment];
    setEquipmentAdded(true);
    setFormData({
      ...formData,
      equipments: [...equipments],
      amount: 1,
    });
  };
  React.useEffect(() => {
    const timer = setTimeout(function () {
      setEquipmentAdded(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [equipmentAdded]);

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)}>
        <Title content="Komunikat" variant="h4" classes="title_display_h5" />
        <Description classes="description_18">{message}</Description>
      </Modal>
      <div className={styles.ourLaundries}>
        <Title
          content="Dodaj zrealizowane wyposażenie pralni"
          classes="title_display_h5 title_center title_mb_3"
          variant="h2"
        />
        <form className={styles.ourLaundries__form} onSubmit={handleForm}>
          <div className={styles.ourLaundries__inputGroup}>
            <div className={styles.ourLaundries__inputWrapper}>
              <Input
                type="text"
                fieldName="title"
                placeholder="wpisz odbiorcę wyposażenia np.: Dom Pomocy Społecznej w Piłce Zamyślin"
                value={formData.title}
                handleInput={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                classes="input_mb_1"
              />
              <InputError
                isError={errors.title}
                message="Tytuł musi mieć co najmniej 3 znaki"
              />
              <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
            </div>
            <TextareaInput
              action={(e) => setFormData({ ...formData, desc: e.target.value })}
              classes="textareaWrapper_mb_4"
              value={formData.desc}
              name="desc"
              placeholder="Krótki opis dostarczonego wyposażenia"
            >
              <InputError
                isError={errors.description}
                message="Opis musi zawierać conajmniej 50 znaków ..."
                classes="inputError_top_minus_1_5"
              />
              <RequiredMarker />
            </TextareaInput>
            <InputFileBase64
              action={({ base64 }) =>
                setFormData({ ...formData, image: base64 })
              }
            >
              <InputError
                isError={errors.selectedFileBase64}
                message="Zdjęcie musi zostać dodane"
                classes="inputError_top_minus_1_5"
              />
              <RequiredMarker classes="requiredMarker_bottom_minus_1_5" />
            </InputFileBase64>
          </div>
          <div className={styles.ourLaundries__inputGroup}>
            <Title
              content="Okres dostaw"
              variant="h3"
              classes="title_display_h6 title_uppercase"
            />
            <div className={styles.ourLaundries__dates}>
              <span className={styles.ourLaundries__label}>od:</span>
              <span className={styles.ourLaundries__label}>do:</span>
              <Input
                type="date"
                fieldName="from"
                value={formData.from}
                handleInput={(e) =>
                  setFormData({ ...formData, from: e.target.value })
                }
                classes="input_mb_1"
              />
              <Input
                type="date"
                fieldName="to"
                value={formData.to}
                handleInput={(e) =>
                  setFormData({ ...formData, to: e.target.value })
                }
                classes="input_mb_1"
              />
            </div>
            {/** equipments */}
            <Title
              content="Wyposażenie"
              variant="h3"
              classes="title_display_h6 title_uppercase"
            />
            <div className={styles.ourLaundries__equipmentsSection}>
              <SelectInput
                options={select.map((item) => item.product)}
                action={(e) =>
                  setFormData({ ...formData, product: e.target.value })
                }
                name="product"
                selected={formData.product}
              />
              <SelectInput
                options={
                  select.find((item) => item.product === formData.product)
                    ?.models
                }
                action={(e) =>
                  setFormData({ ...formData, model: e.target.value })
                }
                name="model"
                selected={formData.model}
              />
              <Input
                type="number"
                fieldName="amount"
                value={formData.amount}
                placeholder="ilość"
                handleInput={(e) =>
                  setFormData({ ...formData, amount: e.target.value })
                }
                classes="input_mb_1"
              />
              <Button
                label="dodaj wyposażenie"
                classes="button_small button_no_wrap button_mb_1 button_to_right"
                action={handleEquipments}
              >
                +
              </Button>
              {equipmentAdded && (
                <span className={styles.ourLaundries_equipmentAddedIndicator}>
                  Wyposażenie dodane
                </span>
              )}
            </div>
            {/** equipments */}
          </div>
          <div className={styles.ourLaundries__actionButtons}>
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
OurLaundries.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default OurLaundries;
