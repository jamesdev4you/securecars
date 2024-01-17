import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const MyStyledButton = (props) => (
  <Button
    variant='contained'
    href='tel:14159423491'
    sx={{
      paddingBottom: '5px',
      width: '200px',
      height: '30px',
      background: `#1B1E1E`,
      color: '#F5DE6D',
      '&:hover': {
        color: 'black',
        background: 'gold',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '2px solid #F5DE6D',
      marginTop: 'auto',
    }}
  >
    Book Today!
  </Button>
);

const LightPhoneButton = (props) => (
  <Button
    variant='contained'
    oncli
    sx={{
      paddingBottom: '5px',
      width: '150px',
      height: '30px',
      background: `gold`,
      color: 'black',
      display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' },
      fontWeight: 'bold',
      '&:hover': {
        color: 'black',
        background: 'gold',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '1px solid white',
      marginLeft: 'auto',
    }}
    href='tel:14159423491'
  >
    Call Now
  </Button>
);

const LightPhonePhoneButton = (props) => (
  <Button
    variant='contained'
    href='tel:14159423491'
    sx={{
      paddingBottom: '5px',
      width: '150px',
      height: '30px',
      background: `gold`,
      color: 'black',
      fontWeight: 'bold',
      display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'flex' },
      '&:hover': {
        color: 'black',
        background: 'gold',
        border: '2px solid #5B5C50',
        fontWeight: 'bold',
      },
      border: '1px solid white',
      marginRight: {
        xl: 'auto',
        lg: 'auto',
        md: 'none',
        sm: 'none',
        xs: 'none',
      },
    }}
  >
    Call Now
  </Button>
);

export { MyStyledButton, LightPhoneButton, LightPhonePhoneButton };
