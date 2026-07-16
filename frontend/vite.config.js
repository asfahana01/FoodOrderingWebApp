// this file helps us to configure the react support and connect our frontend to the backend 
// smoothly without any CORS issues during the development phase

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],//add the react plugin to the Vite configuration
  server: {
    //when our react frontend runs on one PORT (eg: 5173) and our backend runs on another PORT (eg: 6000)
    //we need to set up a proxy to forward requests from the frontend to the backend
    proxy: {
      "/api": {
        // target: "https://internship-b7.onrender.com",
        target: "http://localhost:8000",
        changeOrigin: true, //this changes the request origin to match the target server
        secure: false,//allows the communication even if ssl certificate is not valid (useful for development)
      },
    },
  },
});
