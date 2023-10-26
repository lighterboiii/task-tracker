/* eslint-disable import/no-self-import */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import styles from './TrackerComponent.module.scss';
// import Popup from '../Modal/Modal/Modal';
// import AddTask from '../AddTaskPopup/AddTaskPopup';

interface IProps {
  title: string;
}

const TrackerComponent: FC<IProps> = ({ title }) => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleCloseModal = () => {
  //   navigate(-1);
  // };

  return (
    <div className={styles.tracker}>
      <h2>{title}</h2>
      {/* <button
        type="button"
        className={styles.tracker__button}
        onClick={() => setModalOpen(true)}
      >
        + Add item
      </button> */}
      {/* {isModalOpen && (
        <Popup onClick={handleCloseModal}>
          <AddTask />
        </Popup>
      )} */}
    </div>
  );
};

export default TrackerComponent;
