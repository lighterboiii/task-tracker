import { FC } from 'react';
import styles from './TrackerComponent.module.scss';

interface IProps {
  title: string;
}

const TrackerComponent: FC<IProps> = ({ title }) => {
  return (
    <div className={styles.tracker}>
      <h2>{title}</h2>
    </div>
  );
};

export default TrackerComponent;
