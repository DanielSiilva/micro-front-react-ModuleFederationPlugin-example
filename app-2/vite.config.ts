// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-01",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button",
        "./useCart": "./src/hooks/useCart", // Expondo o hook useCart
      },
      shared: ["react", "react-dom", "@reduxjs/toolkit", "react-redux"],
    }),
  ],
  build: {
    target: "esnext",
  },
});
