import React from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Description from '../../components/Description/Description';
import SelectInput from '../../components/Select/Select';
import Modal from '../../components/Modal/Modal';
import { useModal } from '../../hooks';
import InputError from '../../components/InputError/InputError';

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

const API_ROUTE_TO_SEND_EMAIL = '/api/sendgrid/send-email';

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
  const [errors, setErrors] = React.useState({
    name: false,
    lastName: false,
    phone: false,
    city: false,
    company: false,
    email: false,
    message: false,
  });

  const [isNewsletter, setIsNewsletter] = React.useState(true);
  const { isOpen, setIsOpen, message, setMessage } = useModal();

  const validateForm = () => {
    const isValid = true;
    const tempErrors = {
      name: false,
      lastName: false,
      phone: false,
      city: false,
      company: false,
      email: false,
      message: false,
    };
    if (
      formData.email.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      ) === null
    ) {
      tempErrors.email = true;
      isValid = false;
    }
    if (formData.name.match(/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{3,}$/) === null) {
      tempErrors.name = true;
      isValid = false;
    }
    if (formData.lastName.match(/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]{3,}$/) === null) {
      tempErrors.lastName = true;
      isValid = false;
    }
    if (formData.phone.match(/^(\+48)?[0-9]{9}$/) === null) {
      tempErrors.phone = true;
      isValid = false;
    }
    if (formData.city.match(/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ\s]{3,}$/) === null) {
      tempErrors.city = true;
      isValid = false;
    }
    if (formData.company.match(/^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ\s]{3,}$/) === null) {
      tempErrors.company = true;
      isValid = false;
    }
    if (formData.message.length <= 50) {
      tempErrors.message = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const isValidForm = validateForm();

    if (isValidForm) {
      const response = await fetch(API_ROUTE_TO_SEND_EMAIL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();
      handleNewsletter();
      setMessage(result.message);
      setIsOpen(true);
      clearForm();
    }
  };
  const handleInput = React.useCallback(
    (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    },
    [formData]
  );
  const handleNewsletter = () => setIsNewsletter(!isNewsletter);
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
  const reset = () => {
    clearForm();
    setIsNewsletter(true);
    setErrors({
      name: false,
      lastName: false,
      phone: false,
      city: false,
      company: false,
      email: false,
      message: false,
    });
  };
  return (
    <React.Fragment>
      <Modal isOpen={isOpen} toggleModal={() => setIsOpen(!isOpen)}>
        <Title content="Komunikat" variant="h4" />
        <Description classes="description_18">{message}</Description>
      </Modal>
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
          <form
            className={styles.contactFormSection__form}
            onSubmit={handleForm}
          >
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
              <InputError
                message="Imie ma tylko litery i minimum 3 znaki"
                isError={errors.name}
              />
              <Input
                type="text"
                fieldName="name"
                handleInput={handleInput}
                value={formData.name}
                placeholder="imię"
              />
            </div>
            <div className={styles.contactFormSection__lastName}>
              <InputError
                message="Nazwisko ma tylko litery i minimum 3 znaki"
                isError={errors.lastName}
              />
              <Input
                type="text"
                fieldName="lastName"
                handleInput={handleInput}
                value={formData.lastName}
                placeholder="nazwisko"
              />
            </div>
            <div className={styles.contactFormSection__phone}>
              <InputError
                message="Niepoprawny numer telefonu"
                isError={errors.phone}
              />
              <Input
                type="phone"
                fieldName="phone"
                handleInput={handleInput}
                value={formData.phone}
                placeholder="telefon np: +48413450561"
              />
            </div>
            <div className={styles.contactFormSection__city}>
              <InputError
                message="Miasto ma tylko litery, spację i minimum 3 znaki"
                isError={errors.city}
              />
              <Input
                type="text"
                fieldName="city"
                handleInput={handleInput}
                value={formData.city}
                placeholder="miasto"
              />
            </div>
            <div className={styles.contactFormSection__company}>
              <InputError
                message="Firma ma tylko litery, spację i minimum 3 znaki"
                isError={errors.company}
              />
              <Input
                type="text"
                fieldName="company"
                handleInput={handleInput}
                value={formData.company}
                placeholder="firma / instytucja"
              />
            </div>
            <div className={styles.contactFormSection__email}>
              <InputError
                message="Nie poprawny adres email"
                isError={errors.email}
              />
              <Input
                type="text"
                fieldName="email"
                handleInput={handleInput}
                value={formData.email}
                placeholder="email"
              />
            </div>
            <div className={styles.contactFormSection__message}>
              <InputError
                message="Wiadomość musi zawierać conajmniej 50 znaków ..."
                isError={errors.message}
              />
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
            <div className={styles.contactFormSection__actionButtons}>
              <Button
                classes="button_mr_2 button_no_wrap"
                label="wyślij wiadomość"
                type="submit"
              />
              <Button
                classes="button_dangerous"
                label="zresetuj"
                type="button"
                action={reset}
              />
            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}
export default ContactForm;
