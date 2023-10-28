/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import ChevronIcon from '../../ui/icons/chevron-icon/chevron-icon';

const Header: FC = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.header}>
      <button
        type="button"
        className={styles.header__button}
        onClick={handleBack}
      >
        <ChevronIcon position="left" />
      </button>
      {/* <button type="button" className={styles.header__mainButton}>
        <Link to="/create" className={styles.header__link}>
          + board
        </Link>
      </button> */}
    </div>
  );
};

export default Header;
