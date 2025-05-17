import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, type SxProps } from '@mui/material';


export type AccordionEntry = {
  title: string;
  description: string;
}

type Props = {
  data: AccordionEntry[];
  sxBoxProps?:SxProps;
};

function ControlledAccordions({ data, sxBoxProps}: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const defaultBoxProps:SxProps = {
      borderRadius: 'clamp(6px, 1vw + 1rem, 15px)', 
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'
      },
      textAlign:'left'
  }

  return (
    <Box sx={{...defaultBoxProps, ...sxBoxProps}}>
      {data.map((item, index) => {
        const panelId = `panel${index}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography component="span" sx={{ width: '33%', flexShrink: 0, fontWeight:'700', color:'secondary.main', textTransform:'uppercase'}}>
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:"rgb(70, 24, 106)"}}>
              <Typography sx={{color:'white'}}>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

export default ControlledAccordions;
