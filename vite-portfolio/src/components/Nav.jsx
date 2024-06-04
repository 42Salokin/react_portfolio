import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;    

  return (
    <AppBar position="static" >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Nicholas Poulson
          </Typography>
          <Button color="inherit" component={Link} to="/about"
          sx={currentPage === '/about' ? {color: 'secondary.main'} : {}}>
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/portfolio"
          sx={currentPage === '/portfolio' ? {color: 'secondary.main'} : {}}>
            Portfolio
          </Button>
          <Button color="inherit" component={Link} to="/contact"
          sx={currentPage === '/contact' ? {color: 'secondary.main'} : {}}>
            Contact
          </Button>
          <Button color="inherit" component={Link} to="/resume"
          sx={currentPage === '/resume' ? {color: 'secondary.main'} : {}}>
            Resume
          </Button>
        </Toolbar>
    </AppBar>
  );
}
