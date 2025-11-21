import resolve from '@rollup/plugin-node-resolve';
import { visualizer } from 'rollup-plugin-visualizer';
import typescript from '@rollup/plugin-typescript';
import { litScss } from 'rollup-plugin-scss-lit';
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: ['src/index.ts', 'src/it-button.ts'],
  output: {
    dir: 'dist',
    sourcemap: true,
    entryFileNames: 'src/[name].js',
  },
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.build.json',
      module: 'NodeNext',
    }),
    litScss({
      minify: process.env.NODE_ENV === 'production',
      options: {
        loadPaths: ['node_modules'],
        silenceDeprecations: ['import'],
      },
    }),
    visualizer({
      filename: 'dist/bundle-report.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
    }),
  ],
  external: [/^lit(\/|$)/, /^@italia\/globals(\/|$)/, /^@italia\/i18n(\/|$)/],
};
