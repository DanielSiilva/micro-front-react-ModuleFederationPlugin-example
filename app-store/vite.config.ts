// vite.config.js do micro-frontend de store
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import zustand from "zustand";

export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: "store-app",
      filename: "remoteEntry.js",
      exposes: {
        "./useCartStore": "./src/store/useCartStore.ts",
      },
      shared: ["react", "react-dom", "zustand"],
    }),
  ],
});
