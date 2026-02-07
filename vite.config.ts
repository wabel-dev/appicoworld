import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import TailwindLegacyPlugin from 'vite-plugin-tailwind-legacy';

export default defineConfig({
	plugins: [
		tailwindcss(),
		TailwindLegacyPlugin({
			tailwindConfig: 'tailwind.config.legacy.js',
			// SvelteKit outputs static assets to this folder
			buildDir: '.svelte-kit/output/client',
			// Where to save the generated legacy file
			assetsDir: '.svelte-kit/output/client/_app/immutable/assets',
			// This must match your SvelteKit public path
			publicPath: '/_app/immutable/assets/',
			// The name of your CSS file to remove in legacy browsers
			deleteStyles: ['layout'],
			injectInHTML: true
		}),
		sveltekit(),

		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		})
	]
});
