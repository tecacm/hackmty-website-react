import { Box, emphasize, Typography } from "@mui/material";
import Color from 'color';

type WinnerBoxProps = {
  teamPicture: string;
  projectURL:string;
  teamName:string;
  placement:string;
  projectName:string;
  projectDescription:string;
  cardColor:string;
};

function WinnerCard(winner:WinnerBoxProps) {
    const hexColor = winner.cardColor.startsWith('#') ? winner.cardColor : Color(winner.cardColor).hex();
    let color = emphasize(hexColor, 0.1);
    
    return (
          <Box maxWidth='90%' bgcolor={color} display='flex' flexDirection={'column'} component="a" href={winner.projectURL} target="_blank" rel="noopener noreferrer" paddingY='3vh' paddingX='6vw' sx={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)', width: 'clamp(1vw, 30vw + 40rem, 60vw)', minHeight: '200px', maxHeight: '80vh', justifyContent: 'center', alignItems: 'center', borderRadius: 'clamp(6px, 1vw + 1rem, 15px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}> 
                    <Typography 
                     color="white"
                     fontWeight={700}
                     sx={{ fontSize: 'clamp(1rem, 2vw + 0.5rem, 2rem)'}}
                     >
                        {winner.placement}
                     </Typography>
                    {
                    winner.teamPicture ? (
                        <Box
                        component="img"
                        src={winner.teamPicture}
                        alt={"Picture of " + winner.teamName}
                        sx={{
                        height: 'auto',
                        maxHeight: '40vh',
                        borderRadius:'2vh',
                        borderColor:'secondary.main',
                        objectFit: 'contain', 
                        maxWidth:'60vw'
                        }}
                        border={'1.5vw solid'}
                        marginY={'1vh'}
                        />
                    ) : null
                    }
                    <Typography color="white"
                    sx={{ fontSize: 'clamp(0.4rem, 1vw + 0.5rem, 1.4rem)'}}
                    >{winner.teamName}</Typography>
                    <Typography 
                    color="white" 
                    fontWeight={'700'} 
                    paddingTop={'1vh'}
                    sx={{ fontSize: 'clamp(0.4rem, 1vw + 0.5rem, 1.4rem)'}}
                    >{winner.projectName}</Typography>
                    {winner.projectDescription.split('\n').map((line, idx) => (
                    <Typography 
                    color="white" 
                    key={idx}
                    sx={{ fontSize: 'clamp(0.2rem, 1vw + 0.5rem, 1rem)'}}
                    >
                        {line}
                        <br />
                    </Typography>
                    ))}
            </Box>
    )
}

export default WinnerCard;