import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <AppBar position="static" >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nicholas Poulson
          </Typography>
          <Button color="inherit" component={Link} to="/about">
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/portfolio">
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/resume">
            Resume
          </Button>
        </Toolbar>
    </AppBar>
  );
}
