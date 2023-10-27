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
      <button type="button" onClick={() => handleMoveTask(task.id, 'todo')}>
        Move to Todo
      </button>
      <button type="button" onClick={() => handleMoveTask(task.id, 'review')}>
        Move to Review
      </button>
      <button type="button" onClick={() => handleMoveTask(task.id, 'done')}>
        Move to Done
      </button>
      <button
        type="button"
        onClick={() => handleMoveTask(task.id, 'inprogress')}
      >
        Move to In Progress
      </button>
    </li>
  );
};

export default TaskElement;
