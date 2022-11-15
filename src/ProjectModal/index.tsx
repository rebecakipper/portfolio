import { Typography, Box, Modal } from '@mui/material';
import { ProjectCard } from '../Projects/ProjectCard';
type MyProject = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
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
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        id="modal"
        sx={{
          height: '100vh',
          width: '95vw',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          position: 'fixed',
          zIndex: '100',
        }}
      >
        <Box ml={16}>
          <Typography
            variant="h3"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {project.title}
          </Typography>
          <Typography
            variant="body1"
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {project.description}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};
