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
			plugins: [
				autoprefixer({
					// Target browsers for vendor prefixing
					overrideBrowserslist: [
						'Chrome >= 60',
						'Firefox >= 60',
						'Safari >= 12',
						'Edge >= 79',
						'last 2 versions',
						'> 1%',
						'not dead'
					]
				})
			]
		}
	},
	build: {
		// Target ES2015 for broad compatibility
		target: 'es2015',
		// Enable CSS code splitting for better performance
		cssCodeSplit: true,
		// Minify CSS in production
		cssMinify: true
	}
});
