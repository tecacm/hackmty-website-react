import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';

import { MLHTrustBadge } from './MLHTrustBadge';
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import FacebookIcon from '../assets/media/facebook.svg?react';
import InstagramIcon from '../assets/media/instagram.svg?react';

const pages = ['ABOUT', 'SCHEDULE', 'SPONSORS', 'HALL OF FAME', 'FAQ', 'CONTACT'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='primary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <MLHTrustBadge/>

          <SvgIcon component={HackMtyLogo} inheritViewBox sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize:40}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
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
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <SvgIcon component={HackMtyLogo} inheritViewBox sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end', alignItems:'center', mr:3 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}, display: 'block' , fontSize:16, fontWeight:500, letterSpacing:'1px', mr:3
                }}
              >
                {page}
              </Button>
            ))}
            <Box component="a" href="https://facebook.com/HackMTY/" target="_blank">
                <SvgIcon component={FacebookIcon} inheritViewBox sx={{fontSize:30, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}, mr:4}}/>
            </Box>
            <Box component="a" href="https://instagram.com/hackmty/" target="_blank">
                <SvgIcon component={InstagramIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
            </Box>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;