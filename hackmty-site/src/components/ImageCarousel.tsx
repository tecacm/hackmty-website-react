import { Box } from "@mui/material";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


type CarouselProps = {
  slideImages:string[];
};

export default function ImageCarousel({slideImages}:CarouselProps) {
  return (
    <Box sx={{ width: "100%" , height:"100%"}} position={'absolute'}>
      <Slide easing="cubic" autoplay duration={5000} arrows={false} infinite transitionDuration={1000}>
        {slideImages.map((slide) => (
          <Box
            key={slide}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: `url(${slide})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
              zIndex:-1,
              height: '140vh',
              width:'100%',
              overflow: "hidden",
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              },
            }}
          />
        ))}
        </Slide>
        <Box
            sx={(theme) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(29, 4, 31, 0.5), rgba(55, 27, 58, 0.7))',
            zIndex: 0,
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            [theme.breakpoints.down("md")]: {
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              },
            
            })}
        />
    </Box>
  );
}
