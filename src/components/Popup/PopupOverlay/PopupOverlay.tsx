import { FC } from 'react';
import styles from './PopupOverlay.module.scss';

interface IOverlay {
  onClick: () => void;
}

const PopupOverlay: FC<IOverlay> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default PopupOverlay;
