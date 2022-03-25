import styles from './InputError.module.css';

function InputError({ message, isError }) {
  return isError ? <span className={styles.inputError}>{message}</span> : null;
}
InputError.defaultProps = {
  message: '',
  isError: false,
};
export default InputError;
