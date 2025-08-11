import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',  // <-- set this to '/'
  plugins: [react()],
});
