import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Guys1 from '../../assets/pics/cars3.jpg';
import Guys from '../../assets/pics/guy3.jpg';
import Menu from '../menu/menu';
import { LightPhonePhoneButton } from '../../styledComponents';
import Ferrari from '../../assets/pics/cars7.jpg';
import Windows from '../../assets/pics/windows.jpg';
import Guy from '../../assets/pics/guys4.jpg';

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
            xs: '80vh',
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
          },
          paddingBottom: {
            xl: '0px',
            lg: '0px',
            md: '0px',
            sm: '10px',
            xs: '30px',
          },
          gap: '50px',
          borderBottom: '1px solid white',
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
              backgroundPosition: 'center',
              boxShadow: {
                sm: 'none',
                md: 'rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px, rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px, rgba(255, 255, 255, 0.05) 25px 25px',
              },
              border: {
                xl: 'none',
                lg: 'none',
                md: 'none',
                sm: '3px solid gold',
                xs: '3px solid gold',
              },
              borderRadius: '15px',
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
                xl: '28px',
                lg: '28px',
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
            Fortified Cars, Impenetrable Safety, Expertly Trained Personnel for
            Secure Journeys.
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
            Luxurious Protection
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
            Luxurious Protection at Cachet Bulletproof Services merges elegance
            with security. Our fleet of high-end, bulletproof vehicles offers
            both opulence and unparalleled safety.
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
            Travel in style, comfort, and confidence, knowing every journey is
            under the safeguard of our advanced protective technology and expert
            care.
          </Typography>
          <Button
            href='tel:17865327021'
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
            Bulletproof Windows
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
            Bulletproof Windows, a hallmark of Cachet Bulletproof Services,
            offer unmatched resilience and clarity. Ideal for high-risk
            environments, they ensure your safety without compromising the
            aesthetic and visibility.
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
            Crafted with cutting-edge materials, these windows provide superior
            protection against ballistic threats while maintaining the sleek
            appearance of our luxury vehicles.
          </Typography>
          <Button
            href='tel:17865327021'
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
            Safety In Numbers
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
            Safety in Numbers reflects our ethos at Cachet Bulletproof Services.
            Our convoy options, comprising multiple bulletproof vehicles,
            provide an added layer of security for clients.
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
            This strategic approach not only enhances physical protection but
            also creates a psychological deterrent against potential threats.
            Travel with peace of mind, knowing you're surrounded by a
            formidable, well-coordinated shield of safety.
          </Typography>
          <Button
            href='tel:17865327021'
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
