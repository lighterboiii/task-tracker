import { FC } from 'react';
import styles from './ModalOverlay.module.scss';

interface IOverlay {
  onClick: () => void;
}

const ModalOverlay: FC<IOverlay> = ({ onClick }) => {
  return <div className={styles.overlay} onClick={onClick} />;
};

export default ModalOverlay;
