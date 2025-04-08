import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],  // ✅ Supports .glb files
  base: './',                  // ✅ Crucial for Netlify static deployment
});
