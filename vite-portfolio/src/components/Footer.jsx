import { Box, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import indeedIcon from '../assets/indeed.svg';

export default function Footer() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, backgroundColor: 'primary.main' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Nicholas Poulson
      </Typography>
      <Box sx={{ ml: 2 }}>
        <IconButton component={Link} href="https://github.com/42Salokin" target="_blank" sx={{ color: 'text.secondary' }}>
          <GitHubIcon />
        </IconButton>
        <IconButton component={Link} href="https://www.linkedin.com/" target="_blank" sx={{ color: 'text.secondary' }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton component={Link} href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" sx={{ color: 'text.secondary' }}>
            <img src={indeedIcon} alt="Indeed Profile"/>
        </IconButton>
      </Box>
    </Box>
  );
}
