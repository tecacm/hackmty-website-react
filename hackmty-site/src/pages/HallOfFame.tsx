import React, { useEffect} from "react";
import { Box, CircularProgress, Fade, Slide, Tab, Tabs } from "@mui/material";
import WinnerCard from "../components/WinnerCard";
import TitleCard from "../components/TitleCard";
import AnimateOnView from "../components/AnimateOnView";

interface WinnerEntry {
  placement: string;
  cardColor: string;
  teamPicture: string;
  teamName: string;
  projectName: string;
  projectDescription: string;
  projectURL: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
    {value === index && (
        <Box
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3vh',
          }}
        >
          {children}
        </Box>
      )}
      </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type WinnersData = Record<string, WinnerEntry[]>;

function HallOfFame() {
  const [data, setData] = React.useState<WinnersData | null>(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch("/data/winners.json")
      .then((res) => res.json())
      .then((json: WinnersData) => setData(json))
      .catch((err) => {
        console.error("Failed to load winners:", err);
        setData({});
      });
  }, []);
  // if data hasn't loaded yet
  if (!data) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20vh' }}>
          <CircularProgress size={80} sx={{ color: 'white' }}/>
      </Box>
    );
  }
  const years = Object.keys(data).sort((a, b) => b.localeCompare(a)); // latest year first

  return (
    <AnimateOnView transition={Slide} transitionProps={{direction:'down'}}>
    <Box display={'flex'} marginTop='5vh' sx={{minHeight: '100vh', justifyContent:'center', justifyItems:'center', paddingY:'10vh', alignItems: 'flex-start'}}>
        <Box sx={{backgroundColor: 'white', borderRadius:'2vw', boxShadow: '0px 10px 100px rgba(0, 0, 0, 0.15)'}} height={'auto'} display={'flex'} width={'80%'} justifyItems={'center'} justifyContent={'center'} flexDirection='column' paddingBottom={'10vh'}>
          <Box maxWidth={"100%"} sx={{borderRadius:'2vw', boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.15)'}}>
              <Tabs orientation='horizontal' value={value} onChange={handleChange} sx={{borderTopLeftRadius:'1vw', borderTopRightRadius:'1vw', backgroundColor: "rgb(70, 24, 106)", '& .MuiTabs-scrollButtons': {color: 'white', width:'4vh', height:'auto', aspectRatio:1}, [`& .MuiTabs-flexContainer`]: { justifyContent: {lg: "flex-start", xl: "center"}},}} allowScrollButtonsMobile indicatorColor="secondary" variant={"scrollable"} scrollButtons="auto" aria-label="Winners through the years">
                {years.map((year, index) => (
                  <Tab key={year} label={year} sx={{textShadow: '0px 5px 10px rgba(0, 0, 0, 0.46)', color:'rgb(196, 196, 196)', fontWeight:700, fontSize:'2.5vh', padding:'1.5vw', '&.Mui-selected': { color: 'white' }}} {...a11yProps(index)}/>
              ))}
              </Tabs>
          </Box>
          <Box>
              {years.map((year, index) => (
              <CustomTabPanel key={year} value={value} index={index}>
                <TitleCard title={year + " Winners"} sxTextProps={{color:'rgb(70, 24, 106)'}} sxBoxProps={{marginTop:'0', backgroundColor:'inherit', textShadow: '0px 10px 10px rgba(0, 0, 0, 0.15)', transition: 'transform 0.3s ease, text-shadow 0.3s ease', '&:hover': {transform: 'translateY(-10px)', textShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}></TitleCard>
              {data[year].map((winner, i) => (
                <AnimateOnView transition={Fade}>
                <WinnerCard
                  key={i}
                  teamPicture={winner.teamPicture}
                  projectURL={winner.projectURL}
                  teamName={winner.teamName}
                  placement={winner.placement}
                  projectName={winner.projectName}
                  projectDescription={winner.projectDescription}
                  cardColor={winner.cardColor}
                />
                </AnimateOnView>
              ))}
            </CustomTabPanel>
          ))}
          </Box>
        </Box>
    </Box>
    </AnimateOnView>
  );
}

export default HallOfFame;