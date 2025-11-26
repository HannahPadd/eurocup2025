import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    host: true,
    port: 5173
  },
  server: {
    port: 5173,
    host: true,
    origin: "http://0.0.0.0:5173",
    allowedHosts: ["manager.itgeurocup.com"],
  },
});