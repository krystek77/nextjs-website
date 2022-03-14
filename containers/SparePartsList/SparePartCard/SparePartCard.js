import React from 'react';
import Image from 'next/image';
import Title from '../../../components/Title/Title';
import styles from './SparePartCard.module.css';
import Modal from '../../../components/Modal/Modal';

function SparePartCard({
  image = '',
  title = '',
  tags = [],
  isBlue = false,
  isAllegro = false,
}) {
  const [toggle, setToggleModal] = React.useState(false);
  const toggleModal = () => setToggleModal(!toggle);

  return (
    <React.Fragment>
      {/** start modal */}
      <Modal isOpen={toggle} toggleModal={toggleModal}>
        <div className={styles.modal__imageWrapper}>
          <Image
            src={`/assets/images/spare_parts/${image}.webp`}
            alt={title}
            layout="fill"
          />
        </div>
        <Title
          content={title}
          variant="h3"
          classes="title_display_h5 title_weight_small title_center title_mb_05"
        />
      </Modal>
      {/** end modal */}
      <div
        onClick={toggleModal}
        className={`${styles.sparePartCard} ${
          isBlue && styles.sparePartCard_bg_blue
        }`}
      >
        <div className={styles.sparePartCard__image}>
          <Image
            src={`/assets/images/spare_parts/${image}.webp`}
            alt={title}
            layout="fill"
          />
          <div className={styles.sparePartCard__imageOverlay}>
            <Image
              src="/assets/icons/zoom.svg"
              alt="zoom"
              width="48"
              height="48"
            />
          </div>
        </div>
        <div className={styles.sparePartCard__title}>
          <Title
            content={title}
            variant="h3"
            classes="title_light_500 title_display_h5 title_weight_small title_center title_mb_05"
          />
          {tags.length ? (
            <div className={styles.sparePartCard__tags}>
              {tags.map((item, index) => {
                return (
                  <span key={item} className={styles.sparePartCard__tag}>
                    {index === tags.length - 1 ? item : `${item}, `}
                  </span>
                );
              })}
            </div>
          ) : null}

          <div className={styles.sparePartCard__actions}>
            <a
              className={styles.sparePartCard__email}
              href="mailto:biuro@pralma.pl"
              title="zapytaj"
            >
              <Image
                src="/assets/icons/filled_email.svg"
                alt="email icon"
                width="20"
                height="16"
              />
            </a>
            <a
              className={`${styles.sparePartCard__allegro} ${
                isAllegro && styles.sparePartCard_disabled
              }`}
              href="http://www.pralma.pl"
              title="kup na allegro"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/assets/icons/allegro.svg"
                alt="allegro icon"
                width="48"
                height="16"
              />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SparePartCard;
