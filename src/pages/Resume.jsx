import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function About() {
  const fProfs = ["HTML", "CSS", "JavaScript", "APIs", "Handlebars", "React" ];
  const bProfs = ["Node.js", "Express.js", "PostgreSQL", "MongoDB" ];
  return (
    <Container sx={{ display: 'flex', minHeight: '80vh', alignItems: 'center', justifyContent: 'center', 
    flexDirection: 'column', backgroundColor: 'background.secondary', paddingTop: '30px' }}>
      <Typography variant="h1" sx={{ textAlign: "center"}}>My Development Proficiencies</Typography>
      <Container sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center'}}>
        <Container sx={{ width: '20%', display: "flex", flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" sx={{ textAlign: "center"}}>Front End</Typography>
          <List>
            {fProfs.map((prof) => (
            <ListItem key={prof}>
              <ListItemText primary={prof} sx={{ textAlign: "center"}}/>
            </ListItem>
            ))}
          </List>
        </Container>
        <Container sx={{ width: '20%', display: "flex", flexDirection: 'column', alignItems: 'center'}}>
          <Typography variant="h5" sx={{ textAlign: "center"}}>Back End</Typography>
          <List>
            {bProfs.map((prof) => (
            <ListItem key={prof}>
              <ListItemText primary={prof} sx={{ textAlign: "center"}}/>
            </ListItem>
            ))}
          </List>
        </Container>             
      </Container>
      <Button color="inherit" component="a" href="https://profile.indeed.com/p/nicholasp-h594zsv" 
      target="_blank" sx={{ backgroundColor: "primary.main", marginBottom: "20px"}}>
            My Resume
      </Button>
    </Container>
  );
}