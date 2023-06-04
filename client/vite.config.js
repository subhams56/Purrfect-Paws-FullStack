import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
  
  ],
  server: {
    host: 'localhost',
    port: 4000,
  },
});
