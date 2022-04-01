import styles from './InputTextarea.module.css';
import { classesNames } from '../../lib';

function TextareaInput({
  children,
  classes,
  action,
  value,
  name,
  rows,
  placeholder,
}) {
  const classesString = classesNames(classes, 'textareaWrapper')(styles);
  return (
    <div className={classesString}>
      <textarea
        className={styles.textarea}
        onChange={action}
        value={value}
        name={name}
        rows={rows}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
}
TextareaInput.defaultProps = {
  children: undefined,
  classes: '',
  action: () => {},
  name: '',
  rows: 10,
  placeholder: 'Wpisz tekst',
  value: '',
};
export default TextareaInput;
