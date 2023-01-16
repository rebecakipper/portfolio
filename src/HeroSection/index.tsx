import React from 'react';
import { Typography, Container, Box, Grid } from '@mui/material';
import style from './index.module.css';

export const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        // backgroundColor: 'primary',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={6} md={8}>
          <Box ml={16} mt={8} mr={16}>
            <Typography
              variant="h3"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Hello World...
            </Typography>
            <Typography
              variant="h1"
              align="left"
              color="textSecondary"
              paragraph
            >
              I am{' '}
              <Box
                component="span"
                sx={{ p: 0, borderBottom: '3px solid #ffde59' }}
                className={style.rebs}
              >
                Rebeca
              </Box>{' '}
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
        <Grid item xs={0} sm={0} md={2} mr={16}>
          <img src="./rebeca-profile.png" alt="r" className={style.profile} />
        </Grid>
      </Grid>
    </Box>
  );
};
