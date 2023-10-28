import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__text}>create or join a board</div>
      <nav className={styles.home__nav}>
        <Link className={styles.home__element} to="/create">
          Create board
        </Link>
        <Link className={styles.home__element} to="/boards">
          Your boards
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
