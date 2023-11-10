import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Navbar } from "components/Navbar";
import { Footer } from "layout/Footer";
import { Home } from "pages/Home";
import { CheckOut } from "pages/CheckOut";
import Loading from "layout/Loading";
const Auth = lazy(() => import("pages/Auth"));
const Cart = lazy(() => import("pages/Cart"));
const ErrorPage = lazy(() => import("pages/ErrorPage"));
const Products = lazy(() => import("pages/Products"));
const SingleProduct = lazy(() => import("pages/SingleProduct"));

const routesConfig = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <SingleProduct />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
];

export default routesConfig;
