import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

// you can always return one single element on react. You must have on root JSX element.
function Posts() {

  return (
    <>
      <Outlet />
      <main>
        <PostsList/>
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('http://localhost:3000/posts');
  const resData = await response.json();
  return resData.posts;
}