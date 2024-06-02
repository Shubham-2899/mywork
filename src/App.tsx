import { Container } from '@mui/material';
import './App.css';
import MyWorkRoutes from './routes';
import MyTaskContext from './contexts/MyTaskContext';
import Header, { logoutChannel } from './components/Header';
import { UserAuthContextProvider } from './contexts/UserAuthContext';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const logoutAllTabs = () => {
      logoutChannel.onmessage = () => {
        window.location.reload();
        logoutChannel.close();
      };
    };
    logoutAllTabs();
  }, []);

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
