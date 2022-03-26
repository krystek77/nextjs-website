import styles from "./Modal.module.css";
import Image from "next/image";
import { classesNames } from "../../lib";

function Modal({ isOpen, toggleModal, children, classes }) {
  const classesString = classesNames(classes, "modal")(styles);
  return isOpen ? (
    <div className={classesString} onClick={toggleModal}>
      <div className={styles.modal__container}>
        <button className={styles.modal__closeButton} type='button'>
          <Image src='/assets/icons/close.svg' alt='zamknij modal' width='16' height='16' />
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
  classes: "",
};
export default Modal;
