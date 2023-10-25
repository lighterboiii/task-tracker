import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const HomePage: FC = () => {
  return (
    <nav className={styles.home}>
      <Link className={styles.home__element} to="/boards">
        Your boards
      </Link>
      <Link className={styles.home__element} to="/create">
        Create board
      </Link>
    </nav>
  );
};

export default HomePage;
