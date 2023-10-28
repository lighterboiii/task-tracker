import { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { newTask } from '../../services/slices/taskSlice';
import Input from '../../ui/input/input';
import styles from './AddTaskPopup.module.scss';
import Textarea from '../../ui/textarea/textarea';

interface IPopup {
  toggleModal: () => void;
}

const AddTaskPopup: FC<IPopup> = ({ toggleModal }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id: uuid(),
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
    toggleModal();
  };

  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__heading}>Add Task</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <fieldset className={styles.form__fieldset}>
          <div className={styles.form__input}>
            <Input
              onChange={handleChange}
              value={formData.title}
              name="title"
            />
          </div>
          <div className={styles.form__input}>
            <Textarea
              onChange={handleChange}
              value={formData.description}
              name="description"
            />
          </div>
        </fieldset>
        <button type="submit" className={styles.form__button}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AddTaskPopup;
