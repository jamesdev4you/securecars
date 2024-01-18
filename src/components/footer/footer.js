import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import Windows from '../../assets/pics/logo.jpg';

const navItems = [
  { text: 'Home', href: '/' },
  { text: 'Contact', href: '/contact' },
  { text: 'About', href: '/about' },
  { text: 'Services', href: '/services' },
];
const contactItems = [
  { text: 'cachetbulletproof@gmail.com', href: '/contact' },
  { text: '786-532-7021', href: 'tel:17865327021' },
];

const Footer = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        padding: { xs: '50px 0px 50px 20px', sm: '50px 0px 50px 100px' },
        borderTop: '2px solid Gold',
        display: 'flex',
        alignItems: { sm: 'start', md: 'center' },
        justifyContent: { sm: 'start', md: 'center' },
        flexDirection: { sm: 'column', md: 'row' },
        gap: { xs: '3em', sm: '2em', amd: '2em', lg: '0px' },
        backgroundColor: 'black',
        flexWrap: 'wrap',
      }}
    >
      <Box
        sx={{
          height: 'auto',
          width: { sm: '50%', md: '20%', xl: '20%' },
          minWidth: '200px',

          marginBottom: 'auto',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'white',
            fontFamily: 'Lemon',
            textDecoration: 'underline',
            marginBottom: '10px',
          }}
        >
          Pages
        </Typography>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            sx={{ margin: '1px 0px', backgroundColor: 'black' }}
            disablePadding
          >
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '20px',
                marginRight: 'auto',
                marginBottom: '5px',
              }}
              to={item.href}
            >
              <Typography
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '20px',
                  marginRight: 'auto',
                  '&:hover': {
                    color: 'gold',
                  },
                }}
              >
                {item.text}
              </Typography>
            </NavLink>
          </ListItem>
        ))}
      </Box>
      <Box
        sx={{
          height: 'auto',
          width: { md: '20%', xl: '20%' },
          minWidth: '200px',
          marginBottom: 'auto',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'white',
            fontFamily: 'Lemon',
            textDecoration: 'underline',
            marginBottom: '10px',
          }}
        >
          Contact
        </Typography>
        {contactItems.map((item) => (
          <ListItem
            key={item.text}
            sx={{ margin: '1px 0px', backgroundColor: 'black' }}
            disablePadding
          >
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '20px',
                marginRight: 'auto',
                marginBottom: '5px',
              }}
              to={item.href}
            >
              <Typography
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '20px',
                  marginRight: 'auto',
                  '&:hover': {
                    color: 'gold',
                  },
                }}
              >
                {item.text}
              </Typography>
            </NavLink>
          </ListItem>
        ))}
      </Box>

      <Box
        sx={{
          height: { xs: '100px', sm: '70px', md: '120px' },
          width: { xs: '100px', sm: '100px', md: '150px' },
          margin: { xs: 'auto', sm: '0px 50px auto auto' },

          background: `url(${Windows})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </Box>
  );
};

export default Footer;
