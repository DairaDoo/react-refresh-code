import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts])
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
        </Modal>
      )} 
      {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}  {/* se mapea en cada post y crea uno por cada elemento en el array. */}
      </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
