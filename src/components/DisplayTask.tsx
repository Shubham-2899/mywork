import * as React from 'react';
import Typography from '@mui/material/Typography';
import CustomAccordian from './CustomAccordian';
import { Task } from '../types';
export default function DisplayTask({ task, type }: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log('task', task);

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
    >
      <Typography variant="h6" sx={{ marginTop: '10px' }}>
        {type}
      </Typography>
      {task.length > 0 ? (
        task.map((task: Task) => {
          return (
            <div style={{ width: '98%' }} key={task.id}>
              <CustomAccordian expanded={expanded} setExpanded={setExpanded} handleChange={handleChange} task={task} />
            </div>
          );
        })
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '100px',
          }}
        >
          <img src="src/assets/emptytrash.png" alt="empty trash" />
          <Typography variant="h6" color={'green'}>
            No tasks to display!
          </Typography>
        </div>
      )}
    </div>
  );
}
