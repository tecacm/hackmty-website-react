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
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <InformationCard title={t('schedule.comingSoon', 'Coming Soon')} description={t('schedule.stayTuned', 'Stay tuned to our social media!')}></InformationCard>
                </Box>
            </Box>
        </Box>
    )
}

export default SchedulePage;