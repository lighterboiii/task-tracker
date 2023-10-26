/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import Input from '../../ui/Input/input';
import styles from './AddTaskPopup.module.scss';

const AddTaskPopup = () => {
  const [nameInputValue, setNameValue] = useState('');
  const [descriptionInputValue, setDescriptionValue] = useState('');

  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__heading}>Add Task</h2>
      <form>
        <fieldset>
          <Input onChange={() => setNameValue} placeholder="Enter task name" />
          <Input onChange={() => setNameValue} placeholder="Description" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddTaskPopup;
