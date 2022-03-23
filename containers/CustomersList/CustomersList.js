import CustomerItem from './CustomerItem/CustomerItem';
import styles from './CustomersList.module.css';

function CustomersList({ customers }) {
  return customers.length ? (
    <section className={styles.customersList}>
      <div className={styles.customersList__container}>
        {customers.map((customer, index) => {
          return <CustomerItem key={index} {...customer} />;
        })}
      </div>
    </section>
  ) : null;
}

export default CustomersList;
