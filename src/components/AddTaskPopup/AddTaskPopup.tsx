/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newTask } from '../../services/slices/taskSlice';
import { RootState } from '../../services/store';
import Input from '../../ui/input/input';
import styles from './AddTaskPopup.module.scss';
import Textarea from '../../ui/textarea/textarea';

interface IPopup {
  toggleModal: () => void;
}

const AddTaskPopup: FC<IPopup> = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((store: RootState) => store.taskSlice.tasks);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    board: 'todo' as 'todo' | 'review' | 'done' | 'inprogress',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(newTask(formData));
    setFormData({ title: '', description: '', board: 'todo' });
    toggleModal();
  };

  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__heading}>Add Task</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.form__fieldset}>
          <Input onChange={handleChange} value={formData.title} name="title" />
          <Textarea
            onChange={handleChange}
            value={formData.description}
            name="description"
          />
        </fieldset>
        <button type="submit" className={styles.form__button}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AddTaskPopup;
