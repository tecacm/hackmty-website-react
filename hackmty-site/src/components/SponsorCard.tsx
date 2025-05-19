import { Box } from "@mui/material";

type SponsorBoxProps = {
  iconSvg?: string;
  iconImage?: string;
  url?:string;
};

function SponsorCard(sponsor:SponsorBoxProps) {
    return (
          <Box component="a" href={sponsor.url} zIndex={5} target="_blank" rel="noopener noreferrer" sx={{ backgroundColor: 'white', width: 'clamp(20vw, 40vw + 2rem, 60vw)', aspectRatio: '1', minHeight: '150px', maxWidth: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 'clamp(6px, 1vw + 1rem, 15px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', '&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}> 
                    {sponsor.iconSvg ? (
                        <Box
                        component="img"
                        src={sponsor.iconSvg}
                        sx={{
                        height: '60%',
                        width: 'auto',
                        maxWidth: '90%',
                        }}
                    />) : sponsor.iconImage ? (
                        <Box
                        component="img"
                        src={sponsor.iconImage}
                        sx={{
                        height: '60%',
                        width: 'auto',
                        maxWidth: '90%',
                        }}
                        />
                    ) : null
                    }
            </Box>
    )
}

export default SponsorCard;