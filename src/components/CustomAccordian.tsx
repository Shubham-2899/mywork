import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordian = ({ expanded, handleChange, task }: any) => {
  return (
    <Accordion expanded={expanded === task.id} onChange={handleChange(task.id)} elevation={3}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
        <Typography sx={{ width: '33%', flexShrink: 0 }}>{task.task}</Typography>
        <Typography sx={{ color: task.priority === 'High' ? 'red' : 'green' }}>{task.priority}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{task.description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordian;
