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
          This is my experience section
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
      </Box>
    </Box>
  );
};