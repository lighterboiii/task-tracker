// TaskBoard.tsx
import React from 'react';
import styles from './TaskElement.module.scss';

interface ITaskElementProps {
  task: any;
  handleMoveTask: any;
}

const TaskElement: React.FC<ITaskElementProps> = ({ task, handleMoveTask }) => {
  return (
    <li key={task.id} className={styles.element}>
      <div className={styles.element__textWrapper}>
        <h3 className={styles.element__title}>{task.title}</h3>
        <p className={styles.element__description}>{task.description}</p>
      </div>
      <div className={styles.element__button}>
        <button
          className={styles.element__button}
          type="button"
          onClick={() => handleMoveTask(task.id, 'todo')}
        >
          Todo
        </button>
        <button
          type="button"
          onClick={() => handleMoveTask(task.id, 'inprogress')}
        >
          Processing
        </button>
        <button
          className={styles.element__button}
          type="button"
          onClick={() => handleMoveTask(task.id, 'review')}
        >
          Review
        </button>
        <button
          className={styles.element__button}
          type="button"
          onClick={() => handleMoveTask(task.id, 'done')}
        >
          Done
        </button>
      </div>
    </li>
  );
};

export default TaskElement;
