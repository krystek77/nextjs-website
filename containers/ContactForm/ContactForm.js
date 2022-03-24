import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import SelectInput from '../../components/Select/Select';

import styles from './ContactForm.module.css';

const reasons = [
  'oferta na wyposażenie pralni przemysłowej',
  'części zamienne',
  'wsparcie techniczne',
  'zlecenie serwisu',
  'gwarancja',
  'dokumnety urządzeń',
  'ogólne',
  'księgowość',
  'współpraca',
];
const markets = [
  'pralnie komercyjne',
  'domy opieki i domy pomocy społecznej',
  'przedszkola i żłobki',
  'hotele, motele i pensjonaty',
  'kluby sportowe',
  'SPA & Wellness',
  'szpitale i kliniki',
  'kempingi, ośrodki wczasowe',
  'apartamenty, akademiki',
  'pralnie i urządzenia samoobslugowe',
  'zarządzanie obiektami, czyszczenie i sprzątanie',
  'służby cywilne np. straż pożarna',
  'marynarka wojenna - pralnice na statek',
  'stadniny koni, schroniska dla zwierząt',
  'przemysł spozywczy i przetworstwo',
  'firmy, zakłady pracy',
  'pralnia Softwash',
  'inne',
];

function ContactForm() {
  const [formData, setFormData] = React.useState({
    reason: reasons[0],
    market: markets[0],
    name: '',
    lastName: '',
    phone: '',
    city: '',
    company: '',
    email: '',
    message: '',
  });
  const [isNewsletter, setIsNewsletter] = React.useState(true);

  const handleForm = (e) => {
    e.preventDefault();
    handleNewsletter(e);

    //send data
    clearForm();
  };
  const handleInput = React.useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );
  const handleNewsletter = (e) => setIsNewsletter(!isNewsletter);
  const clearForm = () => {
    setFormData({
      reason: reasons[0],
      market: markets[0],
      name: '',
      lastName: '',
      phone: '',
      city: '',
      company: '',
      email: '',
      message: '',
    });
    setIsNewsletter(true);
  };

  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactFormSection__container}>
        <header className={styles.contactFormSection__header}>
          <Subtitle content="Napisz do nas" />
          <Title content="Formularz kontaktowy" />
          <Description classes="description_maxWidth_960 description_18">
            Masz pytania dotyczące przemysłowych urządzeń pralniczych marki{' '}
            <strong>Pralma</strong> lub <strong>Primus</strong>? Aby uzyskać
            pomoc techniczną, rozwiązć problemy z eksploatcją, konserwacją
            urządzeń, zapytać o ofertę na odpowiednie do Twoich potrzeb
            wyposażenie pralnicze lub masz inne pytania dotyczące naszej
            współpracy lub dokumnetów, wypełnij i prześlij poniższy formularz.
          </Description>
        </header>
        <form className={styles.contactFormSection__form} onSubmit={handleForm}>
          <div className={styles.contactFormSection__reason}>
            <SelectInput
              options={reasons}
              action={handleInput}
              name="reason"
              selected={formData.reason}
            />
          </div>
          <div className={styles.contactFormSection__market}>
            <SelectInput
              options={markets}
              action={handleInput}
              name="market"
              selected={formData.market}
            />
          </div>
          <div className={styles.contactFormSection__name}>
            <Input
              type="text"
              fieldName="name"
              handleInput={handleInput}
              value={formData.name}
              placeholder="imię"
            />
          </div>
          <div className={styles.contactFormSection__lastName}>
            <Input
              type="text"
              fieldName="lastName"
              handleInput={handleInput}
              value={formData.lastName}
              placeholder="nazwisko"
            />
          </div>
          <div className={styles.contactFormSection__phone}>
            <Input
              type="phone"
              fieldName="phone"
              handleInput={handleInput}
              value={formData.phone}
              placeholder="telefon"
            />
          </div>
          <div className={styles.contactFormSection__city}>
            <Input
              type="text"
              fieldName="city"
              handleInput={handleInput}
              value={formData.city}
              placeholder="miasto"
            />
          </div>
          <div className={styles.contactFormSection__company}>
            <Input
              type="text"
              fieldName="company"
              handleInput={handleInput}
              value={formData.company}
              placeholder="firma / instytucja"
            />
          </div>
          <div className={styles.contactFormSection__email}>
            <Input
              type="text"
              fieldName="email"
              handleInput={handleInput}
              value={formData.email}
              placeholder="email"
            />
          </div>
          <div className={styles.contactFormSection__message}>
            <textarea
              rows="10"
              name="message"
              onChange={handleInput}
              value={formData.message}
              placeholder="wpisz treść..."
            />
          </div>
          <div className={styles.contactFormSection__newsletter}>
            <label
              className={styles.contactFormSection__label}
              htmlFor="newsletter"
            >
              zapisz się na newsletter
            </label>
            <input
              className={styles.contactFormSection__input}
              name="newsletter"
              id="newsletter"
              type="checkbox"
              onChange={handleNewsletter}
              checked={isNewsletter}
            />
          </div>
          <Button classes="button_center" label="wyślij" type="submit" />
        </form>
      </div>
    </section>
  );
}
export default ContactForm;
