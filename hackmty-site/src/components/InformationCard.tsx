import React, { type FunctionComponent, type SVGProps } from "react";
import { Box, SvgIcon, Typography, type SxProps, type Theme } from "@mui/material";
import SponsorCard from "../components/SponsorCard";

type InformationBoxProps = {
  title:string;
  description?:string;
  iconSvg?: FunctionComponent<SVGProps<SVGSVGElement>>;
  iconImage?: string;
  url?:string;
  children?: React.ReactNode;
  sxBoxProps?:SxProps;
};

function InformationCard(info:InformationBoxProps) {
    const defaultSx: SxProps<Theme> = {
      backgroundColor:"white", 
      width: {xs: 'calc(100vw - 12rem)', sm: '60%'}, 
      display:'inline-flex',
      flex:1, 
      flexDirection:'column', 
      px:'clamp(5rem, 3vw + 3rem, 8rem)', 
      borderRadius:'clamp(6px, 5vw + 2rem, 15px)', 
      justifyContent:'flex-start', 
      justifyItems:'center', 
      paddingY:'2vh', 
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-10px)', 
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'
      }
    };
    return (
          <Box component="a" href={info.url} sx={{ ...defaultSx, ...info.sxBoxProps}}>
              <Typography sx={{textTransform:'uppercase', minHeight: info.iconImage || info.iconSvg ? '5rem' : undefined}} fontSize={'clamp(0.2rem, 2vw + 2rem, 1.5rem)'} fontWeight={700} color="primary.main">{info.title}</Typography>
              {info.iconSvg ? (<SvgIcon component={info.iconSvg} inheritViewBox   sx={{height: '10vh', maxWidth: '100%', width: 'auto'}}/>) : info.iconImage ? (<Box component="img" src={info.iconImage} sx={{height: '10vh', maxWidth: '100%', width: 'auto'}}/>) : null}
              {info.description && (
                  <>
                    {info.description.split('\n').map((line, index) => (
                      <Typography
                        key={index}
                        fontSize={'clamp(0.2rem, 2vw + 1rem, 1.3rem)'}
                        fontWeight={400}
                        color="primary.main"
                      >
                        {line}
                      </Typography>
                    ))}
                  </>
                )}
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} width={'100%'}>
              {info.children}
            </Box>
        </Box>
    )
}

export default InformationCard;