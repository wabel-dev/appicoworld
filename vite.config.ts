import { paraglideVitePlugin } from '@inlang/paraglide-js';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import TailwindLegacyPlugin from 'vite-plugin-tailwind-legacy';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale']
		}),
		TailwindLegacyPlugin({
			tailwindConfig: 'tailwind.config.legacy.js',
			assetsDir: '.vercel/output/static/_app/immutable/assets', // or .netlify/...
			publicPath: '/_app/immutable/assets/',
			buildDir: '.vercel/output/static' ,
			injectInHTML: true,
		})
	]
});
