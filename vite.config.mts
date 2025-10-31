/* eslint-env node */
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
});
