import { paraglideVitePlugin } from '@inlang/paraglide-js';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
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
		// Use lightningcss to process CSS (it handles prefixing & transpiling)
		transformer: 'lightningcss',
		lightningcss: {
			// Target Chrome 80+ (covers your old laptops).
			// This forces Tailwind to remove "@layer" wrappers and fix syntax.
			targets: browserslistToTargets(browserslist('>= 0.25%, Chrome >= 80'))
		}
	},
	build: {
		// Target ES2015 for broad compatibility
		target: 'es2015',
		// Minify CSS in production
		cssMinify: 'lightningcss'
	}
});
