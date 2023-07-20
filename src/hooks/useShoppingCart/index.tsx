import { useContext } from "react";

import { ShoppingCartContext } from "context/ShoppingCart";

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
