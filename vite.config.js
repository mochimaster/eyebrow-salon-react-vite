import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change this if your GitHub repository has a different name.
export default defineConfig({
  plugins: [react()],
  base: "/eyebrow-salon-react-vite/"
});
