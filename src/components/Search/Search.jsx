import styles from './Search.module.css';
import { IoSearch } from 'react-icons/io5';

export const Search = ({ search, setSearch }) => {
  return (
    <label className={styles.label}>
      <IoSearch />
      <input
        className={styles.input}
        type="search"
        placeholder="Search for a country..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </label>
  );
};
