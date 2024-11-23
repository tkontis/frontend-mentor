// packages/recipe/vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: '/frontend-mentor/',
    build: {
        outDir: 'dist',
    },
    resolve: {
        alias: {
            '@mentor/recipe': path.resolve(__dirname, 'src'),
            '@mentor/recipe/*': path.resolve(__dirname, 'src/*'),
            '@mentor/recipe/components/*': path.resolve(__dirname, 'src/components/*'),
        },
    },
    css: {
        modules: {
            scopeBehaviour: 'local', // This ensures CSS modules work
        },
    },
});
