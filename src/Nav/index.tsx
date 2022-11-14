import React from 'react';
import {
  AppBar,
  Typography,
  CssBaseline,
  Toolbar,
  Box,
  IconButton,
  Button,
} from '@mui/material';
//import { Link } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';

import { Links } from './links/links';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar position="sticky">
          <Toolbar sx={{ alignItems: 'strech' }}>
            <Typography align="left" variant="h6" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
            <Links />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
