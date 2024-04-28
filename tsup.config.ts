import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  external: ['@umijs/lint/dist/config/eslint'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
})
