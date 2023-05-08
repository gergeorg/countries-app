import { useEffect, useState } from 'react';
import { Container } from '../Container/Container';
import styles from './Header.module.css';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <a className={styles.title} href="/">
            Where is the world?
          </a>
          <button className={styles.themeSwitcher} onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}

            <span className={styles.switcherText}>{theme} theme</span>
          </button>
        </div>
      </Container>
    </header>
  );
};
