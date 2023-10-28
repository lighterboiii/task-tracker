import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';
import NavButton from '../../ui/buttons/nav-button/nav-button';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.nav__element} to="/boards/todo">
        <NavButton text="Todo" />
      </Link>
      <Link className={styles.nav__element} to="/boards/progress">
        <NavButton text="In progress" />
      </Link>
      <Link className={styles.nav__element} to="/boards/review">
        <NavButton text="Review" />
      </Link>
      <Link className={styles.nav__element} to="/boards/done">
        <NavButton text="Done" />
      </Link>
    </nav>
    // </Swipeable>
  );
}

export default Navigation;
