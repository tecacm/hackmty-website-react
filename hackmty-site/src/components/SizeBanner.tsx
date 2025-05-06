import { useTheme, useMediaQuery, Typography } from '@mui/material';

// used for debugging the size of things, include it before the navbar
const BreakpointBanner = () => {
  const theme = useTheme();

  const isXl = useMediaQuery(theme.breakpoints.up('xl'));
  const isLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  let current = 'xs';
  if (isXl) current = 'xl';
  else if (isLg) current = 'lg';
  else if (isMd) current = 'md';
  else if (isSm) current = 'sm';

  return (
    <Typography
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        backgroundColor: 'black',
        color: 'white',
        padding: '4px 8px',
        zIndex: 9999,
        fontSize: 12,
      }}
    >
      Breakpoint: {current}
    </Typography>
  );
};

export default BreakpointBanner;
