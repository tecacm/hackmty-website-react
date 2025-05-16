import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface InstagramEmbedProps {
  url: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

function InstagramEmbed({ url } :InstagramEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    const isScriptAdded = document.getElementById(scriptId);

    if (!isScriptAdded) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        window.instgrm?.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      // Script already present — re-process embeds
      window.instgrm?.Embeds.process();
    }
  }, [url]);

  return (
    <Box maxWidth='100%' ref={embedRef} bgcolor='white' paddingY='2vh' paddingX='0.5vw' zIndex={5} sx={{position: 'relative', borderRadius:'clamp(6px, 5vw + 2rem, 15px)', transition: 'transform 0.3s ease, box-shadow 0.3s ease','&:hover': {transform: 'translateY(-10px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.44)'}}}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          margin: '1px',
          width: '99.375%',
          zIndex:5
        }}
      ></blockquote>
    </Box>
  );
};

export default InstagramEmbed;
