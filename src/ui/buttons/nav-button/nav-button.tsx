/* eslint-disable react/button-has-type */
import { FC } from 'react';
import styles from './nav-button.module.scss';

interface INavButton {
  onClick?: () => void;
  text: string;
}

const NavButton: FC<INavButton> = ({ onClick, text }) => {
  return (
    <button type="button" onClick={onClick} className={styles.navButton}>
      {text}
    </button>
  );
};

export default NavButton;
