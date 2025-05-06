import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from '@mui/material';
import Theme from './components/Theme';
import LandingPage from './pages/LandingPage'
import BreakpointBanner from './components/SizeBanner'

// <BreakpointBanner></BreakpointBanner>

function App() {
  return (
    <>
        <ThemeProvider theme={Theme}>
          <Navbar></Navbar>
           <LandingPage></LandingPage>
        </ThemeProvider>
      </>
  )
}

export default App
