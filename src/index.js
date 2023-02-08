import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/project",
        element: <Portfolio/>
    },
    {
        path: "/contact",
        element: <Contact/>
    },
  ]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );