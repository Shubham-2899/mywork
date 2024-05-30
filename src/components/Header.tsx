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

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const { login, setLogin } = useUserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (setting: string) => {
    handleCloseUserMenu();
    switch (setting) {
      case 'Profile':
        navigate('/profile');
        break;
      case 'Account':
        navigate('/account');
        break;
      case 'Dashboard':
        navigate('/dashboard');
        break;
      case 'Logout':
        // Handle logout logic here
        navigate('/logout');
        break;
      default:
        break;
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Button sx={{ marginLeft: 'auto', color: 'white' }} variant="contained">
            <Link to="/signin" className="btn">
              Log In
            </Link>
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
