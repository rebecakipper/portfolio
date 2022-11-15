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

// const arrayProjects: MyProject[] = [
//   {
//     title: 'Connect 4',
//     imageUrl: './Logo-White.png',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
//     githubUrl: 'https://github.com/rebecakipper',
//   },
//   {
//     title: 'Petition',
//     imageUrl: './Logo-White.png',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
//     githubUrl: 'https://github.com/rebecakipper',
//   },
//   {
//     title: 'Imageboard',
//     imageUrl: './Logo-White.png',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
//     githubUrl: 'https://github.com/rebecakipper',
//   },
//   {
//     title: 'Social Media',
//     imageUrl: './Logo-White.png',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
//     githubUrl: 'https://github.com/rebecakipper',
//   },
//   {
//     title: 'Personal Portfolio',
//     imageUrl: './Logo-White.png',
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam consectetur, asperiores dolorum iure eum, quas ipsum, hic repellat itaque sit deleniti alias aspernatur dolore enim corrupti rerum id earum.',
//     githubUrl: 'https://github.com/rebecakipper',
//   },
// ];

export const ProjectsSection = ({ toggleModal, arrayProjects }: Props) => {
  return (
    <Box
      sx={{
        height: '100vh',
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
              <Grid item xs={4}>
                <ProjectCard project={project} toggleModal={toggleModal} />
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};
