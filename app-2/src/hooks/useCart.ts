// src/hooks/useCart.ts
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, CartItem } from "../store/cartSlice";
import { RootState } from "../store/store";

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const handleAddItem = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem(itemId));
  };

  return {
    items,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };
};
