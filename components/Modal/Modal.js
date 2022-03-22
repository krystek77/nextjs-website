import styles from './Modal.module.css';
import Image from 'next/image';

function Modal({ isOpen, toggleModal, children }) {
  return isOpen ? (
    <div className={styles.modal} onClick={toggleModal}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeButton} type="button">
          <Image
            src="/assets/icons/close.svg"
            alt="zamknij modal"
            width="16"
            height="16"
          />
        </button>
        <div className={styles.modal__content}>{children}</div>
      </div>
    </div>
  ) : null;
}

Modal.defaultProps = {
  isOpen: false,
  toggleModal: () => {},
  children: undefined,
};
export default Modal;
