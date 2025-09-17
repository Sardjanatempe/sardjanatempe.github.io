import { createContext } from "react";

type CartItem = {
  id: number;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
