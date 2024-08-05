import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // ReactRouter nos ayuda a crear rutas distintas en nuestro proyecto.
import Posts, {loader as postsLoader} from "./routes/Posts";
import NewPost, {action as newPostAction} from "./routes/NewPost";
import RootLayout from "./routes/RootLayour";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: "/create-post", element: <NewPost />, action: newPostAction}],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
