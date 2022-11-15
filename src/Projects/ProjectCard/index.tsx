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
  id: number;
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

export const ProjectCard = (prop: Props) => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    return prop.toggleModal(prop.project.id);
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
