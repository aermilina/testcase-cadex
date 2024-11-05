import { createTheme } from '@mui/material/styles';
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const theme = createTheme({
  typography: {
    fontFamily: ptSans.style.fontFamily,
    fontSize: 16,
    h1: {
      fontSize: '6.8rem',
      '@media (max-width:900px)': {
        fontSize: '4rem'
      }
    },
    body1: {
      fontSize: '1.14rem',
      '@media (max-width:900px)': {
        fontSize: '1rem'
      }
    },
    h2: {
      fontsize: '4.2rem',
      '@media (max-width:900px)': {
        fontSize: '3rem'
      }
    },
    h6: {
      fontSize: '1.4rem',
      '@media (max-width:900px)': {
        fontSize: '1.1rem'
      }
    }
  },
  palette: {
    primary: {
      main: '#5CA4EA'
    }
  }
});
