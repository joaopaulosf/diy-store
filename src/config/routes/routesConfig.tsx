import { Outlet } from "react-router-dom";

import { Navbar } from "components/Navbar";
import { Footer } from "layout/Footer";
import { Auth } from "pages/Auth";
import { Cart } from "pages/Cart";
import { ErrorPage } from "pages/Error";
import { Home } from "pages/Home";
import { Products } from "pages/Products";
import { SingleProduct } from "pages/SingleProduct";

export const routesConfig = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
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
    ],
  },
];
