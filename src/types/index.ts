export type Task = {
  id: string;
  task: string;
  description: string;
  priority: Priority;
  status: 'todo' | 'in-progress' | 'done';
};

export type Priority = 'High' | 'Medium' | 'Low';
