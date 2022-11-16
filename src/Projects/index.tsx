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
      <Box ml={16}>
        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
          This is my Projects section
        </Typography>
        <Typography
          variant="body1"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo
          nam, iure laborum, eum aperiam cupiditate possimus autem vitae ipsa
          vel nostrum tempore obcaecati illum quis voluptas nemo reprehenderit
          qui!
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
