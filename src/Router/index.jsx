import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import ProductPage from "../Components/Pages/ProductPage";
import HomeCarousel from "../Components/Layout/HomeCarousel";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomeCarousel />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
