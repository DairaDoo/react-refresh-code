import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: alpha('#000', 0.7),
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
      }}
    >
      <CircularProgress
        color="primary"
        size={60}
        sx={{
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Sombra para efecto de profundidad
        }}
      />
    </Box>
  );
}
