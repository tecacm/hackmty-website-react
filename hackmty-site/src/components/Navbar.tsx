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
import FacebookIcon from '../assets/media/facebook.svg?react';
import InstagramIcon from '../assets/media/instagram.svg?react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { darken } from '@mui/material';

const HackMtyLogo = import.meta.env.BASE_URL + '/images/hackmty-logo.webp';

interface Page {
  text: string;
  url: string;
}

const pages: Page[] = [
  { text: 'ABOUT', url: '/' },
  { text: 'SCHEDULE', url: '/schedule' },
  { text: 'SPONSORS', url: '/sponsors' },
  { text: 'HALL OF FAME', url: '/halloffame' },
  { text: 'FAQ', url: '/faq' },
  { text: 'CONTACT', url: '/contact-us' }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();

  return (
    <AppBar position="fixed" color='primary'>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <MLHTrustBadge/>

          <Box component="img" src={HackMtyLogo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height:40}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{backgroundColor:'secondary.main', borderRadius:'10%', fontSize:30}}/>
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
              sx={{ display: { xs: 'block', md: 'none' }}}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 3,
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu} component={Link} to={page.url}>
                  <Typography sx={{textAlign: 'center', color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}>{page.text}</Typography>
                </MenuItem>
              ))}

              <Box component="a" href="https://facebook.com/HackMTY/" target="_blank" paddingLeft={1.5}>
                <SvgIcon component={FacebookIcon} inheritViewBox sx={{fontSize:30, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}, mr:4}}/>
              </Box>
              <Box component="a" href="https://instagram.com/hackmty/" target="_blank">
                <SvgIcon component={InstagramIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
              </Box>
            </Menu>
          </Box>


          <Box component="img" src={HackMtyLogo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, height:40}}/>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'flex-end', alignItems:'center', mr:3 }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={(theme) => ({ 
                  my: 2, color: 'white', 
                  backgroundColor: location.pathname === page.url ? 'secondary.main' : undefined, 
                  transition: 'background-color 0.3s ease, color 0.3s ease', '&:hover': { 
                    backgroundColor: location.pathname === page.url ? darken(theme.palette.secondary.main, 0.3) : undefined,
                    color: location.pathname != page.url ? 'secondary.main' : 'white', 
                  }, 
                  display: 'block', 
                  fontSize:'clamp(0.4rem, 1vw + 0.1rem, 1rem)', 
                  fontWeight:500, 
                  letterSpacing:'1px', 
                  mr:'1vw',
                  padding: '12px 1.1vw',
                })}
                component={Link} 
                to={page.url}
              >
                {page.text}
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