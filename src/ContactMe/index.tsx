import { Typography, Box } from '@mui/material';

export const ContactSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: 'primary',
      }}
    >
      <Box ml={16}>
        <Typography variant="h1" align="left" color="textPrimary" gutterBottom>
          Get in touch
        </Typography>
      </Box>
    </Box>
  );
};
