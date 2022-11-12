import React from 'react'
import {
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
  Button,
  ButtonGroup,
} from '@mui/material'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Portfolio</Typography>
          <ButtonGroup
            variant="text"
            color="secondary"
            aria-label="text button group"
          >
            <Link to="about">
              <Button>About</Button>
            </Link>
            <Link to="experience">
              <Button>Experience</Button>
            </Link>
            <Link to="projects">
              <Button>Projects</Button>
            </Link>
            <Link to="contact">
              <Button>Contact</Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  )
}
