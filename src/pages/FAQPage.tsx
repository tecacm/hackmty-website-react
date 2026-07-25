import React, { useEffect } from "react";
import { Box, CircularProgress, Fade } from "@mui/material";
import ControlledAccordions, { type AccordionEntry } from "../components/ControlledAccordions";
import TitleCard from "../components/TitleCard";
import AnimateOnView from "../components/AnimateOnView";
import MountainBg from "../components/MountainBg";
import { withBase } from "../utils/Utils";
import { useI18n } from "../i18n/I18nContext";


function FAQPage() {
     const { t, lang } = useI18n();
     const [data, setData] = React.useState<AccordionEntry[] | null>(null);

      useEffect(() => {
        const url = withBase(`/data/faq${lang === 'es' ? '.es' : ''}.json`);
        fetch(url)
          .then((res) => res.json())
          .then((json: AccordionEntry[]) => setData(json))
          .catch(() => {
            fetch(withBase("/data/faq.json"))
              .then((res) => res.json())
              .then((json: AccordionEntry[]) => setData(json))
              .catch((err) => {
                console.error("Failed to load FAQ:", err);
                setData([]);
              });
          });
      }, [lang]);

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
                <TitleCard title={t('faq.title', 'FAQ')}></TitleCard>
                <AnimateOnView transition={Fade} transitionProps={{timeout:1000}}>
                    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <ControlledAccordions data={data} sxBoxProps={{maxWidth:'70%', marginBottom:'5vh'}}></ControlledAccordions>
                    </Box>
                </AnimateOnView>
            </Box>
            
            <MountainBg></MountainBg>
        </Box>
    )
}

export default FAQPage;