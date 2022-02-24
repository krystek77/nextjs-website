import styles from './Title.module.css';
import { classesNames } from '../../lib';

function Title({ variant, content, classes }) {
  const classesString = classesNames(classes, 'title')(styles);

  switch (variant) {
    case 'h1':
      return <h1 className={classesString}>{content}</h1>;
    case 'h3':
      return <h3 className={classesString}>{content}</h3>;
    case 'h4':
      return <h4 className={classesString}>{content}</h4>;
    case 'h5':
      return <h5 className={classesString}>{content}</h5>;
    case 'h6':
      return <h6 className={classesString}>{content}</h6>;
    default:
      return <h2 className={classesString}>{content}</h2>;
  }
}

Title.defaultProps = {
  variant: 'h2',
  content: 'give some content',
  classes: '',
};

export default Title;
