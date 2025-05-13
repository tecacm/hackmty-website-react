import React from "react";
import { Box, Button, darken, SvgIcon, Typography } from "@mui/material";
import SponsorCard from "../components/SponsorCard";
import CapitalOne from '../assets/sponsors/capital-one.png';
import MLH from '../assets/partners/mlh.png';
import TitleCard from "../components/TitleCard";

function SponsorsPage() {
    return (
        <Box sx={{minHeight: '100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title="2025 Sponsors"/>
                <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: '3vw' }, marginTop: '5vh', px: '5vw', alignItems: 'center'}}>
                    <SponsorCard iconImage={CapitalOne} url={"https://www.capitalone.com"}></SponsorCard>
                </Box>
                <Typography fontWeight="700" marginY="5vh" fontSize='clamp(0.3rem, 0.8vw + 0.5rem, 1.2rem)' color="white">SEND AN EMAIL TO SPONSORS@HACKMTY.COM FOR MORE INFORMATION.</Typography>
                <Button
                sx={(theme) => ({ 
                mb: "5vh", 
                color: 'white', 
                backgroundColor: 'secondary.main', 
                transition: 'background-color 0.3s ease, color 0.3s ease', '&:hover': { 
                    backgroundColor: darken(theme.palette.secondary.main, 0.3),
                    color: "white"
                }, 
                display: 'block', 
                fontSize: 'clamp(0.2rem, 1.4vw + 1rem, 2rem)', 
                fontWeight:700, 
                textAlign:'center',
                paddingY: 'clamp(12px, 3vw, 27px)',
                textTransform:'uppercase',
                width: 'clamp(20vw, 20vw + 3rem, 60vw)',
                maxWidth: '500px',
                borderRadius: 'clamp(6px, 1vw + 1rem, 15px)',
                boxSizing: 'border-box'
                })}
                component="a" 
                href="mailto:sponsors@hackmty.com?subject=HackMTY%20Sponsor"
                >
                Sponsor
                </Button>
                <TitleCard title="Partners" margin="10vh"/>
                <Box mb="10vh" display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: '3vw' }, marginTop: '5vh', px: '5vw', alignItems: 'center'}}>
                    <SponsorCard iconImage={MLH}></SponsorCard>
                </Box>
            </Box>
        </Box>
    )
}

export default SponsorsPage;