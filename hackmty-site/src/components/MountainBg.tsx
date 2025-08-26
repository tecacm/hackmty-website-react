import { Box, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cerro from "../assets/cerro_morado.svg?react";
import Sun from "../assets/sun.svg?react";
import CloudA from "../assets/cloud_a.svg?react";
import CloudB from "../assets/cloud_b.svg?react";
import CloudBottom from "../assets/cloud_bottom.svg?react";
import { useTheme } from '@mui/material/styles';

type MountainBgProps = {
  elementRef?: React.RefObject<HTMLDivElement | null>;
};

function MountainBg({elementRef} : MountainBgProps) {
    const [carrouselVisible, setMountainVisible] = useState(true);
    const theme = useTheme();
    var isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const showCerro = elementRef ? !carrouselVisible : true;

    useEffect(() => {
        if (!elementRef || !elementRef.current) return;

        const observer = new IntersectionObserver(
        ([entry]) => {
            setMountainVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
        );

        observer.observe(elementRef.current);

        return () => {
        if (elementRef.current) {
            observer.unobserve(elementRef.current);
        }
        };
    }, [elementRef]);
    
    return (
        <Box
                display={"flex"}
                width="100vw"
                height="100vh"
                position="fixed"
                sx={{ pointerEvents: 'none' }} // optional, if it shouldn't block interaction
                zIndex={-4}
                >     
                    <Box
                        sx={{
                            position: 'fixed',
                            bottom: isMobile ? 40 : 100,
                            left: "-6vw",
                            transform: `${showCerro ? 'translateY(-200px)' : 'translateY(500px)'}`,
                            opacity: showCerro ? 1 : 0,
                            transition: 'opacity 2s ease, transform 1s ease',
                        }}
                    >
                        <CloudA
                            style={{
                            width: "clamp(300px, 80vw, 800px)",
                            height:"auto",
                            animation: 'cloudFloat0 8s ease-in-out infinite alternate',
                            zIndex: -4,
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: 'fixed',
                            bottom: isMobile ? -90 : -80,
                            right: "-20vw",
                            transform: `${showCerro ? 'translateY(-200px)' : 'translateY(500px)'}`,
                            opacity: showCerro ? 1 : 0,
                            transition: 'opacity 2s ease, transform 1s ease',
                        }}
                    >
                        <CloudB
                            style={{
                            animation: 'cloudFloat1 8s ease-in-out infinite alternate',
                            zIndex: -4,
                            width: "clamp(200px, 70vw, 750px)",
                            height:"auto"
                            }}
                        />
                    </Box>
                    <Box     
                    width="100vw"
                    height="100vh"
                    display={'flex'}           
                    alignItems="center"
                    justifyContent="center"
                    >
                        <Sun
                        style={{
                            position: 'fixed',
                            bottom: isMobile ? -50 : 10, // your original vertical offset
                            transform: `${showCerro ? 'translate(0%, 0)' : 'translate(0%, 500px)'}`,
                            scale: '0.6',
                            zIndex: -6,
                            opacity: showCerro ? 1 : 0,
                            transition: 'opacity 2s ease, transform 1s ease',
                            textAlign: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}/>
                        <Cerro
                        style={{
                            position: 'fixed',
                            bottom: isMobile ? -280 : -200, // your original vertical offset
                            transform: `${showCerro ? 'translate(3%, 0)' : 'translate(3%, 500px)'}`,
                            scale: '0.6',
                            zIndex: -5,
                            opacity: showCerro ? 1 : 0,
                            transition: 'opacity 2s ease, transform 1s ease',
                            textAlign: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        />
                        <Box
                        sx={{
                            position: 'fixed',
                            bottom: "-28vh",
                            transform: `${showCerro ? 'translateY(-200px)' : 'translateY(500px)'}`,
                            opacity: showCerro ? 1 : 0,
                            transition: 'opacity 2s ease, transform 1s ease',
                        }}
                        >
                            <CloudBottom
                                style={{
                                zIndex: -4,
                                width: "clamp(300px, 100vw, 800px)",
                                height:"auto",
                                animation: 'cloudFloat2 8s ease-in-out infinite alternate',
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
    )
}

export default MountainBg;