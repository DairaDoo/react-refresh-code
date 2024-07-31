import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // ReactRouter nos ayuda a crear rutas distintas en nuestro proyecto.
import App from "./App";
import NewPost from "./components/NewPost";

const router = createBrowserRouter([
  {path: '/', element: <App />}, // <our-domain>
  {path: '/create-post', element: <NewPost />} // <we call create post componente in this route>
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
