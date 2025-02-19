import { resolve, join } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';
import fs from 'fs';
import * as packageJson from './package.json';

function generateEntries() {
  const componentsDir = resolve(__dirname, 'src/components');
  const componentDirs = fs.readdirSync(componentsDir).filter((file) => {
    const fullPath = join(componentsDir, file);

    return fs.statSync(fullPath).isDirectory();
  });

  return componentDirs.reduce(
    (entries, componentDir) => {
      entries[componentDir] = join(componentsDir, componentDir);

      return entries;
    },
    { index: resolve(__dirname, 'src/components') },
  );
}

// TODO: build styles for components individually and add multiple entry points to package.json file
export default defineConfig(() => ({
  plugins: [
    react(),
    svgr({ exportAsDefault: true }),
    tsConfigPaths(),
    dts({ exclude: ['**/*.test.{ts,tsx}', '**/test/**', '**/*.stories.{ts,tsx}'] }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets'),
      '@components': resolve(__dirname, './src/components'),
      '@common': resolve(__dirname, './src/common'),
    },
  },
  build: {
    lib: {
      entry: generateEntries(),
      name: 'ui-kit',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependencies),
        ...Object.keys(packageJson.peerDependencies),
        'react/jsx-runtime',
      ],
    },
  },
}));
