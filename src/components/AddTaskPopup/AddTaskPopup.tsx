/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Input from '../../ui/input/input';
import styles from './AddTaskPopup.module.scss';
import Textarea from '../../ui/textarea/textarea';

const AddTaskPopup = () => {
  const [nameInputValue, setNameValue] = useState('');
  const [descriptionInputValue, setDescriptionValue] = useState('');

  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__heading}>Add Task</h2>
      <form className={styles.form}>
        <fieldset className={styles.form__fieldset}>
          <Input onChange={() => setNameValue} />
          <Textarea onChange={() => setNameValue} />
        </fieldset>
        <button type="button" className={styles.form__button}>
          Confirm
        </button>
      </form>
    </div>
  );
};

export default AddTaskPopup;
