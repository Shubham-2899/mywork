import React, { ReactElement, createContext, useState } from 'react';
import { Task } from '../types';

const TaskContext = createContext<{ myTasks: Task[]; setMyTasks: React.Dispatch<React.SetStateAction<Task[]>> }>({
  myTasks: [],
  setMyTasks: () => {},
});

const MyTaskContext = ({ children }: { children: ReactElement }) => {
  const [myTasks, setMyTasks] = useState<Task[]>([
    {
      id: '123',
      task: 'Test task',
      description:
        'Test description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis fuga perferendis accusantium expedita maxime neque pariatur excepturi? Possimus dolor enim eum illo incidunt ipsa nam?',
      priority: 'High',
      status: 'todo',
    },
  ]);

  return <TaskContext.Provider value={{ myTasks, setMyTasks }}>{children}</TaskContext.Provider>;
};

export default MyTaskContext;
export { TaskContext };
