import React from 'react';
import { useEffect, useState } from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
} from '@mui/material';
import { CardActionArea } from '@mui/material';
import { AnalyticsTwoTone } from '@mui/icons-material';

type Project = {
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
};

type Projects = Project[];

interface Props {
  project: Project;
  toggleModal: Function;
}
// const arrayProjects: Project[] = [
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

export const ProjectCard = (prop: Props) => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    return prop.toggleModal();
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea
          onClick={(e: React.MouseEvent<HTMLElement>) => handleClick(e)}
        >
          <CardMedia
            component="img"
            height="200"
            image={prop.project.imageUrl}
            alt={prop.project.title}
            sx={{ obejectFit: 'cover' }}
          />
          <CardContent
            sx={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {prop.project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {prop.project.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
