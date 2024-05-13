import * as React from 'react';
import Typography from '@mui/material/Typography';
import CustomAccordian from './CustomAccordian';
import { Task } from '../types';
import emptytrash from '../assets/emptytrash.png';
import { useMediaQuery, useTheme } from '@mui/material';

export default function DisplayTask({ task, displayType, handleDragStart }: any) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '15px',
      }}
    >
      <div style={{ marginTop: '10px', borderBottom: '1px solid black' }}>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          {displayType}
        </Typography>
      </div>
      {task.length > 0 ? (
        task.map((task: Task) => {
          return (
            <div style={{ width: '98%' }} key={task.id} draggable onDragStart={(e) => handleDragStart(e, task)}>
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
            marginTop: isMobile ? '20px' : '100px',
            marginBottom: isMobile ? '20px' : '',
          }}
        >
          <img src={emptytrash} alt="empty trash" />
          <Typography variant="h6" color={'green'}>
            No tasks to display
          </Typography>
        </div>
      )}
    </div>
  );
}
