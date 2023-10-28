import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
      {/* <h1 className={styles.header__title}>Discrete Tracker</h1> */}
      <button type="button" className={styles.header__mainButton}>
        Создать доску
      </button>
    </div>
  );
};

export default Header;
