import Link from 'next/link';
import styles from './Linkbutton.module.css';
import { classesNames } from '../../lib';

function LinkButton({ label, to, classes }) {
  const classString = classesNames(classes, 'linkButton')(styles);

  return (
    <Link href={to}>
      <a className={classString}>{label}</a>
    </Link>
  );
}
LinkButton.defaultProps = {
  label: 'give some label',
  to: '/',
  classes: '',
};

export default LinkButton;
