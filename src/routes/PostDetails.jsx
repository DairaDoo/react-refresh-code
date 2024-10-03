import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData(); // get post data from loader.
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to="/" className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;


export async function loader({ params }) {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_HOST}/posts/${params.postId}`);
  
  if (!response.ok) {
    throw new Response('Error al obtener el post', { status: 404 });
  }

  const resData = await response.json();
  console.log('Post data:', resData); // Muestra los datos del post

  return resData.post; // Asegúrate de que esto sea correcto
}




