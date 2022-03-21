import { classesNames } from "../../lib";
import styles from "./Input.module.css";

function Input({ classes = "", type = "text", value = "", fieldName = "", handleInput, placeholder = "" }) {
  const classesString = classesNames(classes, "inputWrapper")(styles);
  return (
    <div className={classesString}>
      <input className={styles.input} type={type} value={value} name={fieldName} onChange={handleInput} placeholder={placeholder} />
      <span className={styles.input__outline}></span>
    </div>
  );
}
export default Input;
