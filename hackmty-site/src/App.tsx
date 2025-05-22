import './App.css'
import Navbar from './components/Navbar'
import { Box, ThemeProvider } from '@mui/material';
import Theme from './components/Theme';
import LandingPage from './pages/LandingPage'
import SchedulePage from './pages/SchedulePage'
import { HashRouter as Router , Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import SponsorsPage from './pages/SponsorsPage'
import HallOfFame from './pages/HallOfFame'
import ScrollToElement from './components/ScrollToElement';
import FAQPage from './pages/FAQPage';

// <BreakpointBanner></BreakpointBanner>

function App() {
  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          zIndex: -100,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'linear-gradient(to right, #662d91, #946cb2)',
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
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </Box>
          <Footer></Footer>
        </ThemeProvider>
        </Router>
        </Box>
      </>
  )
}

export default App
