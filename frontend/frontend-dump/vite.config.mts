import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  server: {
    host: "0.0.0.0", // заменить "true" на "0.0.0.0"
    port: 3000 // измените порт на 8080 или любой другой свобо
  },
  plugins: [react()],
});
