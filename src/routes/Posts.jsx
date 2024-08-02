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