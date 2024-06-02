import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Priority, Task } from '../types';
import { FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskContext } from '../contexts/MyTaskContext';
import { useUserAuth } from '../contexts/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  bgcolor: 'background.paper',
  //   border: '2px solid #000',
  borderRadius: 1,
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const AddTask = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);
  const { login } = useUserAuth();
  const [priority, setPriority] = useState<Priority>('Low');
  const [task, setTask] = useState<Task>({
    id: '',
    task: '',
    description: '',
    status: 'todo',
    priority: priority,
  });

  const { myTasks, setMyTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const boxStyle = {
    ...style,
    width: isMobile ? '80%' : '400px',
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as Priority);
    setTask({
      ...task,
      priority: event.target.value as Priority,
    });
  };

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Task added!');
    setMyTasks([...myTasks, { ...task, id: uuidv4() }]);
    setOpenAddTaskModal(false);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  console.log('🚀 ~ AddTask ~ task:', task);

  const handleAddTaskClick = () => {
    if (login) {
      setOpenAddTaskModal(true);
    } else {
      navigate('/signin');
    }
  };

  return (
    <div>
      <Button variant="contained" disableRipple={true} onClick={() => handleAddTaskClick()}>
        Add Task!
      </Button>
      <Modal
        open={openAddTaskModal}
        onClose={() => {
          setOpenAddTaskModal(false);
        }}
        aria-labelledby="add-task modal"
        aria-describedby="add task to the list"
      >
        <Box sx={boxStyle}>
          <form
            onSubmit={handleAddTask}
            style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <TextField
              required
              id="outlined-basic"
              label="Task"
              name="task"
              variant="outlined"
              onChange={changeHandler}
            />
            <TextField
              id="outlined-basic"
              label="Description"
              name="description"
              variant="outlined"
              onChange={changeHandler}
            />
            {/* <TextField required id="outlined-basic" label="Due Date" variant="outlined"  onChange={changeHandler}/> */}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="priority-select-label"
                id="priority-select"
                value={priority}
                label="Priority"
                onChange={handleChange}
                defaultValue="Low"
              >
                <MenuItem value={'High'}>High</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'Low'}>Low</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" type="submit">
              Add Task
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTask;
