import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Guys1 from '../../assets/pics/guy1.jpg';
import Guys from '../../assets/pics/guy3.jpg';
import Menu from '../menu/menu';
import {
  LightPhoneButton,
  LightPhonePhoneButton,
} from '../../styledComponents';
import Ferrari from '../../assets/pics/cars7.jpg';
import Windows from '../../assets/pics/windows.jpg';
import Guy from '../../assets/pics/guy1.jpg';

const About = () => {
  return (
    <>
      <Menu />
      <Box
        sx={{
          width: '100%',
          height: '94vh',
          backgroundColor: 'black',
          marginTop: '50px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'start',
          gap: '50px',
          borderBottom: '1px solid white',
        }}
      >
        <Box
          sx={{
            height: {
              xl: '100%',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            width: {
              xl: '50%',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            background: `url(${Guys})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            borderRight: '1px solid white',
          }}
        />
        <Box
          sx={{
            width: '40%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              height: {
                xl: '400px',
                lg: '400px',
                md: '400px',
                sm: '400px',
                xs: '250px',
              },
              width: {
                xl: '400px',
                lg: '400px',
                md: '400px',
                sm: '400px',
                xs: '250px',
              },
              background: `url(${Guys1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              marginRight: 'auto',
              marginBottom: '50px',
              backgroundPosition: 'top',
              boxShadow:
                'rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px',
            }}
          />
          <Typography
            variant='h2'
            sx={{
              textAlign: 'left',
              fontFamily: 'lemon',
              color: 'white',
              marginBottom: '10px',
            }}
          >
            Leading Experts for Security in Miami
          </Typography>
          <Typography
            variant='h5'
            sx={{
              textAlign: 'left',
              fontFamily: 'lemon',
              color: 'white',
              marginBottom: '10px',
            }}
          >
            Leading Experts for Security in Miami Leading Experts for Security
            in Miami
          </Typography>
          <LightPhonePhoneButton />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'black',
          height: {
            xl: '60vh',
            lg: '60vh',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
          gap: {
            xl: '15em',
            lg: 'none',
            md: '6em',
            sm: 'none',
            xs: '45px',
          },
          marginTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
        }}
      >
        <Box
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            width: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            background: `url(${Ferrari})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:
              'rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            height: {
              xl: '400px',
              lg: '400px',
              md: 'auto',
              sm: 'auto',
              xs: 'auto',
            },
            width: {
              xl: '30vw',
              lg: '30vw',
              md: '80%',
              sm: '80%',
              xs: '80%',
            },
            gap: '1em',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'left',
              width: '100%',
              fontFamily: 'Lemon',
              fontSize: { xl: '24px', lg: '28px', md: '24px' },
              color: 'white',
            }}
          >
            More About Quick Wheels
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'white',
              fontSize: {
                xl: '22px',
                lg: '16px',
                md: '14px',
                sm: '18px',
                xs: '18px',
              },
            }}
          >
            Quick Wheels: Effortlessly transport your vehicle across the USA
            with us. Reliable, speedy, and secure – we make moving your car
            worry-free. Trust Quick Wheels for a smooth, efficient journey.
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'white',
              fontSize: {
                xl: '22px',
                lg: '16px',
                md: '14px',
                sm: '18px',
                xs: '18px',
              },
            }}
          >
            Your go-to for stress-free vehicle transport across the USA.
            Specializing in personal cars, we ensure fast, secure, and reliable
            relocation. Trust us to move your vehicle effortlessly.{' '}
          </Typography>
          <Button
            href='tel:14159423491'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: 'auto',
              '&:hover': { color: 'black' },
            }}
          >
            {' '}
            Start Today!
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: 'black',
          height: {
            xl: '60vh',
            lg: '60vh',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
          gap: {
            xl: '15em',
            lg: 'none',
            md: '6em',
            sm: 'none',
            xs: '45px',
          },
          marginTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            height: {
              xl: '400px',
              lg: '400px',
              md: 'auto',
              sm: 'auto',
              xs: 'auto',
            },
            width: {
              xl: '30vw',
              lg: '30vw',
              md: '80%',
              sm: '80%',
              xs: '80%',
            },
            gap: '1em',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'left',
              width: '100%',
              fontFamily: 'Lemon',
              fontSize: { xl: '24px', lg: '28px', md: '24px' },
              color: 'white',
            }}
          >
            More About Quick Wheels
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'white',
              fontSize: {
                xl: '22px',
                lg: '16px',
                md: '14px',
                sm: '18px',
                xs: '18px',
              },
            }}
          >
            Quick Wheels: Effortlessly transport your vehicle across the USA
            with us. Reliable, speedy, and secure – we make moving your car
            worry-free. Trust Quick Wheels for a smooth, efficient journey.
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'white',
              fontSize: {
                xl: '22px',
                lg: '16px',
                md: '14px',
                sm: '18px',
                xs: '18px',
              },
            }}
          >
            Your go-to for stress-free vehicle transport across the USA.
            Specializing in personal cars, we ensure fast, secure, and reliable
            relocation. Trust us to move your vehicle effortlessly.{' '}
          </Typography>
          <Button
            href='tel:14159423491'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: 'auto',
              '&:hover': { color: 'black' },
            }}
          >
            {' '}
            Start Today!
          </Button>
        </Box>
        <Box
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            width: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            background: `url(${Windows})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:
              'rgba(255, 255, 255, 0.4) -5px -5px, rgba(255, 255, 255, 0.3) -10px -10px, rgba(255, 255, 255, 0.2) -15px -15px, rgba(255, 255, 255, 0.1) -20px -20px, rgba(255, 255, 255, 0.05) -25px -25px',
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: 'black',
          height: {
            xl: '60vh',
            lg: '60vh',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
          gap: {
            xl: '15em',
            lg: 'none',
            md: '6em',
            sm: 'none',
            xs: '45px',
          },
          marginTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
        }}
      >
        <Box
          sx={{
            height: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            width: {
              xl: '400px',
              lg: '400px',
              md: '400px',
              sm: '400px',
              xs: '250px',
            },
            background: `url(${Guy})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            boxShadow:
              'rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            height: {
              xl: '400px',
              lg: '400px',
              md: 'auto',
              sm: 'auto',
              xs: 'auto',
            },
            width: {
              xl: '30vw',
              lg: '30vw',
              md: '80%',
              sm: '80%',
              xs: '80%',
            },
            gap: '1em',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              textAlign: 'left',
              width: '100%',
              fontFamily: 'Lemon',
              fontSize: { xl: '24px', lg: '28px', md: '24px' },
              color: 'white',
            }}
          >
            More About Quick Wheels
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'white',
              fontSize: {
                xl: '22px',
                lg: '16px',
                md: '14px',
                sm: '18px',
                xs: '18px',
              },
            }}
          >
            Quick Wheels: Effortlessly transport your vehicle across the USA
            with us. Reliable, speedy, and secure – we make moving your car
            worry-free. Trust Quick Wheels for a smooth, efficient journey.
          </Typography>
          <Typography
            sx={{
              textAlign: 'left',
              width: '100%',
              color: 'white',
              fontSize: {
                xl: '22px',
                lg: '16px',
                md: '14px',
                sm: '18px',
                xs: '18px',
              },
            }}
          >
            Your go-to for stress-free vehicle transport across the USA.
            Specializing in personal cars, we ensure fast, secure, and reliable
            relocation. Trust us to move your vehicle effortlessly.{' '}
          </Typography>
          <Button
            href='tel:14159423491'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: 'auto',
              '&:hover': { color: 'black' },
            }}
          >
            {' '}
            Start Today!
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default About;
