import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://thorstenhalsch.github.io',
  base: process.env.BASE_PATH || '/Webpage-preview',
  trailingSlash: 'always',
  output: 'static',
});
