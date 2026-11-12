import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), {
    name: 'react-services-route',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (['/services', '/portfolio'].includes(req.url?.split('?')[0])) req.url = '/index.html';
        next();
      });
    }
  }]
});
