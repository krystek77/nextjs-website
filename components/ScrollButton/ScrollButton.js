import styles from './ScrollButton.module.css';
import Image from 'next/image';

function ScrollButton(props) {
  const classes = props.up
    ? `${styles.scrollButton} ${styles.scrollButton_up}`
    : `${styles.scrollButton} ${styles.scrollButton_down}`;

  const scroll = (e) => {
    const heightDocument = document.documentElement.offsetHeight;
    const heightViewport = window.innerHeight;
    const direction = e.target.name;
    const offset = direction === 'up' ? 0 : heightDocument - heightViewport;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  return (
    <button
      type="button"
      className={classes}
      onClick={scroll}
      name={props.up ? 'up' : 'down'}
    >
      <Image
        src={
          props.up
            ? '/assets/icons/arrow_up.svg'
            : '/assets/icons/arrow_down.svg'
        }
        alt={props.up ? 'arrow up' : 'arrow down'}
        width="32"
        height="32"
      />
      <span className={styles.scrollButton__text}>
        {props.up ? 'scroll up' : 'scroll down'}
      </span>
    </button>
  );
}

export default ScrollButton;
