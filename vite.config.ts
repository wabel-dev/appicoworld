import { paraglideVitePlugin } from '@inlang/paraglide-js';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		})
	],

	css: {
		postcss: {
			plugins: [autoprefixer()]
		}
	},
	build: {
		// 1. Tell Vite to transpile JS for older browsers
		target: 'es2015',
		// 2. Tell Lightning CSS to downlevel modern CSS features
		cssTarget: 'chrome80'
	}
});
