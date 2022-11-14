import React from 'react';
import { Box, Fab, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const LeftSocial = () => {
  return (
    <Stack spacing={{ xs: 1, sm: 2, md: 4 }} position="fixed" mt={32} ml={2}>
      <Fab
        size="small"
        aria-label="LinkedIn"
        sx={{ backgroundColor: 'transparent', color: 'secondary' }}
      >
        <LinkedInIcon />
      </Fab>
      <Fab
        size="small"
        aria-label="LinkedIn"
        sx={{ backgroundColor: 'transparent', color: 'secondary' }}
      >
        <GitHubIcon />
      </Fab>
    </Stack>
  );
};
