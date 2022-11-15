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
import { ProjectModal } from './ProjectModal';

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
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
};

type Projects = MyProject[];

function App() {
  const [modalActive, setModalActive] = useState(false);
  const [modalToDisplay, setModalToDisplay] = useState<MyProject | undefined>(
    undefined
  );
  const arrayProjects: Projects = [
    {
      id: 1,
      title: 'Connect 4',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      id: 2,
      title: 'Petition',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      id: 3,
      title: 'Imageboard',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      id: 4,
      title: 'Social Media',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
    },
  ];

  const toggleModal = (id: number) => {
    console.log(modalActive);
    arrayProjects.forEach((project) => {
      if (project.id === id) {
        setModalToDisplay(project);
      }
    });

    setModalActive(!modalActive);
  };

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Paper className="App">
          <CssBaseline />
          <NavBar />
          <main>
            <LeftSocial />
            {modalActive && modalToDisplay && (
              <ProjectModal
                project={modalToDisplay}
                isOpen={modalActive}
                closeModal={() => setModalActive(false)}
              />
            )}

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
