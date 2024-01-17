import React from 'react';
import Menu from '../menu/menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import safe from '../../assets/pics/trunksafe2.jpg';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import Ferrari from '../../assets/pics/cars7.jpg';
import Windows from '../../assets/pics/windows.jpg';
import Guy from '../../assets/pics/guy1.jpg';
import '../../index.css';
import { ReactComponent as HowOne } from '../../assets/howOne.svg';
import { ReactComponent as HowTwo } from '../../assets/howTwo.svg';
import { ReactComponent as HowThree } from '../../assets/howThree.svg';
import { ReactComponent as HowFour } from '../../assets/howFour.svg';

const Services = () => {
  const contactOptions = [
    {
      title: 'Fill Out Form',
      desc: 'Complete Quick Wheels easy form for stress-free vehicle transport across the USA. Just enter your details and let us handle the rest. Safe, reliable, quick!',
      logo: HowThree,
    },
    {
      title: 'Car gets picked up',
      desc: 'Quick Wheels ensures a smooth pickup of your car for USA-wide transport. Rely on us for efficient, secure, and timely vehicle collection. Your journey starts here!',
      logo: HowTwo,
    },
    {
      title: 'Routes Taken',
      desc: 'Quick Wheels carefully selects optimal routes for transporting your vehicle across the USA, guaranteeing efficiency and safety in every journey. Your car is in good hands!',
      logo: HowFour,
    },
    {
      title: 'Mint Condition',
      desc: 'Discover the magic of Quick Wheels! We ensure your car arrives in mint condition, making your journey unforgettable. Travel with confidence.',
      logo: HowOne,
    },
  ];
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Menu />
      <Box
        sx={{
          width: '100%',
          height: {
            xl: '65vh',
            lg: '65vh',
            md: '65vh',
            sm: '45vh',
            xs: '45vh',
          },
          backgroundImage: `url(${safe})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xl: '64px',
                lg: '68px',
                md: '38px',
                sm: '38px',
                xs: '22px',
              },
              marginTop: {
                xl: '150px',
                lg: '150px',
                md: '150px',
                sm: '50px',
                xs: '50px',
              },
              color: '#ECF1F2',
              width: '90%',
              fontFamily: 'Lemon',
              textAlign: 'center',
              paddingTop: {
                xl: '64px',
                lg: '.5em',
                md: '38px',
                sm: '70px',
                xs: '150px',
              },
              borderBottom: '1px solid gold',
            }}
          >
            Transportation Done Right
          </Typography>
          <Typography
            sx={{
              color: '#ECF1F2',
              width: '88%',
              fontFamily: 'Lemon',
              fontSize: {
                xl: '64px',
                lg: '56px',
                md: '38px',
                sm: '38px',
                xs: '20px',
              },
              textAlign: 'center',
            }}
          >
            Secure your vehicle shipping today!
          </Typography>
        </Box>
      </Box>
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

export default Services;
