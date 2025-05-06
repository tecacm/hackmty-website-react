import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'


function LandingPage() {
    return (
        <Box sx={{paddingTop: '64px', minHeight: '100vh' }}>
            <div style={{textAlign:'center', marginTop:'15vh', marginBottom:50}} id="hack-logo">
                <SvgIcon component={HackMtyLogo} inheritViewBox sx={{mr: 1, fontSize:'40vh'}}/>
            </div>
            <div id="countdown-and-location">
                <Countdown dateTime="2025-10-24T11:00:00" wordFormat="full" numberFormat={false}/>
                <Typography sx={{marginTop:10, color:'white', fontSize:60, fontWeight:700}}>October 24-26</Typography>
                <Typography sx={{marginTop:0, color:'white', fontSize:'clamp(0.3rem, 1vw + 1rem, 3rem)', fontWeight:400}}>Hackathon @Tec de Monterrey, Monterrey NL</Typography>
            </div>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Box marginTop='20vh' sx={{backgroundColor:"white", width: {xs: 'fit-content', sm: '60%'}, display:'block', px:'clamp(5rem, 3vw + 3rem, 8rem)', overflow: 'hidden', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.5rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main">ABOUT US</Typography>
                </Box>
                <Box marginTop='20vh' sx={{backgroundColor:"white", width: {xs: 'fit-content', sm: '60%'}, display:'block', px:'clamp(5rem, 2vw + 4rem, 5rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.5rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main">TEST</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage;