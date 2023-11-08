import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import ProductPage from "../Components/Pages/ProductPage";
import LoginPage from "../Components/Pages/LoginPage";
import HomePage from "../Components/Pages/HomePage";
import SingUpPage from "../Components/Pages/SignUpPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SingUpPage /> },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
