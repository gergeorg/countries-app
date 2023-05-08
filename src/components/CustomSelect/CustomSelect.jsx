import { useState } from 'react';
import styles from './CustomSelect.module.css';

import Select from 'react-select';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const CustomSelect = () => {
  const [region, setRegion] = useState('');

  return (
    <Select
      className={styles.control}
      styles={{
        control: (provided) => ({
          ...provided,
          backgroundColor: 'var(--colors-ui-base)',
          color: 'var(--colors-text)',
          borderRadius: 'var(--radii)',
          padding: '0.25rem',
          border: 'none',
          boxShadow: 'var(--shadow)',
          height: '50px',
        }),

        option: (provided, state) => ({
          ...provided,
          cursor: 'pointer',
          color: 'var(--colors-text)',
          backgroundColor: state.isSelected
            ? 'var(--colors-bg)'
            : 'var(--colors-ui-base)',
        }),
      }}
      value={region}
      onChange={setRegion}
      options={options}
      isClearable
      isSearchable={false}
      placeholder="Filter by region"
    />
  );
};

export default CustomSelect;
