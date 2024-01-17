import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from '../menu/menu';
import '../../index.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Video from '../../assets/videos/securedrone.mp4';
import Button from '@mui/material/Button';
import Ferrari from '../../assets/pics/cars7.jpg';
import Windows from '../../assets/pics/windows.jpg';
import Guy from '../../assets/pics/guy1.jpg';
import { LightPhonePhoneButton } from '../../styledComponents';
import CardContent from '@mui/material/CardContent';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as CarWash } from '../../assets/car-wash.svg';
import { ReactComponent as Coin } from '../../assets/coin.svg';
import { ReactComponent as Delivery } from '../../assets/delivery.svg';
import { ReactComponent as Support } from '../../assets/support.svg';

const Home = () => {
  const benefitsOptions = [
    {
      title: 'Safe & Secure Care',
      desc: 'Your vehicles safety is our priority. Trust us for a secure relocation experience with top-notch security measures!',
      logo: CarWash,
    },
    {
      title: 'Saving Money',
      desc: 'Save big with our cost-effective solutions. Affordable, reliable, and tailored to your budget. Drive smart with us!',
      logo: Coin,
    },
    {
      title: 'Quick Transport',
      desc: 'Tailored transport for you—swift, reliable, and secure. Experience excellence on every journey with us!',
      logo: Delivery,
    },
    {
      title: 'Customer Service',
      desc: 'Quick Wheels: 24/7 support ensures a seamless experience. Your satisfaction is our priority. Your journey begins here!',
      logo: Support,
    },
  ];

  return (
    <>
      <Menu />
      <Card sx={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
        <CardMedia
          src={Video}
          component='video'
          sx={{
            width: '100%',
            height: '75vh',
            objectFit: 'cover',
            position: 'relative',
          }}
          autoPlay
          loop
          muted
        />
        <CardContent
          sx={{
            position: 'absolute',
            top: '90px',
            color: 'white',
            margin: 'auto',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Typography
            variant='h1'
            sx={{ fontFamily: 'lemon', textAlign: 'center' }}
          >
            Cachet Bulletproof Services
          </Typography>
          <Typography
            variant='h4'
            sx={{ fontFamily: 'lemon', textAlign: 'center' }}
          >
            Best Luxury Security Service in Miami
          </Typography>
        </CardContent>

        <CardContent
          sx={{
            width: '100%',
            height: '25vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              gap: {
                xl: 'none',
                lg: 'none',
                md: '25px',
                sm: '25px',
                xs: '25px',
              },
              marginTop: {
                xl: '0px',
                lg: '0px',
                md: '25px',
                sm: '25px',
                xs: '25px',
              },
              marginBottom: {
                xl: '0px',
                lg: '0px',
                md: '25px',
                sm: '25px',
                xs: '25px',
              },
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'column',
                sm: 'column',
                xs: 'column',
              },
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
          >
            {benefitsOptions.map(({ title, desc, logo }) => (
              <Box
                sx={{
                  width: {
                    xl: '20%',
                    lg: '20%',
                    md: '65%',
                    sm: '80%',
                    xs: '90%',
                  },
                  height: '22vh',
                  backgroundColor: 'black',
                  borderRadius: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'start',
                  padding: '1em',
                  boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SvgIcon
                    component={logo}
                    inheritViewBox
                    sx={{
                      height: '40px',
                      width: '40px',
                      color: 'gold',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xl: '26px',
                        lg: '20px',
                        md: '32px',
                        sm: '32px',
                        xs: '22px',
                      },
                      color: 'gold',
                      borderBottom: '1px solid gold',
                      width: '100%',
                      textAlign: 'center',
                      paddingBottom: '.3em',
                      paddingTop: '.3em',
                      fontFamily: 'Lemon',
                    }}
                  >
                    {title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: {
                      xl: '18px',
                      lg: '16px',
                      md: '22px',
                      sm: '20px',
                      xs: '18px',
                    },
                    width: '100%',
                    textAlign: 'center',
                    marginTop: '.3em',
                  }}
                >
                  {desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>
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

export default Home;
