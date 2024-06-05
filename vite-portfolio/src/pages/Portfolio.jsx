import { Container, Typography } from '@mui/material';
import Project from '../components/Project';

export default function About() {
  return (
    <Container sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center', 
    flexDirection: 'column', backgroundColor: 'background.secondary', paddingTop: '30px' }}>
      <Typography variant="h1">Portfolio</Typography>
      <Project />
    </Container>
  );
}
// TODO: create object array for projects, with properties for image, GitHub repo, and deployed site
// iterate over array, creating display card for each project