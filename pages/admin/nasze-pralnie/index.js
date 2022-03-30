import React from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import Title from '../../../components/Title/Title';
import Description from '../../../components/Description/Description';
import Input from '../../../components/Input/Input';
import SelectInput from '../../../components/Select/Select';
import Button from '../../../components/Button/Button';
import FileBase64 from 'react-file-base64';
import Modal from '../../../components/Modal/Modal';
import { useModal } from '../../../hooks';
import styles from './index.module.css';

const products = [
  'pralnicowirówka',
  'suszarka bębnwoa',
  'wózek',
  'prasownica nieckowa',
  'prasownica walcowa',
];
const models = ['FX-150', 'FX-180', 'FX-135', 'FX-280', 'FX-240'];
const API_ROUTE_TO_ADD_LAUNDRY = '/api/laundries/add';
function OurLaundries() {
  const { isOpen, setIsOpen, message, setMessage } = useModal(2000);
  const [equipmentAdded, setEquipmentAdded] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: '',
    desc: '',
    from: '',
    to: '',
    product: products[0],
    model: models[0],
    amount: 1,
    equipments: [],
    image: '',
  });
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

    const response = await fetch(API_ROUTE_TO_ADD_LAUNDRY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    setIsOpen(true);
    setMessage(result.message);
    resetForm();
  };
  const resetForm = () => {
    setFormData({
      title: '',
      desc: '',
      from: '',
      to: '',
      product: products[0],
      model: models[0],
      amount: 1,
      equipments: [],
      image: '',
    });
  };
  const handleEquipments = () => {
    const equipment = {
      product: formData.product,
      model: formData.model,
      amount: Number(formData.amount),
    };
    const equipments = [...formData.equipments, equipment];
    setFormData({ ...formData, equipments: equipments });
    setEquipmentAdded(true);
    setFormData({
      ...formData,
      equipments: [...equipments],
      product: products[0],
      model: models[0],
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
          classes="title_display_h5"
          variant="h2"
        />
        <form className={styles.ourLaundries__form} onSubmit={handleForm}>
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
          {/** potential component */}
          <textarea
            className={styles.ourLaundries__description}
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
            value={formData.desc}
            name="desc"
            rows="10"
            placeholder="Krótki opis dostarczonego wyposażenia"
          />
          {/** end potential component */}
          {/** potential component */}
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
          />
          {/* <input
          className={styles.ourLaundries__fileInput}
          type="file"
          ref={selectedFile}
        /> */}
          {/** end potential component */}
          <Title
            content="Okres dostaw"
            variant="h3"
            classes="title_display_h6 title_uppercase"
          />
          <div className={styles.ourLaundries__dates}>
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
              options={products}
              action={(e) =>
                setFormData({ ...formData, product: e.target.value })
              }
              name="product"
              selected={formData.product}
            />
            <SelectInput
              options={models}
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
          <div className={styles.contactFormSection__actionButtons}>
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
