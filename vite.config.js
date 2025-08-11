import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Arbaz_PortFolio/',  // Use root base for Netlify
  plugins: [react()],
});

