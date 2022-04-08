import styles from './SquareBackground.module.css';
import { classesNames } from 'lib';

function SquareBackground({ classes }) {
  const classesString = classesNames(classes, 'squaresBgDecorator')(styles);
  return <div className={classesString}></div>;
}

SquareBackground.defaultProps = {
  classes: '',
};

export default SquareBackground;
