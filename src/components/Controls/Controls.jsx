import { useState } from 'react';

import { Search } from '../Search/Search';
import CustomSelect from '../CustomSelect/CustomSelect';

import styles from './Controls.module.css';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls = () => {
  const [search, setSearch] = useState('');

  return (
    <div className={styles.wrapper}>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect />
    </div>
  );
};

export default Controls;
