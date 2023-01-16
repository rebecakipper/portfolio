import { Typography, Box } from '@mui/material';
import styles from './index.module.css';

export const ExperienceSection = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'primary',
        overflow: 'auto',
      }}
    >
      <Box mx={16}>
        <Typography
          variant="h1"
          align="left"
          color="textPrimary"
          gutterBottom
          className={styles.animate}
        >
          Skills
        </Typography>
        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
          HTML, CSS, JavaScript, TypeScript, React.js, Vue.js, jQuery, node.js,
          Handlebars.js, Express.js, Jest, PostgreSQL, MongoDB, Redux,
          socket.io, git, MUI.
        </Typography>
      </Box>
    </Box>
  );
};
