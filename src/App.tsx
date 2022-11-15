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

type MyProject = {
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
};

type Projects = MyProject[];

function App() {
  const [modalActive, setModalActive] = useState(false);
  const toggleModal = () => {
    console.log(modalActive);

    setModalActive(!modalActive);
    return console.log(modalActive);
  };

  const arrayProjects: Projects = [
    {
      title: 'Connect 4',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      title: 'Petition',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      title: 'Imageboard',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      title: 'Social Media',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      title: 'Personal Portfolio',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Paper className="App">
          <CssBaseline />
          <NavBar />
          <main>
            <LeftSocial />
            {/* {modalActive && <Modal />} */}
            <Route path="/">
              <Box id="about">
                <HeroSection />
              </Box>
              <Box id="experience">
                <ExperienceSection />
              </Box>
              <Box id="projects">
                <ProjectsSection
                  toggleModal={toggleModal}
                  arrayProjects={arrayProjects}
                />
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
