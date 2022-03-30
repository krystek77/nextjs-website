import styles from './InputError.module.css';
import { classesNames } from '../../lib';

function InputError({ message, isError, classes }) {
  const classesString = classesNames(classes, 'inputError')(styles);
  return isError ? <span className={classesString}>{message}</span> : null;
}
InputError.defaultProps = {
  message: '',
  isError: false,
  classes: '',
};
export default InputError;
