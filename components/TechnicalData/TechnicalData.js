import styles from "./TechnicalData.module.css";
import Parameter from "./Parameter/Parameter";

function TechnicalData({ items }) {
  return items.length ? (
    <div className={styles.technicalData}>
      {items.map((item, index) => (
        <Parameter key={index} {...item} />
      ))}
    </div>
  ) : null;
}
export default TechnicalData;
