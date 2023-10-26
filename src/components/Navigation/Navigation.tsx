import React from 'react';
import { Link } from 'react-router-dom';
// import Swipeable from 'react-swipeable';
import styles from './Navigation.module.scss';
import NavButton from '../../ui/buttons/nav-button/nav-button';

function Navigation() {
  // const handleSwipe = (deltaX: number) => {
  //   if (deltaX > 0) {
  //     console.log('Свайп вправо');
  //   } else if (deltaX < 0) {
  //     console.log('Свайп влево');
  //   }
  // };

  return (
    // <Swipeable
    //   onSwipedLeft={() => handleSwipe(-1)}
    //   onSwipedRight={() => handleSwipe(1)}
    // >
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
