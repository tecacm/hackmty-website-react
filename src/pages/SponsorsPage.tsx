import { Box, Typography } from '@mui/material';
import MountainBg from '../components/MountainBg';
import { useI18n } from '../i18n/I18nContext';

function SponsorsPage() {
  const { t } = useI18n();
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        textAlign: 'center',
        px: '24px',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 800,
          color: '#ffffff',
          fontSize: 'clamp(2.5rem, 9vw, 7rem)',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          zIndex: 1,
          textShadow: '0 2px 24px rgba(30,10,55,0.35)',
        }}
      >
        {t('sponsors.title', 'Sponsors')}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.70)',
          fontSize: 'clamp(0.7rem, 2vw, 1rem)',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          mt: 2.5,
          zIndex: 1,
        }}
      >
        {t('schedule.comingSoon', 'Coming Soon')}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.50)',
          fontSize: 'clamp(0.65rem, 1.2vw, 0.9rem)',
          letterSpacing: '0.08em',
          mt: 1.5,
          zIndex: 1,
        }}
      >
        {t('sponsors.moreInfo', 'SEND AN EMAIL TO HELLO@HACKMTY.COM FOR MORE INFORMATION.')}
      </Typography>
      <MountainBg />
    </Box>
  );
}

export default SponsorsPage;
