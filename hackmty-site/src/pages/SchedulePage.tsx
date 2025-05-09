import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'
import MapComponent from "../components/MapComponent";
import InformationCard from "../components/InformationCard";
import TitleCard from "../components/TitleCard";


function SchedulePage() {
    return (
        <Box sx={{}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title="Schedule"/>
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <InformationCard title="Coming Soon" description="Stay tuned to our social media!"></InformationCard>
                </Box>
            </Box>
        </Box>
    )
}

export default SchedulePage;