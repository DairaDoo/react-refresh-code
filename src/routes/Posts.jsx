import React, { useState, useEffect } from "react";
import PostsList from "../components/PostsList";
import { useLoaderData } from "react-router-dom";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";

// Componente que renderiza la lista de posts con un loader mientras se cargan los datos
function Posts() {
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar el loader
  const posts = useLoaderData(); // Obtener los datos cargados por el loader

  useEffect(() => {
    // Simular un pequeño retraso para asegurarnos de que el loading funcione
    const timer = setTimeout(() => {
      if (posts) {
        setIsLoading(false); // Ocultar loader cuando los datos se han cargado
      }
    }, 1000);

    return () => clearTimeout(timer); // Limpiar el timer en el desmontaje del componente
  }, [posts]);

  if (isLoading) {
    return <Loading />; // Mostrar componente Loading mientras los datos se cargan
  }

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
  const response = await fetch("https://react-posts-backend-app.onrender.com/posts");
  if (!response.ok) {
    throw new Error("No se pudieron cargar los posts.");
  }
  const resData = await response.json();
  return resData.posts;
}
