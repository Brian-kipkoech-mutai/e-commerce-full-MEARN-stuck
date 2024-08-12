/* eslint-env node */
import path, { dirname } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

//generating absolute path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, "../backend/public"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    fs: {
      strict: false,
    },

    //this  is not  necessary since   browser  treate local host differently so we  dont need to
    //proxy the request
    // proxy: {
    //   // Proxy API requests to the backend
    //   "/api": {
    //     target: "http://localhost:5001",
    //     changeOrigin: true,  // Necessary for virtual hosted sites
    //     secure: false,  // we are not using https

    //   },
    // },
  },
});
