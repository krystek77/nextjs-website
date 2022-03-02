import styles from './Button.module.css';
import { classesNames } from '../../lib';

function Button({ label, classes, action,type, children }) {
  const classesString = classesNames(classes, 'button')(styles);

  return (
    <button className={classesString} type={type} onClick={action}>
      {label}
      <span>{children}</span>
    </button>
  );
}
Button.defaultProps = {
  label: '',
  classes: '',
  action: () => {},
  type:"button"
};

export default Button;
