import { Container } from '@mui/material';
import './App.css';
import MyWorkRoutes from './routes';
import MyTaskContext from './contexts/MyTaskContext';
import Header from './components/Header';

function App() {
  return (
    <>
      <Container maxWidth={false} sx={{ paddingTop: '10px' }}>
        <MyTaskContext>
          <>
            <Header />
            <MyWorkRoutes />
          </>
        </MyTaskContext>
      </Container>
    </>
  );
}

export default App;
