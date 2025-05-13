import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Box, ThemeProvider } from '@mui/material';
import Theme from './components/Theme';
import LandingPage from './pages/LandingPage'
import BreakpointBanner from './components/SizeBanner'
import SchedulePage from './pages/SchedulePage'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer'
import SponsorsPage from './pages/SponsorsPage'
import HallOfFame from './pages/HallOfFame'

// <BreakpointBanner></BreakpointBanner>

function App() {
  return (
    <>
        <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        >
        <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <BreakpointBanner></BreakpointBanner>
          <Navbar></Navbar>
          <Box flexGrow={1}>
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/schedule" element={<SchedulePage/>} />
              <Route path="/sponsors" element={<SponsorsPage/>} />
              <Route path="/halloffame" element={<HallOfFame/>} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </Box>
          <Footer></Footer>
        </ThemeProvider>
        </BrowserRouter>
        </Box>
      </>
  )
}

export default App
