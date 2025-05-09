import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import SponsorCard from "../components/SponsorCard";
import CapitalOne from '../assets/sponsors/capital-one.png';

function SponsorsPage() {
    return (
        <Box sx={{minHeight: '100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Box marginTop='20vh' sx={{backgroundColor:"white", width: {xs: '80%', sm: '60%'}, display:'block', px:'clamp(1rem, 1vw + 1rem, 4rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
                    <Typography fontSize={'clamp(0.4rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>2025 Sponsors</Typography>
                </Box>
                <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: '3vw' }, marginTop: '5vh', px: '5vw', alignItems: 'center'}}>
                        <SponsorCard iconImage={CapitalOne} url={"https://www.capitalone.com"}></SponsorCard>
                    </Box>

            </Box>
        </Box>
    )
}

export default SponsorsPage;