import { Typography, Box, Link } from '@mui/material';

export const ContactSection = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: 'primary',
      }}
    >
      <Box mt={32}>
        <Typography
          // href="mailto:rebecakipper@gmal.com"
          variant="h1"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <Link
            href="mailto:rebecakipper@gmal.com"
            underline="hover"
            sx={{ color: 'white' }}
          >
            Get in touch!
          </Link>
        </Typography>
        <Typography
          // href="mailto:rebecakipper@gmal.com"
          variant="h5"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          email: rebecakipper@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};
