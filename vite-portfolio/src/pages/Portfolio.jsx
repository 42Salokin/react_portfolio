import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'background.secondary' }}>
      <Typography variant="h1">Portfolio</Typography>
      <Typography variant="body1">
        Insert projects here
      </Typography>
    </Container>
  );
}
// TODO: create object array for projects, with properties for image, GitHub repo, and deployed site
// iterate over array, creating display card for each project