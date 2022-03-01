import styles from './Button.module.css';
import { classesNames } from '../../lib';

function Button({ label, classes }) {
  const classesString = classesNames(classes, 'button')(styles);

  return (
    <button className={classesString} type="button">
      {label}
    </button>
  );
}
Button.defaultProps = {
  label: 'give some label',
  classes: '',
};

export default Button;
