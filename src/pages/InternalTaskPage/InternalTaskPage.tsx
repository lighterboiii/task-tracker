/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../services/store';

const InternalTaskPage: FC = () => {
  const { id } = useParams();
  const tasksList = useSelector((store: RootState) => store.taskSlice.tasks);
  const selectedTask = useMemo(() => {
    return tasksList.find((task) => task.id === id);
  }, [tasksList, id]);

  console.log(tasksList);
  console.log(selectedTask);
  return <div className="taskPage">{selectedTask!.title}</div>;
};

export default InternalTaskPage;
