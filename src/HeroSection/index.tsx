import React from 'react';
import { Typography, Container, Box } from '@mui/material';

export const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: 'primary.dark',
      }}
    >
      <Box ml={16}>
        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
          Hi there...
        </Typography>
        <Typography variant="h1" align="left" color="textSecondary" paragraph>
          I am Rebeca,
          <Typography variant="h1" align="left" color="textSecondary" paragraph>
            a web developer
            <Typography
              variant="h1"
              align="left"
              color="textSecondary"
              paragraph
            >
              based in Berlin.
            </Typography>
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
