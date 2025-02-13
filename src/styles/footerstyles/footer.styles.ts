// src/styles/footerStyles.ts

import { SxProps, Theme } from '@mui/system';

export const footerContainer: SxProps<Theme> = {
  backgroundColor: '#2c2c2c',
  color: '#fff',
  py: 4,
  mt: 'auto',  // Push footer to the bottom of the page in flex layout
  width: '100%', // Full-width
  position: 'relative', // Ensure it's in the normal document flow
};

export const footerContent: SxProps<Theme> = {
  maxWidth: '1200px',
  margin: '0 auto',
};

export const gridItem: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
};

export const footerSectionTitle: SxProps<Theme> = {
  fontWeight: 'bold',
  mb: 2,
};

export const footerLink: SxProps<Theme> = {
  display: 'block',
  mb: 1,
};

export const socialLink: SxProps<Theme> = {
  display: 'block',
  textAlign: 'center',
  fontWeight: 'bold',
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#fff',
  color: '#2c2c2c',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
};

export const footerCopyright: SxProps<Theme> = {
  textAlign: 'center',
  mt: 4,
  color: '#fff',
};
