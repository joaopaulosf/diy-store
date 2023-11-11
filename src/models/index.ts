import { ReactNode } from "react";

export type CardProps = {
  cardClass: string;
  stopRenderAt: number;
};

export type ProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  sale?: number;
  image: {
    main: string;
    content: string;
  };
};

export type ProductType = ProductProps | undefined;

export type CartItemProps = {
  id: number;
  quantity: number;
};

export type ProductsProps = {
  productsTitle: string;
  cardQuantity: number;
  cardClass: string;
};

export type ShoppingCartProviderProps = {
  children: ReactNode;
};

export type CartItem = {
  id: number;
  quantity: number;
};

export type ShoppCartContext = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  getCartItem: (id: number) => ProductType;
  removeAllCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

export type IuseNav = {
  closeMenu: () => void;
  menuIcon: ReactNode;
  dropdownMenu: string | false;
};

export type PopUpProps = {
  imgUrl: string;
  title: string;
  message: string;
};
