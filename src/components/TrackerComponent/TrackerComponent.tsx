import { FC } from 'react';
import styles from './TrackerComponent.module.scss';
import AddTaskPopup from '../AddTaskPopup/AddTaskPopup';
import Modal from '../Modal/Modal/Modal';

interface IProps {
  title: string;
  isModalOpen: boolean;
  toggleModal: () => void;
}

const TrackerComponent: FC<IProps> = ({ title, isModalOpen, toggleModal }) => {
  return (
    <div className={styles.tracker}>
      <h2>{title}</h2>
      <button
        type="button"
        className={styles.tracker__button}
        onClick={toggleModal}
      >
        + Add item
      </button>
      {isModalOpen && (
        <Modal onClick={toggleModal}>
          <AddTaskPopup />
        </Modal>
      )}
    </div>
  );
};

export default TrackerComponent;
