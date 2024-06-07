import { Container, TextField, Button, FormControl, FormLabel, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { validateEmail } from '../utils/helper';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [nameError, setNameError] = useState(false); 
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleInputChange = (e) => {
    // Update state based on input field name
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        setNameError(false);
        break;
      case 'email':
        setEmail(value);
        setEmailError(!validateEmail(value));
        break;
      case 'message':
        setMessage(value);
        setMessageError(false);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);

    if (!name) {
      setNameError(true);
      return; 
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      return; 
    }
    if (!message) {
      setMessageError(true);
      return;
    }

    setName('');
    setMessage('');
    setEmail('');
    alert(`Thank you ${name}, your email has been sent`);
  };

  return (
    <Container sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'background.secondary' }}>
      <Typography variant="h1" component="h1" sx={{ marginTop: '20px'}}>
        Contact Me
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" error={nameError}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                value={name}
                name="name"
                onChange={handleInputChange}
                helperText={nameError ? 'Please enter your name' : ''} 
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" error={emailError}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                name="email"
                onChange={handleInputChange}
                helperText={emailError ? 'Please enter a valid email address' : ''} 
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" error={messageError}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4} // Adjust rows for desired message area height
                value={message}
                name="message"
                onChange={handleInputChange}
                helperText={messageError ? 'Please enter a brief message' : ''}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{ marginBottom: "20px"}}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      {errorMessage && (
        <Typography variant="body2" color="error">
          {errorMessage}
        </Typography>
      )}
    </Container>
  ); 
}