import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h1">Resume</Typography>
      <Typography variant="body1">
        Insert resume link here
      </Typography>
    </Container>
  );
}