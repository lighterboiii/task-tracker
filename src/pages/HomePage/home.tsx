import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './home.module.scss';

const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__element}>
        <Link className={styles.home__button} to="/boards">
          Your boards
        </Link>
      </div>
      <div className={styles.home__element}>
        <button type="button" className={styles.home__button}>
          Create board
        </button>
      </div>
    </div>
  );
};

export default HomePage;
