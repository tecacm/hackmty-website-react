import { useEffect, useState } from "react";
import { Box, Button, darken, Fade, Typography } from "@mui/material";
import SponsorCard from "../components/SponsorCard";
import TitleCard from "../components/TitleCard";
import AnimateOnView from "../components/AnimateOnView";
import MountainBg from "../components/MountainBg";

interface SponsorEntry {
  svgIcon?: string;
  imgIcon?: string;
  url?: string;
}

function SponsorsPage() {
    const [sponsors, setSponsors] = useState<SponsorEntry[]>([]);

    useEffect(() => {
        fetch('/data/sponsors.json')
        .then((res) => res.json())
        .then((data) => setSponsors(data))
        .catch((err) => console.error('Error loading sponsor data:', err));
    }, []);

    const [partners, setPartners] = useState<SponsorEntry[]>([]);

    useEffect(() => {
        fetch('/data/partners.json')
        .then((res) => res.json())
        .then((data) => setPartners(data))
        .catch((err) => console.error('Error loading sponsor data:', err));
    }, []);

    return (
        <Box sx={{minHeight: '100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title="2025 Sponsors"/>
                <AnimateOnView transition={Fade} transitionProps={{timeout:1000}}>
                    <Box display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: '3vw' }, marginTop: '5vh', px: '5vw', alignItems: 'center'}}>
                        {
                            sponsors.map((sponsor, index) => {
                            const iconUrl = sponsor.svgIcon || sponsor.imgIcon;
                            if (!iconUrl) return null;
                            return (
                            <SponsorCard
                                key={index}
                                iconSvg={sponsor.svgIcon}
                                iconImage={sponsor.imgIcon}
                                url={sponsor.url}
                            />
                            );
                        })}
                    </Box>
                </AnimateOnView>
                <Typography fontWeight="700" zIndex="5" marginY="5vh" fontSize='clamp(0.3rem, 0.8vw + 0.5rem, 1.2rem)' color="white">SEND AN EMAIL TO HELLO@HACKMTY.COM FOR MORE INFORMATION.</Typography>
                <Button
                    sx={(theme) => ({ 
                    mb: "5vh", 
                    color: 'white', 
                    backgroundColor: 'secondary.main', 
                    transition: 'background-color 0.3s ease, color 0.3s ease', '&:hover': { 
                        backgroundColor: darken(theme.palette.secondary.main, 0.3),
                        color: "white"
                    }, 
                    zIndex: 5,
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
                    href="mailto:hello@hackmty.com?subject=HackMTY%20Sponsor"
                    >
                    Sponsor
                </Button>
                <TitleCard title="Partners" sxBoxProps={{marginTop:'10vh'}}/>
                <AnimateOnView transition={Fade} transitionProps={{timeout:1000}}>
                    <Box mb="10vh" display="flex" sx={{ flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: '3vw' }, marginTop: '5vh', px: '5vw', alignItems: 'center'}}>
                        {
                            partners.map((partner, index) => {
                            const iconUrl = partner.svgIcon || partner.imgIcon;
                            if (!iconUrl) return null;
                            return (
                            <SponsorCard
                                key={index}
                                iconSvg={partner.svgIcon}
                                iconImage={partner.imgIcon}
                                url={partner.url}
                            />
                            );
                        })}
                    </Box>
                </AnimateOnView>
            </Box>
            <MountainBg></MountainBg>
        </Box>
    )
}

export default SponsorsPage;