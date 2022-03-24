import styles from './ContactData.module.css';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import Image from 'next/image';
import ContactItem from '../../components/ContactItem/ContactItem';

function ContactData() {
  return (
    <section className={styles.contactData}>
      <header className={styles.contactData__header}>
        <Subtitle
          content="Napisz do nas, zadzwoń lub odwiedź naszą firmę - ZAPRASZAMY"
          classes="subtitle_max_width_480"
        />
        <Title content="Dane kontaktowe" />
      </header>
      <div className={styles.contactData__container}>
        <article className={styles.contactData__item}>
          <header className={styles.contactData__title}>
            <Title
              content="Dział handlowy"
              variant="h2"
              classes="title_display_h5 title_mb_0"
            />
            <div className={styles.contactData__image}>
              <Image
                src="/assets/icons/people.svg"
                alt="dział handlowy"
                width="48"
                height="33"
              />
            </div>
          </header>
          <div className={styles.contactData__content}>
            <ContactItem
              to="tel:413457408"
              label="+48 41 345 74 08"
              src="contact_phone"
              alt="telefon do działu handlowego pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:413450561"
              label="+48 41 345 05 61"
              src="contact_fax"
              alt="telefon fax do działu handlowego pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:602191607"
              label="+48 602 191 607"
              src="contact_mobile"
              alt="telefon fax do działu handlowego pralma"
              width="16"
              height="24"
              classes="contactItem_flex_row"
            />
          </div>
          <footer className={styles.contactData__footer}>
            <ContactItem
              to="mailto:k.wrona@pralma.pl"
              label="k.wrona@pralma.pl"
              src="contact_email_primary"
              alt="email do działu handlowego pralma"
              width="32"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="mailto:postmaster@pralma.pl"
              label="postmaster@pralma.pl"
              src="contact_email_primary"
              alt="email do działu handlowego pralma"
              width="32"
              height="22"
              classes="contactItem_flex_row"
            />
          </footer>
        </article>
        <article className={styles.contactData__item}>
          <header className={styles.contactData__title}>
            <Title
              content="Dział handlowy"
              variant="h2"
              classes="title_display_h5 title_mb_0"
            />
            <div className={styles.contactData__image}>
              <Image
                src="/assets/icons/people.svg"
                alt="dział handlowy"
                width="48"
                height="33"
              />
            </div>
          </header>
          <div className={styles.contactData__content}>
            <ContactItem
              to="tel:413453856"
              label="+48 41 345 38 56"
              src="contact_phone"
              alt="telefon do działu handlowego pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:413450561"
              label="+48 41 345 05 61"
              src="contact_fax"
              alt="telefon fax do działu handlowego pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:413683549"
              label="+48 41 368 35 49"
              src="contact_phone"
              alt="telefon fax do działu handlowego pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
          </div>
          <footer className={styles.contactData__footer}>
            <ContactItem
              to="mailto:biuro@pralma.pl"
              label="biuro@pralma.pl"
              src="contact_email_primary"
              alt="email do działu handlowego pralma"
              width="32"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="mailto:postmaster@pralma.pl"
              label="postmaster@pralma.pl"
              src="contact_email_primary"
              alt="email do działu handlowego pralma"
              width="32"
              height="22"
              classes="contactItem_flex_row"
            />
          </footer>
        </article>
        <article className={styles.contactData__item}>
          <header className={styles.contactData__title}>
            <Title
              content="Dział serwisu"
              variant="h2"
              classes="title_display_h5 title_mb_0"
            />
            <div className={styles.contactData__image}>
              <Image
                src="/assets/icons/contact_service.svg"
                alt="dział serwisu"
                width="48"
                height="40"
              />
            </div>
          </header>
          <div className={styles.contactData__content}>
            <ContactItem
              to="tel:413450561"
              label="+48 41 345 05 61"
              src="contact_fax"
              alt="telefon do działu serwisu pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:666350354"
              label="+48 666 350 354"
              src="contact_mobile"
              alt="telefon fax do działu serwisu pralma"
              width="16"
              height="24"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:664962002"
              label="+48 664 962 002"
              src="contact_mobile"
              alt="telefon fax do działu serwisu pralma"
              width="16"
              height="24"
              classes="contactItem_flex_row"
            />
          </div>
          <footer className={styles.contactData__footer}>
            <ContactItem
              to="mailto:serwis@pralma.pl"
              label="serwis@pralma.pl"
              src="contact_email_primary"
              alt="email do działu serwisu pralma"
              width="32"
              height="22"
              classes="contactItem_flex_row"
            />
          </footer>
        </article>
        <article className={styles.contactData__item}>
          <header className={styles.contactData__title}>
            <Title
              content="Biuro / księgowość"
              variant="h2"
              classes="title_display_h5 title_mb_0"
            />
            <div className={styles.contactData__image}>
              <Image
                src="/assets/icons/documents.svg"
                alt="biuro,księgowość"
                width="48"
                height="45"
              />
            </div>
          </header>
          <div className={styles.contactData__content}>
            <ContactItem
              to="tel:413450561"
              label="+48 41 345 05 61"
              src="contact_fax"
              alt="telefon do biuro i księgowości pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:413457408"
              label="+48 41 345 74 08"
              src="contact_phone"
              alt="telefon do biuro i księgowości pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:413453856"
              label="+48 41 345 38 56"
              src="contact_phone"
              alt="telefon do biuro i księgowości pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
            <ContactItem
              to="tel:413683549"
              label="+48 41 368 35 49"
              src="contact_phone"
              alt="telefon do biuro i księgowości pralma"
              width="24"
              height="22"
              classes="contactItem_flex_row"
            />
          </div>
          <footer className={styles.contactData__footer}>
            <ContactItem
              to="mailto:postmaster@pralma.pl"
              label="postmaster@pralma.pl"
              src="contact_email_primary"
              alt="email do biura i księgowości"
              width="32"
              height="22"
              classes="contactItem_flex_row"
            />
          </footer>
        </article>
      </div>
      <div className={styles.contactData__company}>
        <p className={styles.contactData__companyName}>
          Przedsiębiorstwo Produkcji Urządzeń Pralniczych{' '}
          <strong>PRALMA</strong> sp. z o.o.
        </p>
        <span className={styles.contactData__companyAddress}>
          25-651 Kielce, ul. Górnicza 49a
        </span>
        <div className={styles.contactData__details}>
          <div className={styles.contactData__detailsItem}>
            <span className={styles.contactData__detailsName}>konto:</span>
            <span className={styles.contactData__detailsValue}>
              <b>ALIOR BANK</b> 54 8493 0004 0010 0079 2149 0001
            </span>
          </div>
          <div className={styles.contactData__detailsItem}>
            <span className={styles.contactData__detailsName}>NIP:</span>
            <span className={styles.contactData__detailsValue}>
              657-008-11-16
            </span>
          </div>
          <div className={styles.contactData__detailsItem}>
            <span className={styles.contactData__detailsName}>KRS:</span>
            <span className={styles.contactData__detailsValue}>0000022564</span>
          </div>
          <div className={styles.contactData__detailsItem}>
            <span className={styles.contactData__detailsName}>REGON:</span>
            <span className={styles.contactData__detailsValue}>290022092</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactData;
