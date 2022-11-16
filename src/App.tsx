import React, { useState } from 'react';
import './App.css';
import {
  Typography,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Paper,
  Box,
} from '@mui/material';
import NavBar from './Nav';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
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
      main: '#000000',
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
  stack: string;
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
      stack: 'HTML, jQuery, CSS',
    },
    {
      id: 2,
      title: 'Petition',
      imageUrl: './petition-sample.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
      stack: 'Node.js/Express, Handlebars.js, Postgres',
    },
    {
      id: 3,
      title: 'Imageboard',
      imageUrl: './imageboard-sample.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
      stack: 'Node.js/Express, Vue.js, AWS S3, Postgres',
    },
    {
      id: 4,
      title: 'Social Media',
      imageUrl: './socialnetwork-sample.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
      stack: 'React/Redux, node.js/express, Socket.IO, Postgres',
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      imageUrl: './Logo-White.png',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
      githubUrl: 'https://github.com/rebecakipper',
      stack: 'React, Typescript, Material UI',
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
      <BrowserRouter>
        {/* <Paper className="App"> */}
        <CssBaseline />
        <NavBar />
        <main id="home">
          <LeftSocial />

          {modalActive && modalToDisplay && (
            <ProjectModal
              project={modalToDisplay}
              isOpen={modalActive}
              closeModal={() => setModalActive(false)}
            />
          )}

          <Box id="about" sx={{ paddingTop: '32px ' }}>
            <HeroSection />
          </Box>

          <Box id="experience" sx={{ paddingTop: '32px ' }}>
            <ExperienceSection />
          </Box>

          <Box id="projects" sx={{ paddingTop: '32px ' }}>
            <ProjectsSection
              toggleModal={toggleModal}
              arrayProjects={arrayProjects}
            />
          </Box>

          <Box id="contact" sx={{ paddingTop: '32px ' }}>
            <ContactSection />
          </Box>
        </main>
        {/* </Paper> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
