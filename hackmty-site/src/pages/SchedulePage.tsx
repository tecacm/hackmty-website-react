import { Box } from "@mui/material";
import InformationCard from "../components/InformationCard";
import TitleCard from "../components/TitleCard";
import FeatherRain from "../components/FeatherRain";


function SchedulePage() {
    return (
        <Box sx={{}}>
            <FeatherRain/>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <TitleCard title="Schedule"/>
                <Box display='flex' sx={{flexDirection:{xs:'column', md:'row'}}} gap={{xs: '2rem', md: '3vw'}} marginTop={'5vh'} alignItems={{xs: 'center', md: 'stretch'}} mx={'5vw'}>
                    <InformationCard title="Coming Soon" description="Stay tuned to our social media!"></InformationCard>
                </Box>
            </Box>
        </Box>
    )
}

export default SchedulePage;