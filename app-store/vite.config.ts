import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "storeApp",
      filename: "remoteEntry.js",
      exposes: {
        "./store": "./src/store/store.ts",
      },
      shared: ["react", "react-dom", "@reduxjs/toolkit", "react-redux"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
