import React, { useEffect } from "react";
import { Box, CircularProgress, Fade, SvgIcon, Typography } from "@mui/material";
import ControlledAccordions, { type AccordionEntry } from "../components/ControlledAccordions";
import TitleCard from "../components/TitleCard";
import AnimateOnView from "../components/AnimateOnView";



function FAQPage() {
     const [data, setData] = React.useState<AccordionEntry[] | null>(null);

      useEffect(() => {
        fetch("/data/faq.json")
          .then((res) => res.json())
          .then((json: AccordionEntry[]) => setData(json))
          .catch((err) => {
            console.error("Failed to load winners:", err);
            setData([]);
          });
      }, []);

      if (!data) {
        return (
          <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20vh' }}>
              <CircularProgress size={80} sx={{ color: 'white' }}/>
          </Box>
        );
      }

    return (
        <Box sx={{}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'5vh'}}>
                <TitleCard title="FAQ"></TitleCard>
                <AnimateOnView transition={Fade} transitionProps={{timeout:1000}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <ControlledAccordions data={data} sxBoxProps={{maxWidth:'70%', marginBottom:'5vh'}}></ControlledAccordions>
                    </Box>
                </AnimateOnView>
            </Box>
        </Box>
    )
}

export default FAQPage;