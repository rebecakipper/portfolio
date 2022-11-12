import React from 'react';
import {
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
  ButtonGroup,
} from '@mui/material';
//import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

export default function NavBar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">Portfolio</Typography>
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="text button group"
          >
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              to="experience"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Experience
            </Link>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
}
