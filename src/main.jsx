import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // ReactRouter nos ayuda a crear rutas distintas en nuestro proyecto.
import Posts, { loader as postsLoader } from "./routes/Posts";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import PostDetails, {loader as postDetailsLoader} from "./routes/PostDetails";
import RootLayout from "./routes/RootLayour";
import Loading from "./components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        errorElement: <Loading />,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:postId", element: <PostDetails />, loader: postDetailsLoader}
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
