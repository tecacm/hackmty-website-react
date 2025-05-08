import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'
import MapComponent from "../components/MapComponent";


function SchedulePage() {
    return (
        <Box sx={{}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Box marginTop='20vh' sx={{backgroundColor:"white", width: {xs: '80%', sm: '60%'}, display:'block', px:'clamp(1rem, 1vw + 1rem, 4rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.4rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>Schedule</Typography>
                </Box>
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <Box sx={{backgroundColor:"white", width: {xs: 'calc(100vw - 12rem)', sm: '60%'}, display:'inline-flex', flexDirection:'column', flex:'1', px:'clamp(5rem, 3vw + 3rem, 8rem)', borderRadius:'clamp(6px, 5vw + 2rem, 15px)', justifyContent:'flex-start', justifyItems:'center', paddingY:'2vh', transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}>
                        <Typography sx={{textTransform:'uppercase'}} fontSize={'clamp(0.2rem, 2vw + 2rem, 1.5rem)'} fontWeight={700} color="primary.main">Coming soon</Typography>
                        <Typography fontSize={'clamp(0.2rem, 2vw + 1rem, 1.3rem)'} fontWeight={400} color="primary.main">Stay tuned to our social media!</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SchedulePage;