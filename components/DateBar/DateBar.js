import styles from './DateBar.module.css';
import moment from 'moment';
import 'moment/locale/pl';

moment.locale('pl');
function DateBar({ date }) {
  return (
    <div className={styles.dateBar}>{moment(date, 'YYYY-MM-DD').fromNow()}</div>
  );
}
export default DateBar;
