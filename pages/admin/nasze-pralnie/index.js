import React from 'react';
import AdminLayout from '../../../components/Layout/AdminLayout';
import Title from '../../../components/Title/Title';
import Input from '../../../components/Input/Input';
import SelectInput from '../../../components/Select/Select';
import Button from '../../../components/Button/Button';
import styles from './index.module.css';

const product = ['', '', ''];
const models = ['', '', ''];

function OurLaundries() {
  const [formData, setFormData] = React.useState({
    title: '',
    desc: '',
    date: Date.now(),
    from: '',
    to: '',
    product: '',
    model: '',
    amount: '',
    image: '',
  });
  const handleForm = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    console.log(formData);
  });

  return (
    <div className={styles.ourLaundries}>
      <Title content="Dodaj pralnię" classes="title_display_h5" variant="h2" />
      <form className={styles.ourLaundries__form} onSubmit={handleForm}>
        <Input
          type="text"
          fieldName="title"
          placeholder="wpisz odbiorcę"
          value={formData.title}
          handleInput={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          classes="input_mb_1"
        />
        <textarea
          onChange={(e) =>
            setFormData({
              ...formData,
              desc: e.target.value,
            })
          }
          className={styles.ourLaundries__description}
          value={formData.desc}
          name="desc"
          rows="10"
          placeholder="Krótki opis wyposażenie"
        />
        <Input
          type="file"
          fieldName="image"
          placeholder="upload image"
          handleInput={(e) =>
            setFormData({ ...formData, image: e.target.files[0].name })
          }
          classes="input_mb_1"
        />
        <div>
          <Input
            type="date"
            fieldName="from"
            value={formData.from}
            handleInput={(e) =>
              setFormData({
                ...formData,
                from: e.target.value,
              })
            }
            classes="input_mb_1"
          />
          <Input
            type="date"
            fieldName="to"
            value={formData.to}
            handleInput={(e) =>
              setFormData({
                ...formData,
                to: e.target.value,
              })
            }
            classes="input_mb_1"
          />
        </div>
        <SelectInput
          options={[
            'pralnicowirówka',
            'suszarka bębnwoa',
            'wózek',
            'prasownica nieckowa',
            'prasownica walcowa',
          ]}
          action={(e) => setFormData({ ...formData, product: e.target.value })}
          name="product"
          selected={formData.product}
        />
        <SelectInput
          options={['FX-150', 'FX-180', 'FX-135', 'FX-280', 'FX-240']}
          action={(e) => setFormData({ ...formData, model: e.target.value })}
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
        <div className={styles.contactFormSection__actionButtons}>
          <Button
            classes="button_mr_2 button_no_wrap"
            label="dodaj"
            type="submit"
          />
          <Button classes="button_dangerous" label="zresetuj" type="button" />
        </div>
      </form>
    </div>
  );
}
OurLaundries.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
export default OurLaundries;
