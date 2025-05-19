import React, { useEffect, useRef, useState } from "react";
import { Box, Button, darken, Fade, Grow, Slide, SvgIcon, Typography, Zoom } from "@mui/material";
import HackMtyLogo from '../assets/hackmty-logo.svg?react';
import Countdown from '../components/Countdown'
import MapComponent from "../components/MapComponent";
import InformationCard from "../components/InformationCard";
import TitleCard from "../components/TitleCard";
import 'react-slideshow-image/dist/styles.css'
import ImageCarousel from "../components/ImageCarousel";
import MailChimpSignUp from "../components/MailChimpSignUp";
import InstagramEmbed from "../components/InstagramEmbed";
import AnimateOnView from "../components/AnimateOnView";
import FeatherRain from "../components/FeatherRain";


function LandingPage() {
    const images:string[] = [
        '/images/buildings/rectoria.webp',
        '/images/buildings/pavoreal.webp',
        '/images/buildings/ciap.webp',
        '/images/buildings/2024photo.webp',
        '/images/buildings/skyview.webp',
    ];

    return (
        <Box sx={{ minHeight: '100vh' }} paddingBottom={'10vh'}>
            <Box
                position="relative"
                paddingY="5vh"
                sx={{
                width: '100%',
                height: '120vh',
                overflow: 'hidden',
                textShadow: '0px 10px 20px rgba(0, 0, 0, 0.92)',
                zIndex:5
                }}
            >
                <ImageCarousel slideImages={images}></ImageCarousel>
                <AnimateOnView transition={Grow} timeout={500}>
                    <Box position={'relative'}>
                        <div style={{textAlign:'center', marginTop:'15vh', marginBottom:50}} id="hack-logo">
                            <SvgIcon component={HackMtyLogo} inheritViewBox sx={{mr: 1, fontSize:'40vh', transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.10)'}, filter: 'drop-shadow(0px 16px 16px rgba(0, 0, 0, 0.17))'}}/>
                        </div>
                        <Box id="countdown-and-location" sx={{textShadow: '0px 16px 16px rgba(0, 0, 0, 0.39)'}}>
                            <Countdown dateTime="2025-10-24T11:00:00" wordFormat="full" numberFormat={false} sxBoxProps={{ paddingY:'2vh'}}/>
                            <Typography sx={{marginTop:10, color:'white', fontSize:'clamp(0.3rem, 3vw + 2rem, 9rem)', fontWeight:700, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.05)'}}}>October 24-26</Typography>
                            <Typography sx={{marginTop:0, color:'white', fontSize:'clamp(0.2rem, 0.8vw + 0.8rem, 3rem)', fontWeight:400, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px)'}}}>Hackathon @Tec de Monterrey, Monterrey NL</Typography>
                            <Typography sx={{marginTop:5, color:'white', fontSize:'clamp(0.3rem, 2vw + 1.4rem, 7rem)', fontWeight:700, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.05)'}}}>10 Years of Hacking</Typography>
                        </Box>
                    </Box>
                </AnimateOnView>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title="About us"></TitleCard>
                <AnimateOnView transition={Fade} timeout={500}>
                    <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                        <InformationCard title="What makes us awesome" iconSvg={HackMtyLogo} description="We are the largest student hackathon in Mexico. Hosted by Tec de Monterrey, ranked 5 stars by QS, in the top 140 universities worldwide and top 10 in Latin America."></InformationCard>
                        <InformationCard title="Expect great things" iconSvg={HackMtyLogo} description="We'll have mentors from different companies, and a great atmosphere for learning something new. We'll have many activities and ways to communicate to make the best out of this event for you!"></InformationCard>
                        <InformationCard title="All students welcome!" iconSvg={HackMtyLogo} description="Whether it's your first hackathon or you're an experienced hacker, HackMTY is perfect for you and there's no entry fee."></InformationCard>
                    </Box>
                </AnimateOnView>
                <TitleCard title="How to register"></TitleCard>
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <InformationCard title="Coming Soon" description={'Stay tuned to our social media!' + '\n' + 'Or click here to subscribe to our mailing list to know first!'} url="#subscribe-to-hackmty"></InformationCard>
                </Box>
                <TitleCard title="Map" sxBoxProps={{marginTop:'15vh'}}></TitleCard>
                <Box display='flex' sx={{width:'80%', flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'3vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'3vw'}>
                    <MapComponent position={[25.650879335256544, -100.28725971757876]} zoom={16} markers={[{position: [25.6506, -100.28735], color:'purple', popupText: 'Arena Borregos' },]}></MapComponent>
                </Box>
            </Box>
            <Box marginTop={'15vh'} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'8vw', flexDirection:{xs:'column', md:'column', lg:'row'}}}>
                <Box sx={{ flex: 1, maxWidth: '600px', width: {md:'60%', lg:'80%'}}}>
                    <InstagramEmbed url="https://www.instagram.com/reel/C74j00LuKPR/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </Box>

                <AnimateOnView transition={Fade} timeout={500}>
                    <Box gap='5vh' sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <section id="subscribe-to-hackmty"/>
                        <TitleCard title="Subscribe" sxBoxProps={{marginTop:'1vh', width:'100%'}}></TitleCard>
                        <MailChimpSignUp sxBoxProps={{maxWidth:'100%', '&:hover':{}}}/>

                        <section id="contact-us"/>
                        <TitleCard title="Contact Us" sxBoxProps={{marginTop:'1vh', width:'100%'}}></TitleCard>
                        <InformationCard title="Got any questions?" description="Contact us at hello@hackmty.com" sxBoxProps={{width:'100%', px:'1vw', backgroundColor:'inherit', '&:hover':{}}} sxTitleTextProps={{color:'white'}} sxDescriptionTextProps={{color:'white'}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{marginTop: '2vh', paddingY:'1.3vh', borderRadius: 'clamp(6px, 1vw + 1rem, 15px)'}}
                                component="a" 
                                href="mailto:hello@hackmty.com?subject=HackMTY"
                                >
                                <Typography noWrap color="white" sx={{ width: '100%', textAlign: 'center', fontSize: 'clamp(0.8rem, 0.2vw + 0.5rem, 1rem)' }}>
                                    Send Email
                                </Typography>
                            </Button>
                        </InformationCard>                    
                    </Box>
                </AnimateOnView>
            </Box>
        </Box>
    )
}

export default LandingPage;