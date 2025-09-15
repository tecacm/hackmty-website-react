import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SvgIcon from '@mui/material/SvgIcon';

import { MLHTrustBadge } from './MLHTrustBadge';
import FacebookIcon from '../assets/media/facebook.svg?react';
import InstagramIcon from '../assets/media/instagram.svg?react';
import DiscordIcon from '../assets/media/discord.svg?react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { darken } from '@mui/material';
import { withBase } from '../utils/Utils';
import { useI18n } from '../i18n/I18nContext';

const HackMtyLogo = withBase('/images/hackmty-logo.webp');
const TecACMLogo = withBase('/images/tec-acm-purple-gold.webp');

interface Page {
  text: string;
  url: string;
}

function usePages(t: (k:string)=>string): Page[] {
  return [
    { text: t('nav.about'), url: '/' },
    { text: t('nav.schedule'), url: '/schedule' },
    { text: t('nav.sponsors'), url: '/sponsors' },
    { text: t('nav.hof'), url: '/halloffame' },
    { text: t('nav.faq'), url: '/faq' },
    { text: t('nav.contact'), url: '/contact-us' },
    { text: t('nav.hotels'), url: '/hotels' }
  ];
}

function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateScrollState = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    setCanScrollLeft(!atStart);
    setCanScrollRight(!atEnd);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const location = useLocation();
  const pages = usePages(t);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();

    const onScroll = () => updateScrollState();
    el.addEventListener('scroll', onScroll, { passive: true });

    // Map vertical wheel to horizontal scroll (helps Chrome users)
    const onWheel = (e: WheelEvent) => {
      if (!el) return;
      if (el.scrollWidth <= el.clientWidth) return;
      // Use whichever axis has the larger delta; fallback to deltaY
      const dominant = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (dominant !== 0) {
        el.scrollLeft += dominant;
        e.preventDefault();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });

    // Update on resize
    let ro: ResizeObserver | null = null;
    if ('ResizeObserver' in window) {
      ro = new ResizeObserver(() => updateScrollState());
      ro.observe(el);
    } else {
      const onWindowResize = () => updateScrollState();
      if (typeof window !== 'undefined' && (window as any).addEventListener) {
        (window as any).addEventListener('resize', onWindowResize);
      }
      return () => {
        el.removeEventListener('scroll', onScroll as any);
        el.removeEventListener('wheel', onWheel as any);
        if (typeof window !== 'undefined' && (window as any).removeEventListener) {
          (window as any).removeEventListener('resize', onWindowResize);
        }
      };
    }

    return () => {
      el.removeEventListener('scroll', onScroll as any);
      el.removeEventListener('wheel', onWheel as any);
      if (ro) ro.disconnect();
    };
  }, [updateScrollState]);

  return (
    <AppBar position="fixed" color='primary'>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <MLHTrustBadge/>
  <a href='#' aria-label="Go to top" title="HackMTY">
          <Box component="img" src={HackMtyLogo} sx={{ display: { xs: 'none', md: 'flex' }, mr: '2vw', height:40, 
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)', 
                  color: 'unset',
                },
            }}/>
        </a>
        <a href='https://tec.acm.org' target="_blank" rel="noopener noreferrer" aria-label="Visit Tec ACM" title="Tec ACM">
          <Box component="img" src={TecACMLogo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, height:40,
            transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.2)', 
                  color: 'unset',
                },
            }}/>
        </a>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <a href='#' aria-label="Go to top" title="HackMTY">
              <Box component="img" src={HackMtyLogo} sx={{ display: { xs: 'flex', md: 'none' }, mt:"0.5vh", mx: "2vw", height:40}}/>
            </a>
            <a href='https://tec.acm.org' target="_blank" rel="noopener noreferrer" aria-label="Visit Tec ACM" title="Tec ACM">
              <Box component="img" src={TecACMLogo} sx={{ display: { xs: 'flex', md: 'none' }, mt:"0.5vh", mr: "1vw", height:40}}/>
            </a>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{backgroundColor:'secondary.main', borderRadius:'10%', fontSize:30}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' }}}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: 'primary.main',
                    color: 'white',
                    borderRadius: 2,
                    boxShadow: 3,
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.text} onClick={handleCloseNavMenu} component={Link} to={page.url}>
                  <Typography sx={{textAlign: 'center', color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}>{page.text}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); handleCloseNavMenu(); }}>
                <Typography sx={{textAlign: 'center', color:'white'}}>{lang === 'en' ? 'ES' : 'EN'}</Typography>
              </MenuItem>

              <Box component="a" href="https://facebook.com/HackMTY/" target="_blank" paddingLeft={1.5}>
                <SvgIcon component={FacebookIcon} inheritViewBox sx={{fontSize:30, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main'}, mr:4}}/>
              </Box>
              <Box component="a" href="https://instagram.com/hackmty/" target="_blank">
                <SvgIcon component={InstagramIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main'}, mr: 4}}/>
              </Box>
               <Box component="a" href="https://hackmty.com/discord" target="_blank">
                <SvgIcon component={DiscordIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
              </Box>
            </Menu>
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            mr: 3,
            minWidth: 0,
            gap: 1,
          }}>
            <Box sx={{ position: 'relative', flex: 1, minWidth: 0 }}>
              <Box ref={scrollRef} sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'flex-start',
                alignItems: 'center',
                overflowX: 'auto',
                overflowY: 'hidden',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                px: 2.5,
                minHeight: 64,
                overscrollBehaviorX: 'contain',
              }}>
                {pages.map((page) => (
                  <Button
                    key={page.text}
                    onClick={handleCloseNavMenu}
                    sx={(theme) => ({ 
                      my: 2, color: 'white', 
                      backgroundColor: location.pathname === page.url ? 'secondary.main' : undefined, 
                      transition: 'background-color 0.3s ease, color 0.3s ease', '&:hover': { 
                        backgroundColor: location.pathname === page.url ? darken(theme.palette.secondary.main, 0.3) : undefined,
                        color: location.pathname != page.url ? 'secondary.main' : 'white', 
                      }, 
                      display: 'block', 
                      fontSize:'clamp(0.4rem, 1vw + 0.1rem, 1rem)', 
                      fontWeight:500, 
                      letterSpacing:'1px', 
                      mr:'1vw',
                      padding: '12px 1.1vw',
                      flexShrink: 0,
                    })}
                    component={Link} 
                    to={page.url}
                  >
                    {page.text}
                  </Button>
                ))}
              </Box>
              {canScrollLeft && (
                <Box sx={(theme) => ({
                  pointerEvents: 'none',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: 28,
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, rgba(0,0,0,0))`,
                  zIndex: 1,
                })} />
              )}
              {canScrollRight && (
                <Box sx={(theme) => ({
                  pointerEvents: 'none',
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  height: '100%',
                  width: 28,
                  background: `linear-gradient(to left, ${theme.palette.primary.main}, rgba(0,0,0,0))`,
                  zIndex: 1,
                })} />
              )}
              {canScrollLeft && (
                <IconButton
                  aria-label="scroll left"
                  onClick={() => scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' })}
                  sx={{
                    position: 'absolute',
                    left: 2,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0,0,0,0.25)',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.35)' },
                    zIndex: 2,
                  }}
                  size="small"
                >
                  <ChevronLeftIcon />
                </IconButton>
              )}
              {canScrollRight && (
                <IconButton
                  aria-label="scroll right"
                  onClick={() => scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' })}
                  sx={{
                    position: 'absolute',
                    right: 2,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    bgcolor: 'rgba(0,0,0,0.25)',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.35)' },
                    zIndex: 2,
                  }}
                  size="small"
                >
                  <ChevronRightIcon />
                </IconButton>
              )}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1 }}>
              <Button
                onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                sx={{my: 2, color: 'white', fontWeight:600, border: '1px solid rgba(255,255,255,0.4)', minWidth: 0, px: 1.5, mr: '2vw', flexShrink: 0}}
              >
                {lang === 'en' ? 'ES' : 'EN'}
              </Button>
              <Box component="a" href="https://facebook.com/HackMTY/" target="_blank" sx={{ flexShrink: 0 }}>
                  <SvgIcon component={FacebookIcon} inheritViewBox sx={{fontSize:30, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}, mr:4}}/>
              </Box>
              <Box component="a" href="https://instagram.com/hackmty/" target="_blank" sx={{ flexShrink: 0 }}>
                  <SvgIcon component={InstagramIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main'}, mr: 4}}/>
              </Box>
              <Box component="a" href="https://hackmty.com/discord" target="_blank" sx={{ flexShrink: 0 }}>
                  <SvgIcon component={DiscordIcon} inheritViewBox sx={{fontSize:27, color:'white', transition: 'color 0.3s ease', '&:hover': { color: 'secondary.main',}}}/>
              </Box>
            </Box>
          </Box>
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;