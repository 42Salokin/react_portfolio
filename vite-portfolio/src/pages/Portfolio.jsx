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