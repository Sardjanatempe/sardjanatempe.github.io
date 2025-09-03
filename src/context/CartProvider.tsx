import { useState } from "react";
import type { ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { CartContextType } from "./CartContext";

type CartItem = {
  id: number;
  quantity: number;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const syncLocalStorage = (updated: CartItem[]) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const addToCart: CartContextType["addToCart"] = (id) => {
    const existing = cart.find((item) => item.id === id);
    let updated: CartItem[];
    if (existing) {
      updated = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cart, { id, quantity: 1 }];
    }
    syncLocalStorage(updated);
  };

  const removeFromCart: CartContextType["removeFromCart"] = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    syncLocalStorage(updated);
  };

  const clearCart: CartContextType["clearCart"] = () => {
    syncLocalStorage([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
