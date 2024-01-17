import React, { useRef, useState } from 'react';
import {
  Snackbar,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from '@mui/material';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_bs0dyed',
        'template_8c9posh',
        form.current,
        'PmBCjNlwxEGEJCptE'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          setShowMessage(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: { xl: '40vw', lg: '50vw' },
        padding: '20px',
        borderRadius: '15px',
        border: '3px solid gold',
        boxShadow:
          'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      }}
    >
      <Typography
        sx={{
          color: '#1B1E1E',
          fontFamily: 'Lemon',
          fontSize: {
            xl: '30px',
            lg: '30px',
            md: '22px',
            sm: '28px',
            xs: '28px',
          },
        }}
      >
        Get in Touch
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xl: '30px',
            lg: '30px',
            md: '22px',
            sm: '18px',
            xs: '12px',
          },
          color: '#1B1E1E',
          fontFamily: 'Lemon',
        }}
      >
        <span style={{ color: 'red' }}>*</span> INDICATES REQUIRED FIELD!
      </Typography>
      <form
        style={{
          paddingTop: '5px',
        }}
        ref={form}
        onSubmit={sendEmail}
      >
        <Grid container spacing={2}>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              name='user_firstname'
              label='First Name'
              placeholder='Enter First Name'
              variant='outlined'
              fullWidth
              required
              color='secondary'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'gold',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gold',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              name='user_lastname'
              label='Last Name'
              placeholder='Enter Last Name'
              variant='outlined'
              fullWidth
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'gold',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gold',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              type='email'
              name='user_email'
              label='Email'
              placeholder='Enter email'
              variant='outlined'
              fullWidth
              required
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'gold',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gold',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              type='number'
              name='user_phone'
              label='Number'
              placeholder='Enter Phone Number'
              variant='outlined'
              fullWidth
              required
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'gold',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gold',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <TextField
              label='Message'
              name='message'
              multiline
              rows={4}
              placeholder='Enter information about your issue here'
              variant='outlined'
              fullWidth
              required
              color='error'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'gold',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gold',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid xs={12} item sx={{ marginRight: 'auto' }}>
            <Button
              type='submit'
              value='Send'
              variant='contained'
              fullWidth
              color='primary'
              sx={{
                backgroundColor: 'gold',
                '&:hover': {
                  backgroundColor: '#e7c300',
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={showMessage}
        autoHideDuration={6000}
        onClose={handleCloseMessage}
        message='Thank you! We will get back to you shortly.'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
