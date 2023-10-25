import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const HomePage: FC = () => {
  return (
    <nav className={styles.home}>
      <div className={styles.home__text}>create or join a board</div>
      <Link className={styles.home__element} to="/create">
        Create board
      </Link>
      <Link className={styles.home__element} to="/boards">
        Your boards
      </Link>
    </nav>
  );
};

export default HomePage;
