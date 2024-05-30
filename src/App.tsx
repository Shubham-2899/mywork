import { Container } from '@mui/material';
import './App.css';
import MyWorkRoutes from './routes';
import MyTaskContext from './contexts/MyTaskContext';
import Header from './components/Header';
import { UserAuthContextProvider } from './contexts/UserAuthContext';

function App() {
  return (
    <>
      <Container maxWidth={false} sx={{ paddingTop: '10px' }}>
        <UserAuthContextProvider>
          <MyTaskContext>
            <>
              <Header />
              <MyWorkRoutes />
            </>
          </MyTaskContext>
        </UserAuthContextProvider>
      </Container>
    </>
  );
}

export default App;
