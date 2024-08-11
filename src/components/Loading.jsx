import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/system';

export default function Loading() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: alpha('#000', 0.7), // Fondo oscuro con opacidad
        backdropFilter: 'blur(5px)', // Desenfoque
        zIndex: 9999,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <CircularProgress color="secondary" size={80} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Cargando, por favor espere...
      </Typography>
    </Box>
  );
}
