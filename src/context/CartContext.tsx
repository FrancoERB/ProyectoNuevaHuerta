import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Box, CartItem } from "../types";

interface CartContextType {
  items: CartItem[];
  addToCart: (box: Box) => void;
  increaseQuantity: (boxId: string) => void;
  decreaseQuantity: (boxId: string) => void;
  removeFromCart: (boxId: string) => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("nueva-huerta-cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("nueva-huerta-cart", JSON.stringify(items));
  }, [items]);

  function addToCart(box: Box) {
    setItems((current) => {
      const existing = current.find((item) => item.box.id === box.id);

      if (existing) {
        return current.map((item) =>
          item.box.id === box.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...current, { box, quantity: 1 }];
    });
  }

  function increaseQuantity(boxId: string) {
    setItems((current) =>
      current.map((item) =>
        item.box.id === boxId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decreaseQuantity(boxId: string) {
    setItems((current) =>
      current
        .map((item) =>
          item.box.id === boxId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  function removeFromCart(boxId: string) {
    setItems((current) => current.filter((item) => item.box.id !== boxId));
  }

  const total = items.reduce(
    (sum, item) => sum + item.box.price * item.quantity,
    0,
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe utilizarse dentro de CartProvider");
  }

  return context;
}
