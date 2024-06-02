import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import mydailyworkIcon from '../assets/mydailywork.svg';
import { useUserAuth } from '../contexts/UserAuthContext';
import { Button } from '@mui/material';

export const logoutChannel = new BroadcastChannel('logout');

function Header() {
  const { login, setLogin, user, logOut } = useUserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    let authToken = localStorage.getItem('Auth Token');
    if (authToken?.length) {
      setLogin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogOut = async () => {
    try {
      logoutChannel.postMessage('Logout');
      await logOut();
      localStorage.removeItem('Auth Token');
      localStorage.removeItem('user');
      setLogin(false);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: '1px solid #ddd', backgroundColor: '#fff', mb: '20px' }}
    >
      <Toolbar
        disableGutters
        sx={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '15px', paddingRight: '15px' }}
      >
        <img src={mydailyworkIcon} alt="my daily work" width={200} height={50} />

        {login ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user?.displayName || 'User'} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{user?.displayName}</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleLogOut();
                }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button sx={{ marginLeft: 'auto', color: 'white' }} variant="contained">
            <Link to="/signin" style={{ color: 'white', textDecoration: 'none' }}>
              Log In
            </Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
