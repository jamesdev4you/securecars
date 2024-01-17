import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '../menu/menu';

const Home = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh', backgroundColor: 'blue' }}>
      <Menu />
      <Typography variant='h1'>Yo</Typography>
    </Box>
  );
};

export default Home;
