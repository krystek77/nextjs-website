import styles from './Select.module.css';

function SelectInput({ options, action, name, selected }) {
  return (
    <div className={styles.select}>
      <select name={name} className={styles.select__input} onChange={action} value={selected}>
        {options.map((item, index) => {
          return (
            <option
              className={styles.select__option}
              key={index}
              value={item}
            >
              {item}
            </option>
          );
        })}
      </select>
      <span className={styles.select__outline}></span>
    </div>
  );
}
SelectInput.defaultProps = {
  options: [],
  action: () => {},
  name: '',
  selected: {
    name: '',
  },
};
export default SelectInput;
