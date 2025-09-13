import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

import FacebookIcon from '../assets/media/facebook.svg?react';
import InstagramIcon from '../assets/media/instagram.svg?react';
import DiscordIcon from '../assets/media/discord.svg?react';
import { BottomNavigation } from '@mui/material';

import TecACMLogo from "../assets/tec-acm-colorless.svg?react";

function Footer() {
  return (
    <BottomNavigation color='primary' sx={{zIndex:5, bottom:-20, backgroundColor:'primary.main', height:'auto'}}>
          <Box width='60%' display='flex' sx={{flexDirection:{xs:'column', md:'row'}, justifyContent:'space-between', gap:'1vh'}} alignItems={'center'} marginY={'2vh'}>
            <Typography color='white'>Copyright © HackMTY 2025</Typography>
            
            <Box sx={{justifyContent: 'center'}}>
              <Box component="a" href="https://facebook.com/HackMTY/" target="_blank">
                  <SvgIcon component={FacebookIcon} inheritViewBox sx={{fontSize:30, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}, mr:4}}/>
              </Box>
              <Box component="a" href="https://instagram.com/hackmty/" target="_blank">
                  <SvgIcon component={InstagramIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main'}, mr: 4}}/>
              </Box>
                <Box component="a" href="https://hackmty.com/discord" target="_blank">
                    <SvgIcon component={DiscordIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
                </Box>
            </Box>
            <Typography color='white' component="a" href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf' sx={{transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}>Code of Conduct</Typography>
            <Box component="a" href="https://tec.acm.org" target="_blank" sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                <Box component={TecACMLogo} sx={{height:30, width:'auto', objectFit: 'contain', color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
            </Box>
        </Box>
    </BottomNavigation>
  );
}
export default Footer;