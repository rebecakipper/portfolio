import React from 'react';
import { Box, Fab, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const LeftSocial = () => {
  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} position="fixed" mt={40} ml={2}>
      <Fab
        size="small"
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/rebecakipper/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: 'transparent',
          color: 'secondary.main',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'secondary.light',
          },
        }}
      >
        <LinkedInIcon />
      </Fab>
      <Fab
        size="small"
        aria-label="LinkedIn"
        href="https://github.com/rebecakipper"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: 'transparent',
          color: 'secondary.main',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'secondary.light',
          },
        }}
      >
        <GitHubIcon />
      </Fab>
    </Stack>
  );
};
