import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'
import MapComponent from "../components/MapComponent";


function LandingPage() {
    return (
        <Box sx={{paddingY: '10vh', minHeight: '100vh' }}>
            <div style={{textAlign:'center', marginTop:'15vh', marginBottom:50}} id="hack-logo">
                <SvgIcon component={HackMtyLogo} inheritViewBox sx={{mr: 1, fontSize:'40vh', transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.10)'}}}/>
            </div>
            <Box id="countdown-and-location">
                <Countdown dateTime="2025-10-24T11:00:00" wordFormat="full" numberFormat={false}/>
                <Typography sx={{marginTop:10, color:'white', fontSize:'clamp(0.3rem, 3vw + 2rem, 9rem)', fontWeight:700, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.05)'}}}>October 24-26</Typography>
                <Typography sx={{marginTop:0, color:'white', fontSize:'clamp(0.2rem, 0.8vw + 0.8rem, 3rem)', fontWeight:400, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px)'}}}>Hackathon @Tec de Monterrey, Monterrey NL</Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Box marginTop='20vh' sx={{backgroundColor:"white", width: {xs: '80%', sm: '60%'}, display:'block', px:'clamp(1rem, 1vw + 1rem, 4rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.4rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>About us</Typography>
                </Box>
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <Box sx={{backgroundColor:"white", width: {xs: 'calc(100vw - 12rem)', sm: '60%'}, display:'inline-flex', flexDirection:'column', flex:'1', px:'clamp(5rem, 3vw + 3rem, 8rem)', borderRadius:'clamp(6px, 5vw + 2rem, 15px)', justifyContent:'flex-start', justifyItems:'center', paddingY:'2vh', transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}>
                        <Typography sx={{textTransform:'uppercase', minHeight: '5rem'}} fontSize={'clamp(0.2rem, 2vw + 2rem, 1.5rem)'} fontWeight={700} color="primary.main">What makes us awesome</Typography>
                        <SvgIcon component={HackMtyLogo} inheritViewBox   sx={{height: '10vh', maxWidth: '100%', width: 'auto'}}/>
                        <Typography fontSize={'clamp(0.2rem, 2vw + 1rem, 1.3rem)'} fontWeight={400} color="primary.main">We are the largest student hackathon in Mexico. Hosted by Tec de Monterrey, ranked 5 stars by QS, in the top 140 universities worldwide and top 10 in Latin America.</Typography>
                    </Box>
                    <Box sx={{backgroundColor:"white", width: {xs: 'calc(100vw - 12rem)', sm: '60%'}, display:'inline-flex', flexDirection:'column', flex:'1', px:'clamp(5rem, 3vw + 3rem, 8rem)', borderRadius:'clamp(6px, 5vw + 2rem, 15px)', justifyContent:'flex-start', justifyItems:'center', paddingY:'2vh', transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}>
                        <Typography sx={{textTransform:'uppercase', minHeight: '5rem'}} fontSize={'clamp(0.2rem, 2vw + 2rem, 1.5rem)'} fontWeight={700} color="primary.main">Expect great things</Typography>
                        <SvgIcon component={HackMtyLogo} inheritViewBox   sx={{height: '10vh', maxWidth: '100%', width: 'auto'}}/>
                        <Typography fontSize={'clamp(0.2rem, 2vw + 1rem, 1.3rem)'} fontWeight={400} color="primary.main">We'll have mentors from different companies, and a great atmosphere for learning something new. We'll have many activities and ways to communicate to make the best out of this event for you!</Typography>
                    </Box>
                    <Box sx={{backgroundColor:"white", width: {xs: 'calc(100vw - 12rem)', sm: '60%'}, display:'inline-flex', flexDirection:'column', flex:'1', px:'clamp(5rem, 3vw + 3rem, 8rem)', borderRadius:'clamp(6px, 5vw + 2rem, 15px)', justifyContent:'flex-start', justifyItems:'center', paddingY:'2vh', transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}>
                        <Typography sx={{textTransform:'uppercase', minHeight: '5rem'}} fontSize={'clamp(0.2rem, 2vw + 2rem, 1.5rem)'} fontWeight={700} color="primary.main">All students welcome!</Typography>
                        <SvgIcon component={HackMtyLogo} inheritViewBox   sx={{height: '10vh', maxWidth: '100%', width: 'auto'}}/>
                        <Typography fontSize={'clamp(0.2rem, 2vw + 1rem, 1.3rem)'} fontWeight={400} color="primary.main">Whether it's your first hackathon or you're an experienced hacker, HackMTY is perfect for you and there's no entry fee.</Typography>
                    </Box>
                </Box>
                <Box marginTop='15vh' sx={{backgroundColor:"white", width: {xs: '80%', sm: '60%'}, display:'block', px:'clamp(1rem, 1vw + 1rem, 4rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.5rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>Map</Typography>
                </Box>
                <Box display='flex' sx={{width:'80%', flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'3vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'3vw'}>
                   <MapComponent position={[25.650879335256544, -100.28725971757876]} zoom={16} markers={[{position: [25.6506, -100.28735], color:'purple', popupText: 'Arena Borregos' },]}></MapComponent>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage;