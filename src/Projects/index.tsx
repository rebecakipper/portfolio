import { Typography, Box, Grid } from '@mui/material';
import * as React from 'react';
import { ProjectCard } from './ProjectCard';
import { useState, useEffect } from 'react';

type MyProject = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
  stack: string;
};

type Projects = MyProject[];

interface Props {
  toggleModal: Function;
  arrayProjects: Projects;
}

export const ProjectsSection = ({ toggleModal, arrayProjects }: Props) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary',
      }}
    >
      <Box mx={16}>
        <Typography variant="h1" align="left" color="textPrimary" gutterBottom>
          Projects
        </Typography>
        <Typography variant="h6" align="left" color="textPrimary" gutterBottom>
          Project developed at the SPICED Academy 12-week Full-Stack
          WebDevelopment Bootcamp from 08.2022 to 11.2022:
        </Typography>
        <Grid container direction="row" spacing={4} sx={{ flexWrap: 'wrap' }}>
          {arrayProjects &&
            arrayProjects.map((project) => (
              <Grid item xs={4} key={project.id}>
                <ProjectCard project={project} toggleModal={toggleModal} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
