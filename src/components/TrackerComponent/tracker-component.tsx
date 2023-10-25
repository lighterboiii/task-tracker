/* eslint-disable import/no-self-import */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import styles from './tracker-component.module.scss';

interface IProps {
  title: string;
  element?: JSX.Element;
}

const TrackerComponent: FC<IProps> = ({ title, element }) => {
  return (
    <div className={styles.tracker}>
      <h2>{title}</h2>
      <div>{element}</div>
      <button type="button" className={styles.tracker__button}>
        + Add item
      </button>
    </div>
  );
};

export default TrackerComponent;
