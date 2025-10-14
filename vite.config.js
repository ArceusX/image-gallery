import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(() => {
  // VITE_CONTENT_FOLDER comes from the .env.<mode> file
  const contentFolder = process.env.VITE_CONTENT_FOLDER || 'live';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@content': path.resolve(__dirname, `src/content/${contentFolder}`),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    }
  };
});