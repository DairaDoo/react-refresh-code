import React from 'react';
import PostsList from '../components/PostsList';
import { useLoaderData } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Posts() {
  const posts = useLoaderData(); // Obtener los datos cargados por el loader

  return (
    <>
      <Outlet />
      <main>
        <PostsList posts={posts} /> {/* Pasar los posts a PostsList */}
      </main>
    </>
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
