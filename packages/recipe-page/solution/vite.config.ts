import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    root: path.resolve(__dirname),
    resolve: {
        alias: {
            '@mentor/recipe': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
});
