import Image from "next/image";

import styles from "./ToggleViewedPassword.module.css";
function ToggleViewedPassword({ action, state,id }) {
  return (
    <div className={styles.toggleViewedPassword} onClick={action} id={id}>
      {state ? <Image src='/assets/icons/close_eye.svg' alt='close eye' width={24} height={23} /> : <Image src='/assets/icons/eye.svg' alt='eye' width={24} height={15} />}
    </div>
  );
}

ToggleViewedPassword.defaultProps = {
  action: () => {},
  state: false,
  id:"password"
};

export default ToggleViewedPassword;
