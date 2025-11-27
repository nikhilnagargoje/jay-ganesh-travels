import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/jay-ganesh-travels/", // ← येथे तुझ्या GitHub repo चे नाव द्यायचे
});
