import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "./cartSlice";

interface SavedState {
  cart: CartState;
}

function saveStateToLocalStorage(state: CartState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.error("Could not save state", error);
  }
}

function loadStateFromLocalStorage(): SavedState | undefined {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return { cart: JSON.parse(serializedState) };
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
}

const preloadedState = loadStateFromLocalStorage();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
