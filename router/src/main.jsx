import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { About, Contact, Home, Login, Navbar } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  { path: "/", element:<Layout/>,
    children:[
      {index:true , eleAboutment : <Home/>},
      {path:"about/:id?" , element : <About/>},
      {path:"contact" , element : <Contact/>},
      {path:"login" , element : <Login/>}
    ]
  },
  {path:"*",element: <h4>page not found : 404</h4>}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
