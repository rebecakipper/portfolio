import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import style from './index.module.css';
import { yellow } from '@mui/material/colors';

export const HeroSection = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        ml={16}
        mr={16}
        alignItems="center"
        spacing={6}
        style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        <Grid xs={12} sm={12} md={7} lg={7} xl={7}>
          <Box component="div" className={style.headline}>
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
              </Box>
            </Typography>
            <Typography variant="h1" align="left" color="textSecondary" noWrap>
              a web developer
            </Typography>
            <Typography variant="h1" align="left" color="textSecondary" noWrap>
              based in Berlin.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={0} sm={0} md={5} lg={5} xl={5}>
          <img src="./rebeca-profile.png" alt="r" className={style.profile} />
        </Grid>
      </Grid>
    </Box>
  );
};
