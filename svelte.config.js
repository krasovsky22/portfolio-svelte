import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			'@': 'src',
			'@utils': 'src/utils',
			'@stores': 'src/stores',
			'@components': 'src/components',
			'@icons': 'src/components/icons'
		}
	}
};

export default config;
