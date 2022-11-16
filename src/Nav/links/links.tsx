import { Stack, Divider, Box } from '@mui/material';
// import { Link as LinkS } from 'react-scroll';
// import { Link } from 'react-router-dom';
import styles from './links.module.css';
import { HashLink } from 'react-router-hash-link';

const titles = ['About', 'Experience', 'Projects', 'Contact'];

export const Links = () => {
  const scrollWithOffset = (el: any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
      className={styles.links}
      mr={12}
    >
      {titles.map((title) => {
        return (
          <Box
            component="span"
            sx={{ p: 2, borderBottom: '7px solid #ffde59' }}
            key={title}
          >
            <HashLink
              smooth
              to={`#${title.toLowerCase()}`}
              // activeClass="active"
              // duration={500}
              scroll={(el) => scrollWithOffset(el)}
              className={styles.link}
            >
              {title}
            </HashLink>
          </Box>
        );
      })}
    </Stack>
  );
};
