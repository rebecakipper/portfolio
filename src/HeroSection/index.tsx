import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';

export const HeroSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        // backgroundColor: 'primary',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Box ml={16} mt={8}>
          <Typography
            variant="h3"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            Hello World...
          </Typography>
          <Typography variant="h1" align="left" color="textSecondary" paragraph>
            I am Rebeca,
            <Typography
              variant="h1"
              align="left"
              color="textSecondary"
              paragraph
            >
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
      </Grid>
    </Box>
  );
};
