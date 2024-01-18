import React from 'react';
import Menu from '../menu/menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Ferrari from '../../assets/pics/cars6.jpg';
import Windows from '../../assets/pics/cars5.jpg';
import Guy from '../../assets/pics/trunksafe2.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Video from '../../assets/videos/move2.mp4';
import CardContent from '@mui/material/CardContent';
import '../../index.css';
import { ReactComponent as HowOne } from '../../assets/howOne.svg';
import { ReactComponent as HowTwo } from '../../assets/howTwo.svg';
import { ReactComponent as HowThree } from '../../assets/howThree.svg';
import { ReactComponent as HowFour } from '../../assets/howFour.svg';
import Footer from '../footer/footer';

const Services = () => {
  const contactOptions = [
    {
      title: 'Contact Us',
      desc: 'Reach out for elite bulletproof car services – your safety, our priority. You are one call away from luxurious Bulletproof.',
      logo: HowThree,
    },
    {
      title: 'Research Acquired',
      desc: 'Innovative, cutting-edge research ensuring the highest standard in bulletproof car safety for your route.',
      logo: HowTwo,
    },
    {
      title: 'Routes Taken',
      desc: 'Strategically planned, secure routes for your utmost safety in bulletproof travel.',
      logo: HowFour,
    },
    {
      title: 'Arriving Safely',
      desc: 'Guaranteeing your secure arrival with unparalleled bulletproof protection and expert navigation.',
      logo: HowOne,
    },
  ];
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Menu />
      <Card
        sx={{
          width: '100%',
          height: {
            xl: '80vh',
            lg: '80vh',
            md: '80vh',
            sm: '80vh',
            xs: '80vh',
          },
          marginBottom: '-25px',
          backgroundColor: 'white',
        }}
      >
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
          playsInline // This ensures compatibility on mobile devices
          disablePictureInPicture // Optional, prevents the Picture-in-Picture mode on some browsers
          controls={false}
          preload='auto'
        />
        <CardContent
          sx={{
            position: 'absolute',
            top: {
              xl: '70px',
              lg: '70px',
              md: '60px',
              sm: '60px',
              xs: '50px',
            },
            color: 'white',
            margin: 'auto',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'lemon',
              textAlign: 'center',
              fontSize: {
                xl: '56px',
                lg: '56px',
                md: '44px',
                sm: '26px',
                xs: '20px',
              },
            }}
          >
            We Prioritize Your Safety
          </Typography>
          <Typography
            sx={{
              fontFamily: 'lemon',
              textAlign: 'center',
              fontSize: {
                xl: '44px',
                lg: '44px',
                md: '26px',
                sm: '20px',
                xs: '16px',
              },
            }}
          >
            Bulletproof Vehicles, Indestructable Safes, and Trained Body Guards
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          width: '100%',
          height: {
            xl: '32vh',
            lg: '32vh',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          gap: {
            xl: 'none',
            lg: 'none',
            md: '25px',
            sm: '25px',
            xs: '25px',
          },
          paddingTop: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '50px',
          },
          paddingBottom: {
            xl: '0px',
            lg: '0px',
            md: '25px',
            sm: '25px',
            xs: '50px',
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
        {contactOptions.map(({ title, desc, logo }) => (
          <Box
            sx={{
              width: {
                xl: '20%',
                lg: '20%',
                md: '65%',
                sm: '80%',
                xs: '90%',
              },
              height: '27vh',
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
                    xs: '20px',
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
                  xs: '14px',
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
            Deluxe Transportation
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
            Deluxe Transportation at Cachet Bulletproof Services redefines
            luxury travel with safety. Our fleet, featuring premium, bulletproof
            vehicles, offers an exquisite blend of comfort and security.
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
            Each car is equipped with advanced protective technology and lavish
            interiors, ensuring a travel experience that is both sumptuous and
            secure. Indulge in the ultimate peace of mind with every journey.
          </Typography>
          <Button
            href='tel:17865327021'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: 'auto',
              '&:hover': { backgroundColor: 'gold' },
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
            xs: '80px',
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
            Diligent Protection
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
            Diligent Protection is the cornerstone of Cachet Bulletproof
            Services. We offer meticulously crafted security solutions with our
            bulletproof vehicles, ensuring each journey is safeguarded against
            any threat.
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
            Our commitment to your safety is unwavering, combining advanced
            technology with rigorous protocols. Trust us to provide a shield of
            protection that's as relentless and thorough as your need for
            security.
          </Typography>
          <Button
            href='tel:17865327021'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: 'auto',
              '&:hover': { backgroundColor: 'gold' },
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
            xs: '80px',
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
            Impenetrable Safe
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
            Impenetrable Safe, a key feature of Cachet Bulletproof Services,
            embodies ultimate security. Our vehicles are fortified with
            state-of-the-art bulletproof technology, creating a mobile safe
            haven.
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
            This unmatched protection is discreetly integrated into each car,
            ensuring clients travel with confidence, shielded from external
            threats. Experience the peace of mind that comes from knowing you're
            surrounded by invincible safety.
          </Typography>
          <Button
            href='tel:17865327021'
            variant='contained'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              marginRight: 'auto',
              '&:hover': { backgroundColor: 'gold' },
            }}
          >
            {' '}
            Start Today!
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Services;
