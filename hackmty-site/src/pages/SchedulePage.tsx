import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'
import MapComponent from "../components/MapComponent";
import InformationCard from "../components/InformationCard";


function SchedulePage() {
    return (
        <Box sx={{}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Box marginTop='20vh' sx={{backgroundColor:"white", width: {xs: '80%', sm: '60%'}, display:'block', px:'clamp(1rem, 1vw + 1rem, 4rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.4rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>Schedule</Typography>
                </Box>
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <InformationCard title="Coming Soon" description="Stay tuned to our social media!"></InformationCard>
                </Box>
            </Box>
        </Box>
    )
}

export default SchedulePage;