import { Box } from '@mui/material';
import TitleCard from "../components/TitleCard";
import MountainBg from '../components/MountainBg';
import { useI18n } from '../i18n/I18nContext';

function SchedulePage() {
  const { t } = useI18n();
  
  return (
    <Box sx={{}}>
      <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <TitleCard title={t('schedule.title', 'Schedule')}/>
        <Box display='flex' sx={{flexDirection:'row', width:'80%'}} gap={{xs: '2rem', md: '3vw'}} marginY={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
            <iframe src={t('schedule.timelineJSurl', 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vQ1R1nBQDlghdZVAIpLJy-CFoE9O8rcq_3jWU4qGhbvuTZXOjamyIzmv1UOsxp6AWosrHmaqmZTJO1t&lang=en&initial_zoom=2&width=100%25&height=650&font=https://hackmty.com/css/schedule.css')} width='100%' height='650'></iframe>
        </Box>
      </Box>
      <MountainBg />
    </Box>
  );
}

export default SchedulePage;
