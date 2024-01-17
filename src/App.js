import React from 'react';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Services from './components/services/services';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  shape: {
    pillRadius: 50,
  },
  palette: {
    primary: { main: '#000000' },
    secondary: {
      main: '#ffffff',
    },
    error: { main: '#000000' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
