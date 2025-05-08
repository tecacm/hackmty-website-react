import React from 'react';
import { Box } from '@mui/material';
export const MLHTrustBadge = () => (
  <Box
  component="a"
  href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    maxWidth: '120px',
    minWidth: '80px',
    width: '10%',
    alignSelf: 'flex-start', // THIS makes it stick to top in flex layout
    marginRight:'3rem'
  }}
>
  <Box
    component="img"
    src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
    alt="Major League Hacking 2025 Hackathon Season"
    sx={{ width: '100%' }}
  />
</Box>
);