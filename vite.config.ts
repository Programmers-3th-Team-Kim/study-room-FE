import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
import react from '@vitejs/plugin-react';
import path, { resolve } from 'path';
import { readFileSync } from 'fs';

// 빌드에서 문제 발생시, 다음을 이용
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: '0.0.0.0',
  //   https: {
  //     key: readFileSync(resolve(__dirname, './localhost-key.pem')),
  //     cert: readFileSync(resolve(__dirname, './localhost.pem')),
  //   },
  // },

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
