import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Navbar from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
     <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Box sx={{minHeight: '5vh'}}>
      <Navbar />
      </Box>      
      <Container sx={{ display: 'flex', minHeight: '80vh', flexDirection: 'column' }} >
        <Outlet />
      </Container>
      <Box sx={{minHeight: '5vh'}}>
      <Footer sx={{minHeight: '5vh'}}/>
      </Box>      
    </Box>   
  );
}

export default App
