import { useEffect, useRef } from "react";
import { Box, Button, Fade, Grow, Typography } from "@mui/material";
import Countdown from '../components/Countdown'
import MapComponent from "../components/MapComponent";
import InformationCard from "../components/InformationCard";
import TitleCard from "../components/TitleCard";
import 'react-slideshow-image/dist/styles.css'
import ImageCarousel from "../components/ImageCarousel";
import MailChimpSignUp from "../components/MailChimpSignUp";
import InstagramEmbed from "../components/InstagramEmbed";
import AnimateOnView from "../components/AnimateOnView";
import MountainBg from "../components/MountainBg";
import PCCodeIcon from '../assets/icons/code-laptop.svg?react';
import People from '../assets/icons/people.svg?react';
import PartyPopper from '../assets/icons/party-popper.svg?react';
import { withBase } from "../utils/Utils";
//import StepperSection from "../components/StepperSection"
import { useI18n } from "../i18n/I18nContext";

const HackMtyLogo = withBase('/images/hackmty-logo.webp');

function LandingPage() {
        const { t, lang } = useI18n();
        //const [registrationSteps, setRegistrationSteps] = useState<string[]>([]);

        useEffect(() => {
                // Load language-specific steps if present, fallback to default
                const url = withBase(`/data/registration-steps${lang === 'es' ? '.es' : ''}.json`);
                fetch(url)
            .then((res) => res.json())
           /*.then((data: string[]) => setRegistrationSteps(data))
                        .catch(() => {
                            fetch(withBase('/data/registration-steps.json'))
                                .then((res) => res.json())
                                .then((data: string[]) => setRegistrationSteps(data))
                                .catch(() => setRegistrationSteps([]));
                        });*/
        }, [lang]);

    const images:string[] = [
        withBase('/images/buildings/rectoria.webp'),
        withBase('/images/buildings/pavoreal.webp'),
        withBase('/images/buildings/ciap.webp'),
        withBase('/images/buildings/2024photo.webp'),
        withBase('/images/buildings/skyview.webp'),
    ];
    
    const carrouselRef = useRef<HTMLDivElement | null>(null);
    return (
        <Box sx={{ minHeight: '100vh' }} paddingBottom={'10vh'}>
            <Box
                ref={carrouselRef} 
                position="relative"
                paddingY="5vh"
                sx={{
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                textShadow: '0px 10px 20px rgba(0, 0, 0, 0.92)',
                zIndex:5,
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '12px', // border thickness
                    background: 'linear-gradient(90deg, rgba(209,152,54,1) 0%, rgba(250,229,192,1) 50%, rgba(209,152,54,1) 100%)',
                    },
                }}
            >
                <ImageCarousel slideImages={images}></ImageCarousel>
                <AnimateOnView transition={Grow} timeout={500}>
                    <Box position={'relative'}>
                        <Box id="hack-logo" sx={{ textAlign:'center', mt:'15vh', mb:'50px' }}>
                            <Box component="img" src={HackMtyLogo} alt="HackMTY Logo" sx={{mr: 1, height:'40vh', transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.10)'}, filter: 'drop-shadow(0px 16px 16px rgba(0, 0, 0, 0.17))'}}/>
                        </Box>
                        <Box id="countdown-and-location" sx={{textShadow: '0px 16px 16px rgba(0, 0, 0, 0.39)'}}>
                            <Countdown dateTime="2025-10-24T20:00:00" wordFormat="full" numberFormat={false} sxBoxProps={{ paddingY:'2vh'}}/>
                            <Typography sx={{marginTop:10, color:'white', fontSize:'clamp(0.3rem, 3vw + 2rem, 9rem)', fontWeight:700, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.05)'}}}>{t('landing.date', 'October ')} 24-26</Typography>
                            <Typography sx={{marginTop:0, color:'white', fontSize:'clamp(0.2rem, 0.7vw + 0.8rem, 3rem)', fontWeight:500, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px)'}}}>{t('landing.description', '36 hour long Hackathon @Tec de Monterrey, Monterrey NL')}</Typography>
                            <Typography sx={{marginTop:5, color:'white', fontSize:'clamp(0.3rem, 2vw + 1.4rem, 7rem)', fontWeight:700, transition: 'transform 0.3s ease','&:hover': {transform: 'translateY(-10px) scale(1.05)'}}}>{t('landing.subtitle', '10 Years of Hacking')}</Typography>
                        </Box>
                    </Box>
                </AnimateOnView>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title={t('section.about', 'About us')}></TitleCard>
                <AnimateOnView transition={Fade} timeout={500}>
                    <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                        <InformationCard title={t('landing.cards.awesome.title', 'What makes us awesome')} iconSvg={PCCodeIcon} iconColor="secondary.main" description={t('landing.cards.awesome.desc', 'We are the largest student hackathon in Mexico. Hosted by Tec de Monterrey, ranked 5 stars by QS, in the top 140 universities worldwide and top 10 in Latin America.')}></InformationCard>
                        <InformationCard title={t('landing.cards.expect.title', 'Expect great things')} iconSvg={PartyPopper} iconColor="secondary.main" description={t('landing.cards.expect.desc', "We'll have mentors from different companies, and a great atmosphere for learning something new. We'll have many activities and ways to communicate to make the best out of this event for you!")}></InformationCard>
                        <InformationCard title={t('landing.cards.welcome.title', 'All students welcome!')} iconSvg={People} iconColor="secondary.main" description={t('landing.cards.welcome.desc', "Whether it's your first hackathon or you're an experienced hacker, HackMTY is perfect for you and there's no entry fee.")}></InformationCard>
                    </Box>
                </AnimateOnView>
                <TitleCard title={t('cta.registrationClosed', 'Registration Closed')}></TitleCard>
                
                <TitleCard title={t('section.map', 'Map')} sxBoxProps={{marginTop:'15vh'}}></TitleCard>
                <Box display='flex' sx={{width:'80%', flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'3vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'3vw'}>
                    <MapComponent position={[25.650879335256544, -100.28725971757876]} zoom={16} markers={[{position: [25.6506, -100.28735], color:'purple', popupText: 'Arena Borregos' },]}></MapComponent>
                </Box>
            </Box>
            <Box marginTop={'15vh'} sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'8vw', flexDirection:{xs:'column', md:'column', lg:'row'}}}>
                <Box sx={{ flex: 1, maxWidth: '600px', width: {md:'60%', lg:'80%'}}}>
                    <InstagramEmbed url="https://www.instagram.com/reel/DL0hx7ChrFI/?utm_source=ig_embed&amp;utm_campaign=loading" />
                </Box>

                <AnimateOnView transition={Fade} timeout={500}>
                    <Box gap='5vh' sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                        <section id="subscribe-to-hackmty">
                        <TitleCard title={t('section.subscribe', 'Subscribe')} sxBoxProps={{marginTop:'1vh', width:{xs:'80%', sm: '90%'}}}></TitleCard>
                        </section>
                        <MailChimpSignUp sxBoxProps={{maxWidth:'100%', '&:hover':{}}}/>
                        <section id="contact-us">
                        <TitleCard title={t('section.contactUs', 'Contact Us')} sxBoxProps={{marginTop:'1vh', width:{xs:'80%', sm: '90%'}}}></TitleCard>
                        </section>
                        <InformationCard title={t('landing.questions.title', 'Got any questions?')} description={t('landing.questions.desc', 'Contact us at hello@hackmty.com')} sxBoxProps={{width:'100%', px:'1vw', backgroundColor:'inherit', '&:hover':{}}} sxTitleTextProps={{color:'white'}} sxDescriptionTextProps={{color:'white'}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{marginTop: '2vh', paddingY:'1.3vh', borderRadius: 'clamp(6px, 1vw + 1rem, 15px)'}}
                                component="a" 
                                href="mailto:hello@hackmty.com?subject=HackMTY"
                                >
                                <Typography noWrap color="white" sx={{ width: '100%', textAlign: 'center', fontSize: 'clamp(0.8rem, 0.2vw + 0.5rem, 1rem)' }}>
                                    {t('subscribe.emailCta', 'Send Email')}
                                </Typography>
                            </Button>
                        </InformationCard>                    
                    </Box>
                </AnimateOnView>
                <MountainBg elementRef={carrouselRef}></MountainBg>
            </Box>     
        </Box>
    )
}

export default LandingPage;