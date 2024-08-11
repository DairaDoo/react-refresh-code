import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/system';

export default function Loading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    // Incrementar el progreso cada segundo
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return oldProgress;
        }
        return Math.min(oldProgress + 5, 100); // Incrementar en 5% cada segundo
      });
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, []);

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
        backgroundColor: alpha('#000', 0.8), // Fondo oscuro con mayor opacidad
        backdropFilter: 'blur(10px)', // Mayor desenfoque para mayor efecto
        zIndex: 9999,
        color: 'white',
        padding: 3,
        textAlign: 'center', // Centrar el texto
      }}
    >
      <CircularProgress
        color="secondary"
        size={80} // Tamaño más grande para mayor visibilidad
        sx={{
          mb: 3, // Margin-bottom para separación
          boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)', // Sombra más pronunciada
        }}
      />
      <Typography variant="h5" gutterBottom>
        Cargando, por favor espere...
      </Typography>
      <Box sx={{ width: '80%', maxWidth: 400, mt: 3 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10, // Aumento de altura para mayor visibilidad
            borderRadius: 5, // Bordes redondeados
            backgroundColor: alpha('#fff', 0.2), // Fondo más claro
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#76c7c0', // Color de la barra
            },
          }}
        />
        <Typography variant="caption" color="#e0e0e0" align="center" sx={{ mt: 1 }}>
          {progress}% completado
        </Typography>
      </Box>
    </Box>
  );
}
