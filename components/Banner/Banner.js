import styles from './Banner.module.css';
import { classesNames } from '../../lib';
function Banner({ classes, children }) {
  const classesString = classesNames(classes, 'banner')(styles);
  return (
    <header className={classesString}>
      <div className={styles.banner__inner}>{children}</div>
    </header>
  );
}
Banner.defaultProps = {
  classes: '',
};
export default Banner;
