import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h1">About Me</Typography>
      <Typography variant="body1">
        Some stuff about me
      </Typography>
    </Container>
  );
}