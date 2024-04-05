// src/store/useCartStore.ts
import create from "zustand";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
}

const getInitialState = (): CartItem[] => {
  try {
    const itemsFromStorage = localStorage.getItem("cartItems");
    return itemsFromStorage
      ? JSON.parse(itemsFromStorage)
      : [{ id: 1, name: "React", price: 10 }];
  } catch (error) {
    console.error(
      "Falha ao recuperar os itens do carrinho do localStorage:",
      error
    );
    return [];
  }
};

const useCartStore = create<CartState>((set) => ({
  items: getInitialState(),
  addItem: (item) =>
    set((state) => {
      const newItems = [...state.items, item];
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    }),
  removeItem: (itemId) =>
    set((state) => {
      const newItems = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
      return { items: newItems };
    }),
}));

export default useCartStore;
