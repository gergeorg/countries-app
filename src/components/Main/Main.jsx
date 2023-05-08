import styles from './Main.module.css';

import { Container } from '../Container/Container';

const Main = ({ children }) => {
  return (
    <main className={styles.main}>
      <Container>{children}</Container>
    </main>
  );
};

export default Main;
