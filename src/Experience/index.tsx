import { Typography, Box } from '@mui/material';

export const ExperienceSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: 'primary',
      }}
    >
      <Box ml={16}>
        <Typography variant="h3" align="left" color="textPrimary" gutterBottom>
          Skills
        </Typography>
        <Typography
          variant="body1"
          align="left"
          color="textPrimary"
          gutterBottom
        >
          HTML, CSS, JavaScript, TypeScript, Vue.js, jQuery, node.js,
          Handlebars.js, Express.js, Jest, PostgreSQL, Redux, socket.io, git
        </Typography>
      </Box>
    </Box>
  );
};
