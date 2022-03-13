import { classesNames } from "../../lib";
import styles from "./Input.module.css";

function Input({ classes = "", type = "text", value = "", fieldName = "", handleInput, placeholder = "" }) {
  const classesString = classesNames(classes, "input")(styles);
  return <input className={classesString} type={type} value={value} name={fieldName} onChange={handleInput} placeholder={placeholder} />;
}
export default Input;
