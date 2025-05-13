import React, { useEffect} from "react";
import { Box, CircularProgress, Tab, Tabs } from "@mui/material";
import WinnerCard from "../components/WinnerCard";
import TitleCard from "../components/TitleCard";

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
            gap: '3vh'
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
    <Box display={'flex'} marginTop='5vh' sx={{minHeight: '100vh', justifyContent:'center', justifyItems:'center', paddingY:'10vh', alignItems: 'flex-start'}}>

        <Box sx={{backgroundColor:'inherit'}} height={'auto'} display={'flex'} width={'80%'} justifyItems={'center'} justifyContent={'center'} flexDirection='column'>
          <Box sx={{ borderBottom: '20vh', borderColor: 'divider'}} maxWidth={"100%"}>
              <Tabs textColor='secondary' orientation='horizontal' value={value} onChange={handleChange} sx={{backgroundColor:"white", borderRadius:'clamp(8px, 5vw + 2rem, 40px)', '& .MuiTabs-scrollButtons': {color: 'secondary.main', width:'4vh', height:'auto', aspectRatio:1}}} allowScrollButtonsMobile indicatorColor="secondary" variant="scrollable" scrollButtons="auto" aria-label="Winners through the years">
               {years.map((year, index) => (
              <Tab key={year} label={year} sx={{fontWeight:700, fontSize:'2vh'}} {...a11yProps(index)} />
            ))}
              </Tabs>
          </Box>
          <Box>
              {years.map((year, index) => (
              <CustomTabPanel key={year} value={value} index={index}>
                <TitleCard title={year + " Winners"} margin="0"></TitleCard>
              {data[year].map((winner, i) => (
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
              ))}
            </CustomTabPanel>
          ))}
          </Box>
        </Box>
    </Box>
  );
}

export default HallOfFame;