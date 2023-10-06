
import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
    test: {
      include: ['src/**/*.{test,unit}.{ts,js}'],
      globals: true,
      environment: 'jsdom',
    },
    plugins: [svelte({hot: !process.env.VITEST})],
  
  });