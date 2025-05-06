import React from "react";
import { SvgIcon, Typography } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'


function LandingPage() {
    return (
        <>
         <div style={{textAlign:'center', marginTop:50, marginBottom:50}}>
              <SvgIcon component={HackMtyLogo} inheritViewBox sx={{mr: 1, fontSize:'40vh'}}/>
            </div>
            <Countdown dateTime="2025-10-24T11:00:00" wordFormat="full" numberFormat={false}/>
            <Typography sx={{marginTop:10, color:'white', fontSize:60, fontWeight:700}}>October 24-26</Typography>
            <Typography sx={{marginTop:0, color:'white', fontSize:30, fontWeight:400}}>Hackathon @Tec de Monterrey, Monterrey NL</Typography>
        </>
    )
}

export default LandingPage;