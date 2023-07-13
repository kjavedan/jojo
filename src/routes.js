//REACT
import React from "react";
//REACT-ROUTER
import { Navigate, createBrowserRouter } from "react-router-dom";
//LAYOUT
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import MainLayout from "./layout/MainLayout";
import Posts from "./pages/Posts";
import BMRCalculator from "./tools/BMRCalculator";

//PAGES

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Page404 />,
    children: [
      {
        element: <Navigate to="/home" />,
        index: true,
      },
      { path: "home", element: <Home /> },
      { path: "BMR-calculator", element: <BMRCalculator /> },
      { path: "posts/:id", element: <Posts /> },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default router;
