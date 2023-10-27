import { Stack, Divider, Box, Link } from '@mui/material';
import styles from './links.module.css';
import { HashLink } from 'react-router-hash-link';

const titles = ['About', 'Skills', 'Projects', 'Contact'];

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
            sx={{ p: 2, borderBottom: '3px solid #ffde59' }}
            key={title}
            className={styles.underline}
          >
            <HashLink
              smooth
              to={`#${title.toLowerCase()}`}
              scroll={(el) => scrollWithOffset(el)}
              className={styles.link}
            >
              {title}
            </HashLink>
          </Box>
        );
      })}
      <Box
        component="span"
        sx={{ p: 2, borderBottom: '3px solid #ffde59' }}
        className={styles.underline}
      >
        <Link
          href="https://drive.google.com/file/d/1iUYMYs-X5NQAEIfJx3s3T4DWXlho4-ch/view?usp=sharing"
          underline="none"
          color="white"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </Box>
    </Stack>
  );
};
