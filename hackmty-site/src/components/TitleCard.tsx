import { Box, Typography } from "@mui/material";

type TitleBoxProps = {
  title:string;
  margin?:string;
  bgColor?:string;
};

function TitleCard({title, margin="20vh", bgColor="white"} : TitleBoxProps) {
    return (
          <Box marginTop={margin} sx={{backgroundColor:bgColor, width: {xs: '80%', sm: '60%'}, display:'block', px:'clamp(1rem, 1vw + 1rem, 4rem)', borderRadius:'clamp(8px, 5vw + 2rem, 40px)'}}>
            <Typography fontSize={'clamp(0.4rem, 2vw + 2rem, 5rem)'} fontWeight={700} color="secondary.main" textTransform={'uppercase'}>{title}</Typography>
          </Box>
    )
}

export default TitleCard;