import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState, useEffect } from "react";

function PostsList({ isPosting, onStopPosting }) {

  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false); // estado para carga mientras se llaman los post (para retroalimentación).

  useState(() => {
    async function fetchPosts() {
      setIsFetching(true); // cargando...
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false); // terminado...
    }

    fetchPosts();
  }, []);

   // the fetch sends http request (You cand send a send data).
  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
      )} 
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}  {/* se mapea en cada post y crea uno por cada elemento en el array. */}
      </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
