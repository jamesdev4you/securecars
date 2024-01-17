import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Guys1 from '../../assets/pics/guy1.jpg';
import Guys from '../../assets/pics/guy3.jpg';
import Menu from '../menu/menu';
import { LightPhonePhoneButton } from '../../styledComponents';
import Ferrari from '../../assets/pics/cars7.jpg';
import Windows from '../../assets/pics/windows.jpg';
import Guy from '../../assets/pics/guy1.jpg';

const About = () => {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Menu />
      <Box
        sx={{
          width: '100%',
          height: {
            xl: '95vh',
            lg: '95vh',
            md: '100vh',
            sm: '80vh',
            xs: '60vh',
          },
          backgroundColor: 'black',
          marginTop: '50px',
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'column',
            sm: 'column',
            xs: 'column',
          },
          alignItems: {
            xl: 'start',
            lg: 'start',
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          justifyContent: {
            xl: 'start',
            lg: 'start',
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          marginBottom: {
            xl: '0px',
            lg: '0px',
            md: '0px',
            sm: '100px',
            xs: '100px',
          },
          gap: '50px',
        }}
      >
        <Box
          sx={{
            display: {
              xl: 'flex',
              lg: 'flex',
              md: 'none',
              sm: 'none',
              xs: 'none',
            },
            height: {
              xl: '100%',
              lg: '100%',
              md: '400px',
              sm: '400px',
              xs: '200px',
            },
            width: {
              xl: '50%',
              lg: '50%',
              md: '400px',
              sm: '400px',
              xs: '200px',
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
            width: {
              xl: '40%',
              lg: '40%',
              md: '60%',
              sm: '90%',
              xs: '90%',
            },
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
                lg: '300px',
                md: '400px',
                sm: '400px',
                xs: '500px',
              },
              display: {
                xl: 'flex',
                lg: 'flex',
                md: 'flex',
                sm: 'flex',
                xs: 'flex',
              },
              width: {
                xl: '400px',
                lg: '300px',
                md: '400px',
                sm: '400px',
                xs: '100%',
              },
              background: `url(${Guys1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              marginRight: {
                xl: 'auto',
                lg: 'auto',
                md: 'none',
                sm: 'none',
                xs: 'none',
              },
              marginTop: '50px',
              marginBottom: {
                xl: '50px',
                lg: '50px',
                md: '50px',
                sm: '10px',
                xs: '10px',
              },
              backgroundPosition: 'top',
              boxShadow: {
                sm: 'none',
                md: 'rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px',
              },
            }}
          />
          <Typography
            sx={{
              fontSize: {
                xl: '48px',
                lg: '48px',
                md: '44px',
                sm: '26px',
                xs: '26px',
              },
              textAlign: {
                xl: 'left',
                lg: 'left',
                md: 'center',
                sm: 'center',
                xs: 'center',
              },
              fontFamily: 'lemon',
              color: 'white',
              marginBottom: '10px',
            }}
          >
            Leading Experts for Security in Miami
          </Typography>
          <Typography
            sx={{
              fontFamily: 'lemon',
              color: 'white',
              marginBottom: '10px',
              fontSize: {
                xl: '32px',
                lg: '32px',
                md: '26px',
                sm: '20px',
                xs: '16px',
              },
              textAlign: {
                xl: 'left',
                lg: 'left',
                md: 'center',
                sm: 'center',
                xs: 'center',
              },
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
          paddingTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
          paddingBottom: '15px',
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
          paddingTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
          paddingBottom: '15px',
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
            display: {
              xl: 'none',
              lg: 'none',
              md: 'flex',
              sm: 'flex',
              xs: 'flex',
            },
            background: `url(${Windows})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow:
              'rgba(255, 255, 255, 0.4) -5px -5px, rgba(255, 255, 255, 0.3) -10px -10px, rgba(255, 255, 255, 0.2) -15px -15px, rgba(255, 255, 255, 0.1) -20px -20px, rgba(255, 255, 255, 0.05) -25px -25px',
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
        <Box
          sx={{
            display: {
              xl: 'flex',
              lg: 'flex',
              md: 'none',
              sm: 'none',
              xs: 'none',
            },
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
          paddingTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
          paddingBottom: '15px',
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
    </div>
  );
};

export default About;
