/* eslint-disable import/no-self-import */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './tracker-component.module.scss';
import { addTask, moveTask } from '../../services/slices/boardSlice';
import Popup from '../Popup/Popup/Popup';

interface IProps {
  title: string;
}

const TrackerComponent: FC<IProps> = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    navigate(-1);
  };

  return (
    <div className={styles.tracker}>
      <h2>{title}</h2>

      <button
        type="button"
        className={styles.tracker__button}
        onClick={() => setModalOpen(true)}
      >
        + Add item
      </button>
      {isModalOpen && (
        <Popup onClick={handleCloseModal}>
          <p>Привет</p>
        </Popup>
      )}
    </div>
  );
};

export default TrackerComponent;
