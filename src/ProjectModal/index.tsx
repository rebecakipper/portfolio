import { Typography, Box, Modal, IconButton, Fab } from '@mui/material';
import { Container, flexbox } from '@mui/system';
import { ProjectCard } from '../Projects/ProjectCard';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';

import { relative } from 'path';
type MyProject = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
  stack: string;
};

interface Props {
  project: MyProject;
  isOpen: boolean;
  closeModal: () => void;
}
export const ProjectModal = ({ project, isOpen, closeModal }: Props) => {
  console.log(project);

  return (
    <Modal
      id={`projects/${project.id}`}
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        id="modal"
        sx={{
          height: '85vh',
          width: '85vw',
          backgroundColor: 'rgba(0,0,0,0.9)',
          backdropFilter: 'blur(8px)',
          position: 'fixed',
          zIndex: '100',
          alignText: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '16px',
        }}
      >
        <IconButton
          color="primary"
          aria-label="close modal"
          component="label"
          sx={{
            dispay: 'flex',
            position: 'absolute',
            right: '16px',
            top: '16px',
          }}
        >
          <CloseIcon onClick={closeModal} sx={{ color: 'white' }} />
        </IconButton>
        <Box py={8} px={16}>
          <Typography
            variant="h3"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {project.title}
          </Typography>

          <img
            src={project.imageUrl}
            alt={project.title}
            height="300px"
            width="300px"
          />

          <Typography
            variant="body1"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {project.description}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {project.stack}
          </Typography>
          <Fab
            size="small"
            aria-label="LinkedIn"
            href="https://github.com/rebecakipper"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: 'transparent',
              color: 'secondary.main',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'secondary.light',
              },
            }}
          >
            <GitHubIcon />
          </Fab>
        </Box>
      </Box>
    </Modal>
  );
};
