import React, { useState } from 'react';
import './App.css';
import {
  Typography,
  CssBaseline,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
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

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

type MyProject = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  details: string;
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
    // {
    //   id: 1,
    //   title: 'Connect 4',
    //   imageUrl: './connect4-sample.png',
    //   description:
    //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum.',
    //   githubUrl: 'https://github.com/rebecakipper',
    //   stack: 'HTML, jQuery, CSS',
    // },
    {
      id: 2,
      title: 'Petition',
      imageUrl: './petition-sample.png',
      description:
        'Users can register, log in & out, add profile infos and sign an online petition to make fake PNG images illegal.',
      details:
        'Users can register, log in & out, add profile infos and sign an online petition to make fake PNG images illegal.',
      githubUrl: 'https://github.com/rebecakipper/petition',
      stack: 'Node.js/Express, Handlebars.js, PostgreSQL',
    },
    {
      id: 3,
      title: '<img> board',
      imageUrl: './imageboard-sample.png',
      description:
        'Image sharing platform where users can upload photos with captions and descriptions as well as commment on other users posts',
      details:
        'Image sharing platform where users can upload photos with captions and descriptions as well as commment on other users posts',
      githubUrl: 'https://github.com/rebecakipper/imageboard',
      stack: 'Node.js/Express, Vue.js, AWS S3, PostgreSQL',
    },
    {
      id: 4,
      title: 'Juniper Social',
      imageUrl: './socialnetwork-sample.png',
      description:
        'A social network where users can register, login, add a profile picture, bios, search for other users, add friends and communicate through a global live chat.',
      details:
        'A social network where users can register, login, add a profile picture, bios, search for other users, add friends and communicate through a global live chat.',
      githubUrl: 'https://github.com/rebecakipper/social-network',
      stack: 'React/Redux, node.js/express, Socket.IO, PostgreSQL',
    },
    {
      id: 5,
      title: 'Personal Portfolio',
      imageUrl: './portfolio_sample.png',
      description:
        'My own personal portfolio website, created to showcase the projects I have developed since the beginning of my coding journey.',
      details:
        'My own personal portfolio website, created to showcase the projects I have developed since the beginning of my coding journey. This is an ongoing project, and it is intended as a challenge to learn more about Typescript, Material UI), animations and deployment.',
      githubUrl: 'https://github.com/rebecakipper/portfolio',
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

          <Box id="skills" sx={{ paddingTop: '32px ' }}>
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
