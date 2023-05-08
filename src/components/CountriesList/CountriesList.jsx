import styles from './CountriesList.module.css';

const CountriesList = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

export default CountriesList;
