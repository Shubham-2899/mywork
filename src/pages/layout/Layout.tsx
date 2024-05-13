import { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/MyTaskContext';
import { Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import AddTask from '../../components/AddTask';
import DisplayTask from '../../components/DisplayTask';
import { Task } from '../../types';

const Layout = () => {
  const { myTasks, setMyTasks } = useContext(TaskContext);
  console.log(myTasks);
  const [draggedItem, setDraggedItem] = useState<Task | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, todo: Task) => {
    console.log('drag start', todo);
    setDraggedItem(todo);
    event.dataTransfer.setData('text/plain', ''); // Required for Firefox
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (status: Task['status']) => {
    console.log('drop', status);
    if (draggedItem) {
      console.log('draggedItem', draggedItem);
      const updatedList = myTasks.map((item) => (item.id === draggedItem.id ? { ...item, status: status } : item));
      setMyTasks(updatedList);
      setDraggedItem(null);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddTask />
        </div>
      </Grid>
      <Grid item xs={12} container spacing={1}>
        <Grid item xs={12} md={4}>
          <Paper
            variant="outlined"
            sx={{ height: isMobile ? 'inherit' : '85vh' }}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop('todo')}
          >
            <DisplayTask
              task={myTasks.filter((todo) => todo.status === 'todo')}
              displayType="Todo"
              handleDragStart={handleDragStart}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            variant="outlined"
            sx={{ height: isMobile ? 'inherit' : '85vh' }}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop('in progress')}
          >
            <DisplayTask
              task={myTasks.filter((todo) => todo.status === 'in progress')}
              displayType="In-Progress"
              handleDragStart={handleDragStart}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            variant="outlined"
            sx={{ height: isMobile ? 'inherit' : '85vh' }}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop('done')}
          >
            <DisplayTask
              task={myTasks.filter((todo) => todo.status === 'done')}
              displayType="Done"
              handleDragStart={handleDragStart}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
