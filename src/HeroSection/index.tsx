import React from 'react';
import {
  AppBar,
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Icon,
  createTheme,
  colors,
  ThemeProvider,
  Paper,
} from '@mui/material';

export const Section = () => {
  return (
    <Container maxWidth="sm" bg-color="blue">
      <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        My name is Rebeca, Im a full stack web developer.
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        paragraph
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nesciunt
        repellat explicabo laborum numquam, corrupti iste iure itaque quibusdam?
        Maxime harum fugiat ad quia nesciunt ipsum? Exercitationem placeat
        tempore blanditiis.
      </Typography>
    </Container>
  );
};
