import React from 'react';
import { AppBar, Typography, CssBaseline, Toolbar, Box } from '@mui/material';
import { Links } from './links/links';
import { HashLink } from 'react-router-hash-link';

export default function NavBar() {
  return (
    <>
      <CssBaseline />
      <Box>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Toolbar sx={{ alignItems: 'strech' }}>
            <Typography
              align="left"
              variant="h6"
              sx={{ flexGrow: 1, marginLeft: 12 }}
            >
              <HashLink smooth to="#home">
                <img src="./Logo-White.png" alt="logo" height="40px" />
              </HashLink>
            </Typography>
            <Links />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
