import { Container, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Typography variant="h1">Contact Me</Typography>
      <Typography variant="body1">
        Insert contact form here
      </Typography>
    </Container>
  );
}