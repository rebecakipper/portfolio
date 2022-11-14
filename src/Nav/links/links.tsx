import { Stack, Divider, Box } from '@mui/material';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import styles from './links.module.css';

const titles = ['About', 'Experience', 'Projects', 'Contact'];

export const Links = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
      className={styles.links}
    >
      {titles.map((title) => {
        return (
          <Box
            component="span"
            sx={{ p: 2, borderBottom: '7px solid #ffde59' }}
            key={title}
          >
            <Link
              to={title.toLowerCase()}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.link}
            >
              {title}
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};
