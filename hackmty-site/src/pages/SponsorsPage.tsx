import React from "react";
import { Box, SvgIcon, Typography } from "@mui/material";
import SponsorCard from "../components/SponsorCard";
import CapitalOne from '../assets/sponsors/capital-one.png';
import TitleCard from "../components/TitleCard";

function SponsorsPage() {
    return (
        <Box sx={{minHeight: '100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title="2025 Sponsors"/>
                <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: '3vw' }, marginTop: '5vh', px: '5vw', alignItems: 'center'}}>
                        <SponsorCard iconImage={CapitalOne} url={"https://www.capitalone.com"}></SponsorCard>
                    </Box>

            </Box>

        </Box>
    )
}

export default SponsorsPage;