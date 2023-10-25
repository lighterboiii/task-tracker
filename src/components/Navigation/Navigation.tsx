import React from 'react';
import { Link } from 'react-router-dom';
// import Swipeable from 'react-swipeable';
import styles from './Navigation.module.scss';

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
        Todo
      </Link>
      <Link className={styles.nav__element} to="/boards/progress">
        In Progress
      </Link>
      <Link className={styles.nav__element} to="/boards/review">
        Review
      </Link>
      <Link className={styles.nav__element} to="/boards/done">
        Done
      </Link>
    </nav>
    // </Swipeable>
  );
}

export default Navigation;
