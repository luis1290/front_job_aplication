// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {  useNavigate } from 'react-router-dom';
import { useEffect,  useState } from 'react';
import { useDispatch } from 'react-redux';
import { getJobAplicationThunk } from '../store/slices/jobAplication.slice';
import Link from '@mui/material/Link';

const NapBar = ({ nameUser, urlUser, themeGlobal }) => {
  const dispatch = useDispatch();

  const id = localStorage.getItem("id")

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate()

  const handleClick = (route) => {
    // Navegar a otra ruta
    navigate(route);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    dispatch(getJobAplicationThunk(id));

  }, [themeGlobal]);

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    if (typeof string === 'string') {
      for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }
    }


    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: typeof name === 'string' ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : null
    };
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />

            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem className='linkMenu'  onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link  onClick={() => handleClick('/')} color="inherit" underline="none">
                    {'Inicio'}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem className='linkMenu' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link onClick={() => handleClick('/companies')} color="inherit" underline="none">
                    {'Empresas'}
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem className='linkMenu' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link onClick={() => handleClick('/recluiters')} color="inherit" underline="none">
                    {'Reclutadores'}
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{
              marginRight: '10px',
              '&:hover': {
                backgroundColor: 'inherit',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <Link onClick={() => handleClick('/')} className='linkMenu' underline="none" color="inherit">
                <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                  Inicio
                </Typography>
              </Link>
            </Box>
            <Box sx={{
              marginRight: '10px',
              '&:hover': {
                backgroundColor: 'inherit',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <Link onClick={() => handleClick('/companies')} className='linkMenu' underline="none" color="inherit">
                <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                  Empresas
                </Typography>
              </Link>
            </Box>

            <Box sx={{
              marginRight: '10px',
              '&:hover': {
                backgroundColor: 'inherit',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>
              <Link onClick={() => handleClick('/recluiters')} className='linkMenu' underline="none" color="inherit">
                <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                  Reclutadores
                </Typography>
              </Link>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar {...stringAvatar(nameUser)} />
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
                <Box>
                  <Link underline="none" color="inherit">
                    <Typography textAlign="center" >
                      {nameUser}
                    </Typography>
                  </Link>
                  <Button className="btn__logOut linkMenu" onClick={() => {
                    localStorage.clear("token")
                    localStorage.clear("id")
                    navigate("/loguin")
                  }}>Cerrar seción</Button>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NapBar;