import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';

type TitleBoxProps = {
  title:string;
  sxBoxProps?:SxProps;
  sxTextProps?:SxProps;
};

function TitleCard({title, sxBoxProps, sxTextProps} : TitleBoxProps) {
    const defaultSx: SxProps<Theme> = {
    marginTop:'20vh', 
    backgroundColor:'white', 
    width: {xs: '80%', sm: '60%'}, 
    display:'block', 
    px:'clamp(1rem, 1vw + 1rem, 4rem)', 
    borderRadius:'clamp(8px, 5vw + 2rem, 40px)',
    zIndex:5
  };
    return (
          <Box sx={{ ...defaultSx, ...sxBoxProps}}>
            <Typography sx={sxTextProps} fontSize={'clamp(0.4rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>{title}</Typography>
          </Box>
    )
}

export default TitleCard;