import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  preview: {
    allowedHosts: ['elementum-cs3p.onrender.com']
  },
  // If you are seeing this during 'npm run dev', use the 'server' block instead:
  server: {
    allowedHosts: ['elementum-cs3p.onrender.com']
  }
});
