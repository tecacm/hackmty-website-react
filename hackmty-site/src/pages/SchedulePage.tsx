import { Box } from "@mui/material";
import InformationCard from "../components/InformationCard";
import TitleCard from "../components/TitleCard";
import FeatherRain from "../components/FeatherRain";
import { useI18n } from "../i18n/I18nContext";


function SchedulePage() {
    const { t } = useI18n();
    return (
        <Box sx={{}}>
            <FeatherRain/>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title={t('schedule.title', 'Schedule')}/>
                <Box display='flex' sx={{flexDirection:'row', width:'80%'}} gap={{xs: '2rem', md: '3vw'}} marginY={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vSy30Wadov_Tzsk8Km7sFpPa1tgYGvybv-vfiPHGX3LGwmQPPjKMv2GYXUJByYXi_HGw1rpZ3etjlvO&font=https://fonts.googleapis.com/css2?family=Montserrat&lang=en&initial_zoom=2&width=100%25&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
                </Box>
            </Box>
        </Box>
    )
}

export default SchedulePage;