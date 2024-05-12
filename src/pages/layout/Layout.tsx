import { useContext } from 'react';
import { TaskContext } from '../../contexts/MyTaskContext';
import { Grid, Paper } from '@mui/material';
import AddTask from '../../components/AddTask';
import DisplayTask from '../../components/DisplayTask';

const Layout = () => {
  const { myTasks } = useContext(TaskContext);
  console.log(myTasks);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <AddTask />
        </div>
      </Grid>
      <Grid item xs={12} container spacing={1}>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ height: '85vh' }}>
            <DisplayTask task={myTasks} type="Todo" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ height: '85vh' }}>
            <DisplayTask task={[]} type="In Progress" />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ height: '85vh' }}>
            <DisplayTask task={[]} type="Done" />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
