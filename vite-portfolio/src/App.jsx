import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App
