import { useEffect, useState } from "react";
import { Box, Button, Fade, Typography } from "@mui/material";
import TitleCard from "../components/TitleCard";
import AnimateOnView from "../components/AnimateOnView";
import MountainBg from "../components/MountainBg";
import { withBase } from "../utils/Utils";
import { useI18n } from "../i18n/I18nContext";


interface ContactInfo {
    name: string;
    phone?: string;
    emails?: string[];
    footnote?: string;
}


interface HotelEntry {
  name: string;
  imgIcon?: string;
  url?: string;
  contactInfo?: ContactInfo;
  infoSection: Record<string, string>[]; // title -> content
  reservationsURL?: string;
}

function HotelsPage() {
    const { t } = useI18n();
    const [hotels, setHotels] = useState<HotelEntry[]>([]);

    const slugify = (s: string) => {
        const cleaned = s.toString().trim().replace(/[^a-zA-Z0-9\s-_]+/g, ' ');
        const parts = cleaned.split(/[-_\s]+/).filter(Boolean);
        if (parts.length === 0) return '';
        const first = parts[0].toLowerCase();
        const rest = parts
            .slice(1)
            .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
            .join('');
        return `${first}${rest}`;
    };

    useEffect(() => {
        fetch(withBase('/data/hotels.json'))
        .then((res) => res.json())
        .then((data) => setHotels(data))
        .catch((err) => console.error('Error loading hotel data:', err));
    }, []);
    
    return (
        <Box sx={{minHeight: '100vh' }}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginBottom:'10vh',}}>
                <TitleCard title={`2025 ${t('hotels.title', 'Hotels')}`}/>
                <AnimateOnView transition={Fade} transitionProps={{timeout:1000}}>
                    <Box display="flex" sx={{color: 'secondary.main', flexDirection: 'column', flexWrap: 'wrap' , gap: '10vh' , marginTop: '5vh', px: '5vw', alignItems: 'center', justifyContent: 'center'}}>
                        {
                            hotels.map((hotel, index) => {
                                const iconUrl = hotel.imgIcon;
                                return (
                                  <Box key={index} display="flex" flexDirection="column" alignItems="center" py="3vh" textAlign="center" sx={{boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)', backgroundColor: 'rgba(255, 255, 255, 255)', borderRadius: '10px', width: {xs:'95vw', md:'90vw', lg:'60vw'}}}>
                                    <Typography variant="h1" sx={{textShadow:"0px 2px 4px rgba(0, 0, 0, 0.3)", fontWeight:'bold', marginBottom: '3vh'}}>{hotel.name || `Hotel ${index + 1}`}</Typography>
                                    {iconUrl && (
                                        <Box
                                            sx={{
                                            width: '100%',
                                            maxWidth: { xs: '90vw', sm: '60vw', md: '70vw', lg: '50vw' },
                                            aspectRatio: '6 / 3',
                                            borderRadius: '10px',
                                            overflow: 'hidden',
                                            position: 'relative',
                                            mb: 2,
                                            background: '#eee',
                                            }}
                                        >
                                            <Box
                                            component="img"
                                            src={withBase(iconUrl)}
                                            alt={hotel.name}
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                            />
                                        </Box>
                                        )
                                    }
                                    <Box display="flex" flexDirection={'column'} justifyContent="center" alignItems={'center'} sx={{width: '80%'}}>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>{t('hotels.contactInfo', 'Contact')}</Typography>

                                        <Box display="flex" flexDirection={'row'} justifyContent="center" alignItems={'center'} sx={{width: '80%'}}>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{t('hotels.contactName', 'Contact Name')}:{'\u00A0'}</Typography> 
                                            <Typography variant="body2" sx={{ fontSize: '1.1rem' }}>{hotel.contactInfo?.name}</Typography>
                                        </Box>
                                        {hotel.contactInfo?.phone && 
                                        <Box display="flex" flexDirection={'row'} justifyContent="center" alignItems={'center'} sx={{width: '80%'}}>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{t('hotels.phone', 'Phone')}:{'\u00A0'}</Typography> 
                                            <Typography variant="body2" component="a" href={`tel:${hotel.contactInfo?.phone}`} sx={{ color: 'inherit', fontSize: '1.1rem' }}>{hotel.contactInfo?.phone}</Typography>
                                        </Box>
                                        }
                                        
                                        {hotel.contactInfo?.emails && hotel.contactInfo.emails.map((email, emailIndex) => (

                                        <Box key={emailIndex} display="flex" flexDirection={'row'} justifyContent="center" alignItems={'center'} sx={{width: '80%'}}>
                                            <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{t('hotels.email', 'Email')}:{'\u00A0'}</Typography> 
                                            <Typography component="a" href={`mailto:${email}`} variant="body2" sx={{color: 'inherit', fontSize: '1.1rem' }}>{email}</Typography>
                                        </Box>
                                        ))
                                        }  
                                        <Box height={'4vh'}/>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.3rem' }}>{t('hotels.information', 'Information')}</Typography>
                                        {hotel.infoSection.map((info, infoIndex) => {
                                            const rawTitle = Object.keys(info)[0];
                                            const content = info[rawTitle] || '';
                                            const infoKey = `hotels.${slugify(rawTitle)}`;
                                            const translatedTitle = t(infoKey, rawTitle);
                                            const lines = content.split(/\r?\n/).filter(Boolean);
                                            return (
                                                <Box key={infoIndex} display="flex" flexDirection={'column'} justifyContent="center" alignItems={'center'} sx={{width: '80%', marginY:'1vh'}}>
                                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{translatedTitle}:{'\u00A0'}</Typography>
                                                    {lines.map((line, li) => (
                                                        <Typography key={li} variant="body2" sx={{ fontSize: '1.1rem', mt: li === 0 ? 0.5 : 0.5 }}>{line}</Typography>
                                                    ))}
                                                </Box>
                                            );
                                        })}

                                        {hotel.contactInfo?.footnote && <Typography component="em" variant="body2" sx={{ fontStyle: 'italic', fontSize: '1.1rem' }}>{hotel.contactInfo.footnote}</Typography>}                                      
                                        <Typography variant="body1" sx={{paddingY:'2vh', fontStyle: 'italic', fontSize: '1.1rem' }}>{t('hotels.disclaimer', 'Disclaimer')}</Typography>

                                        {hotel.reservationsURL && 
                                                <Button
                                                variant="contained"
                                                color="secondary"
                                                sx={{marginTop: '2vh', paddingY:'1.3vh', borderRadius: 'clamp(6px, 1vw + 1rem, 15px)'}}
                                                component="a" 
                                                href={hotel.reservationsURL}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >
                                                <Typography noWrap color="white" sx={{ width: '100%', textAlign: 'center', fontSize: 'clamp(0.8rem, 0.2vw + 0.5rem, 1rem)' }}>
                                                    {t('hotels.reserveNow', 'Reserve Now')}
                                                </Typography>
                                            </Button>
                                        }
                                    </Box>  
                                </Box>  
                            );
                        })}
                    </Box>
                </AnimateOnView>         
            </Box>
            <MountainBg></MountainBg>
        </Box>
    )
}

export default HotelsPage;