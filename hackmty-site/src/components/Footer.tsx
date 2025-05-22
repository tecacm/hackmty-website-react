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
import { Link } from 'react-router-dom';
import { BottomNavigation } from '@mui/material';


function Footer() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <BottomNavigation color='primary' sx={{zIndex:5, bottom:-20, backgroundColor:'primary.main', height:'auto'}}>
          <Box width='60%' display='flex' sx={{flexDirection:{xs:'column', md:'row'}, justifyContent:'space-between'}} alignItems={'center'} marginY={'2vh'}>
            <Typography color='white'>Copyright © HackMTY 2025</Typography>
            
            <Box sx={{justifyContent: 'center'}}>
              <Box component="a" href="https://facebook.com/HackMTY/" target="_blank">
                  <SvgIcon component={FacebookIcon} inheritViewBox sx={{fontSize:30, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}, mr:4}}/>
              </Box>
              <Box component="a" href="https://instagram.com/hackmty/" target="_blank">
                  <SvgIcon component={InstagramIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
              </Box>
            </Box>
            <Typography color='white' component="a" href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>Code of Conduct</Typography>
        </Box>
    </BottomNavigation>
  );
}
export default Footer;