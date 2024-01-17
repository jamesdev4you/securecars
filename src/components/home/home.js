import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '../menu/menu';
import '../../index.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Video from '../../assets/videos/securedrone.mp4';

const Home = () => {
  return (
    <>
      <Menu />
      <Card sx={{ width: '100%', height: '100vh', backgroundColor: 'red' }}>
        <CardMedia
          src={Video}
          component='video'
          sx={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          autoPlay
          loop
          muted
        />
      </Card>
    </>
  );
};

export default Home;
