import styles from './Button.module.css';
import { classesNames } from '../../lib';

function Button({ label, classes, action, children }) {
  const classesString = classesNames(classes, 'button')(styles);

  return (
    <button className={classesString} type="button" onClick={action}>
      {label}
      <span>{children}</span>
    </button>
  );
}
Button.defaultProps = {
  label: '',
  classes: '',
  action: () => {},
};

export default Button;
