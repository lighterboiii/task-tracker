// TaskBoard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TaskElement.module.scss';

interface ITaskElementProps {
  task: any;
}

const TaskElement: React.FC<ITaskElementProps> = ({ task }) => {
  return (
    <li key={task.id} className={styles.element}>
      <Link to={`/boards/${task.id}`} className={styles.element__link}>
        <div className={styles.element__textWrapper}>
          <h3 className={styles.element__title}>{task.title}</h3>
          <p className={styles.element__description}>{task.description}</p>
        </div>
      </Link>
    </li>
  );
};

export default TaskElement;
