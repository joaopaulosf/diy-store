import { createContext, useCallback, useMemo } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";
import products from "data/products.json";
import { CartItem, ShoppCartContext, ShoppingCartProviderProps } from "models";

export const ShoppingCartContext = createContext({} as ShoppCartContext);

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

  const cartQuantity = useMemo(
    () => cartItems.reduce((quantity, item) => item.quantity + quantity, 0),
    [cartItems]
  );

  const getCartItem = useCallback(
    (id: number) => products.find((item) => Number(item.id) === id),
    []
  );

  const getItemQuantity = useCallback(
    (id: number) => cartItems.find((item) => item.id === id)?.quantity || 0,
    [cartItems]
  );

  const updateCartItemQuantity = useCallback(
    (id: number, quantity: number) => {
      setCartItems((currItems) => {
        const itemIndex = currItems.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
          return [...currItems, { id, quantity }];
        } else {
          const updatedItems = [...currItems];
          updatedItems[itemIndex].quantity = quantity;
          return updatedItems;
        }
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCartItems((currItems) => currItems.filter((item) => item.id !== id));
    },
    [setCartItems]
  );

  const increaseQuantity = useCallback(
    (id: number) => {
      const currentQuantity = getItemQuantity(id);
      updateCartItemQuantity(id, currentQuantity + 1);
    },
    [getItemQuantity, updateCartItemQuantity]
  );

  const decreaseQuantity = useCallback(
    (id: number) => {
      const currentQuantity = getItemQuantity(id);
      if (currentQuantity > 1) {
        updateCartItemQuantity(id, currentQuantity - 1);
      } else {
        removeFromCart(id);
      }
    },
    [getItemQuantity, updateCartItemQuantity, removeFromCart]
  );

  const value = {
    getItemQuantity,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getCartItem,
    cartItems,
    cartQuantity,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
