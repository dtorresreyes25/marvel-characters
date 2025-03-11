import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from '@svgr/rollup';
import { configDefaults } from 'vitest/config';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    root: __dirname,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        '*.cjs',
        'src/locales/**',
        'src/types/**',
        'src/test/**',
        '**/*.d.ts',
        '**/*.types.ts',
        '**/index.ts',
        'src/main.tsx',
        'src/App.tsx',
      ],
    },
  },
});
