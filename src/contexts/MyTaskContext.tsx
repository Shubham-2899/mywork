import React, { ReactElement, createContext, useState } from 'react';
import { Task } from '../types';

const TaskContext = createContext<{ myTasks: Task[]; setMyTasks: React.Dispatch<React.SetStateAction<Task[]>> }>({
  myTasks: [],
  setMyTasks: () => {},
});

const MyTaskContext = ({ children }: { children: ReactElement }) => {
  const [myTasks, setMyTasks] = useState<Task[]>([]);

  return <TaskContext.Provider value={{ myTasks, setMyTasks }}>{children}</TaskContext.Provider>;
};

export default MyTaskContext;
export { TaskContext };
