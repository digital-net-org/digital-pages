import { resolve } from 'path';
import { type BuildOptions } from 'vite';

export const build: BuildOptions = {
    outDir: 'dist',
    rollupOptions: {
        input: {
            main: resolve(__dirname, '..', 'index.html'),
            lib: resolve(__dirname, '..', 'src/index.tsx'),
        },
        output: {
            compact: true,
            strict: true,
            format: 'es',
            sourcemap: false,
            entryFileNames: '[hash].js',
            chunkFileNames: 'lib/[hash].js',
        },
    },
};
