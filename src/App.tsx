import React, { useState } from 'react';
import './App.css';
import { Header } from './Header';
import {
  Typography,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Paper,
  Box,
} from '@mui/material';
import NavBar from './Nav';
import { HashRouter, Route } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import { LeftSocial } from './LeftSocialShortcuts';
import { ExperienceSection } from './Experience';
import { ProjectsSection } from './Projects';
import { ContactSection } from './ContactMe';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fffff',
    },
    secondary: {
      light: '#ffff8b',
      main: '#ffde59',
      dark: '#c9ad24',
      contrastText: '#000000',
    },
  },
  typography: {
    fontFamily: ['Press Start 2P'].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Paper className="App">
          <CssBaseline />
          <NavBar />
          <main>
            <LeftSocial />
            <Route path="/">
              <Box id="about">
                <HeroSection />
              </Box>
              <Box id="experience">
                <ExperienceSection />
              </Box>
              <Box id="projects">
                <ProjectsSection />
              </Box>
              <Box id="contact">
                <ContactSection />
              </Box>
            </Route>
          </main>
        </Paper>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
