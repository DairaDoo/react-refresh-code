import React, { useState, useEffect } from 'react';
import PostsList from '../components/PostsList';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/system';
import { useLoaderData } from 'react-router-dom';

function Posts() {
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga
  const posts = useLoaderData();

  useEffect(() => {
    if (posts && posts.length > 0) {
      setIsLoading(false); // Ocultar loader cuando los datos se han cargado
    }
  }, [posts]);
  

  if (isLoading) {
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
          backgroundColor: alpha('#000', 0.7),
          backdropFilter: 'blur(5px)',
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

  return (
    <main>
      <PostsList posts={posts} /> {/* Mostrar contenido cuando no esté cargando */}
    </main>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('https://react-posts-backend-app.onrender.com/posts');
  if (!response.ok) {
    throw new Error('No se pudieron cargar los posts.');
  }
  const resData = await response.json();
  return resData.posts;
}
