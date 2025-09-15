import './App.css'
import Navbar from './components/Navbar'
import { Box, ThemeProvider } from '@mui/material';
import Theme from './components/Theme';
import { I18nProvider } from './i18n/I18nContext';
import LandingPage from './pages/LandingPage'
import SchedulePage from './pages/SchedulePage'
import { HashRouter as Router , Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import SponsorsPage from './pages/SponsorsPage'
import HallOfFame from './pages/HallOfFame'
import ScrollToElement from './components/ScrollToElement';
import FAQPage from './pages/FAQPage';
import BreakpointBanner from './components/SizeBanner';
import ExternalRedirect from './components/ExternalRedirect';
import HotelsPage from './pages/HotelsPage';

const debugMode = false

function App() {
  return (
    <>
      {debugMode && <BreakpointBanner></BreakpointBanner>}
      <Box
        sx={{
          position: 'fixed',
          zIndex: -100,
          top: 0,
          left: 0,
          // Use 100% and env(safe-area-inset-*) to avoid iOS 16/17/18/26 quirks
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, #662d91, #946cb2)',
          // Extend into safe areas on iOS
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
          paddingRight: 'env(safe-area-inset-right)',
        }}
      />
        <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        width={"100%"}
        height={"100%"}
        >
  <Router>
  <ThemeProvider theme={Theme}>
  <I18nProvider>
          <Navbar></Navbar>
          <Box flexGrow={1}>
            <ScrollToElement />
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/schedule" element={<SchedulePage/>} />
              <Route path="/sponsors" element={<SponsorsPage/>} />
              <Route path="/halloffame" element={<HallOfFame/>} />
              <Route path="/faq" element={<FAQPage/>} />
              <Route path="/contact-us" element={<Navigate to={"/#contact-us"} />} />
              <Route path="/hotels" element={<HotelsPage/>} />
              <Route path="/discord" element={<ExternalRedirect url="https://discord.com/invite/MRXWWBVB"/>} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </Box>
          <Footer></Footer>
  </I18nProvider>
  </ThemeProvider>
        </Router>
        </Box>
      </>
  )
}

export default App
