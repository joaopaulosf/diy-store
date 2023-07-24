import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ShoppingCartProvider } from "context/ShoppingCart";
import { routesConfig } from "./routesConfig";

const router = createBrowserRouter(routesConfig);

export const AppRoutes = () => {
  return (
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
};
