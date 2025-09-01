import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/Stroyvektor.Frontend/',
    plugins: [react()],
    resolve: {
        alias: {
            '@app': path.resolve(__dirname, 'src/app'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@entities': path.resolve(__dirname, 'src/entities'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "@shared/styles/compat" as *;`,
            },
        },
    },
    server: {
        port: 3000,
        open: true,
        host: true,
    },
});
