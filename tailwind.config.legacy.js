/** @type {import('tailwindcss').Config} */
module.exports = {
	// IMPORTANT: Point to SvelteKit's build output
	content: ['./.svelte-kit/output/client/**/*.{html,js}'],

	darkMode: ['class'],

	theme: {
		extend: {
			colors: {
				// Light mode colors (converted from hex fallbacks)
				background: '#dcdadb',
				foreground: '#000000',
				card: '#f5f5f5',
				'card-foreground': '#333333',
				popover: '#f5f5f5',
				'popover-foreground': '#333333',
				primary: '#bc1b21',
				'primary-foreground': '#333333',
				secondary: '#2e3440',
				'secondary-foreground': '#fefefe',
				muted: '#cfcdce',
				'muted-foreground': '#4b5563',
				accent: '#bfbbbd',
				'accent-foreground': '#000000',
				destructive: '#cc3333',
				'destructive-foreground': '#ffffff',
				border: '#d0d0d0',
				input: '#e0e0e0',
				ring: '#606060',

				// Chart colors
				chart: {
					1: '#606060',
					2: '#476666',
					3: '#909090',
					4: '#a8a8a8',
					5: '#c0c0c0'
				},

				// Sidebar colors
				sidebar: '#eaeaea',
				'sidebar-foreground': '#333333',
				'sidebar-primary': '#606060',
				'sidebar-primary-foreground': '#ffffff',
				'sidebar-accent': '#c0c0c0',
				'sidebar-accent-foreground': '#333333',
				'sidebar-border': '#d9d9d9',
				'sidebar-ring': '#d0d0d0'
			},

			borderRadius: {
				sm: 'calc(0.35rem - 4px)',
				md: 'calc(0.35rem - 2px)',
				lg: '0.35rem',
				xl: 'calc(0.35rem + 4px)'
			},

			fontFamily: {
				gunken: ['Gunken', 'system-ui', 'sans-serif']
			},

			// Extended spacing utilities (matching the original config)
			height: {
				...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, val) => {
					acc[val] = `${val * 0.25}rem`;
					return acc;
				}, {})
			},
			width: {
				...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, val) => {
					acc[val] = `${val * 0.25}rem`;
					return acc;
				}, {})
			},
			padding: {
				...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, val) => {
					acc[val] = `${val * 0.25}rem`;
					return acc;
				}, {})
			},
			margin: {
				...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, val) => {
					acc[val] = `${val * 0.25}rem`;
					return acc;
				}, {})
			},
			gap: {
				...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, val) => {
					acc[val] = `${val * 0.25}rem`;
					return acc;
				}, {})
			},
			zIndex: {
				...Array.from({ length: 1000 }, (_, i) => i + 1).reduce((acc, val) => {
					acc[val] = `${val}`;
					return acc;
				}, {})
			}
		}
	},

	plugins: [
		// Add the base styles from your original CSS
		function ({ addBase }) {
			addBase({
				'*': {
					borderColor: 'var(--color-border)',
					outlineColor: 'rgba(96, 96, 96, 0.5)' // ring color with 50% opacity
				},
				body: {
					backgroundColor: 'var(--color-background)',
					color: 'var(--color-foreground)'
				}
			});
		},

		// Add CSS variables plugin for dark mode support
		function ({ addBase }) {
			addBase({
				':root': {
					'--background': '#dcdadb',
					'--foreground': '#000000',
					'--card': '#f5f5f5',
					'--card-foreground': '#333333',
					'--popover': '#f5f5f5',
					'--popover-foreground': '#333333',
					'--primary': '#bc1b21',
					'--primary-foreground': '#333333',
					'--secondary': '#2e3440',
					'--secondary-foreground': '#fefefe',
					'--muted': '#cfcdce',
					'--muted-foreground': '#4b5563',
					'--accent': '#bfbbbd',
					'--accent-foreground': '#000000',
					'--destructive': '#cc3333',
					'--destructive-foreground': '#ffffff',
					'--border': '#d0d0d0',
					'--input': '#e0e0e0',
					'--ring': '#606060',
					'--chart-1': '#606060',
					'--chart-2': '#476666',
					'--chart-3': '#909090',
					'--chart-4': '#a8a8a8',
					'--chart-5': '#c0c0c0',
					'--sidebar': '#eaeaea',
					'--sidebar-foreground': '#333333',
					'--sidebar-primary': '#606060',
					'--sidebar-primary-foreground': '#ffffff',
					'--sidebar-accent': '#c0c0c0',
					'--sidebar-accent-foreground': '#333333',
					'--sidebar-border': '#d9d9d9',
					'--sidebar-ring': '#d0d0d0',
					'--radius': '0.35rem',

					// Color mappings
					'--color-background': 'var(--background)',
					'--color-foreground': 'var(--foreground)',
					'--color-card': 'var(--card)',
					'--color-card-foreground': 'var(--card-foreground)',
					'--color-popover': 'var(--popover)',
					'--color-popover-foreground': 'var(--popover-foreground)',
					'--color-primary': 'var(--primary)',
					'--color-primary-foreground': 'var(--primary-foreground)',
					'--color-secondary': 'var(--secondary)',
					'--color-secondary-foreground': 'var(--secondary-foreground)',
					'--color-muted': 'var(--muted)',
					'--color-muted-foreground': 'var(--muted-foreground)',
					'--color-accent': 'var(--accent)',
					'--color-accent-foreground': 'var(--accent-foreground)',
					'--color-destructive': 'var(--destructive)',
					'--color-destructive-foreground': 'var(--destructive-foreground)',
					'--color-border': 'var(--border)',
					'--color-input': 'var(--input)',
					'--color-ring': 'var(--ring)',
					'--color-chart-1': 'var(--chart-1)',
					'--color-chart-2': 'var(--chart-2)',
					'--color-chart-3': 'var(--chart-3)',
					'--color-chart-4': 'var(--chart-4)',
					'--color-chart-5': 'var(--chart-5)',
					'--color-sidebar': 'var(--sidebar)',
					'--color-sidebar-foreground': 'var(--sidebar-foreground)',
					'--color-sidebar-primary': 'var(--sidebar-primary)',
					'--color-sidebar-primary-foreground': 'var(--sidebar-primary-foreground)',
					'--color-sidebar-accent': 'var(--sidebar-accent)',
					'--color-sidebar-accent-foreground': 'var(--sidebar-accent-foreground)',
					'--color-sidebar-border': 'var(--sidebar-border)',
					'--color-sidebar-ring': 'var(--sidebar-ring)'
				},

				// Dark mode variables
				'.dark': {
					'--background': '#383838',
					'--foreground': '#e2e2e2',
					'--card': '#3e3e3e',
					'--card-foreground': '#e2e2e2',
					'--popover': '#3e3e3e',
					'--popover-foreground': '#e2e2e2',
					'--primary': '#b4b4b4',
					'--primary-foreground': '#383838',
					'--secondary': '#4f4f4f',
					'--secondary-foreground': '#e2e2e2',
					'--muted': '#494949',
					'--muted-foreground': '#999999',
					'--accent': '#5f5f5f',
					'--accent-foreground': '#e2e2e2',
					'--destructive': '#d66a4a',
					'--destructive-foreground': '#ffffff',
					'--border': '#545454',
					'--input': '#4f4f4f',
					'--ring': '#b4b4b4',
					'--chart-1': '#b4b4b4',
					'--chart-2': '#7a9aa8',
					'--chart-3': '#8b8b8b',
					'--chart-4': '#767676',
					'--chart-5': '#5f5f5f',
					'--sidebar': '#3d3d3d',
					'--sidebar-foreground': '#e2e2e2',
					'--sidebar-primary': '#b4b4b4',
					'--sidebar-primary-foreground': '#383838',
					'--sidebar-accent': '#5f5f5f',
					'--sidebar-accent-foreground': '#e2e2e2',
					'--sidebar-border': '#545454',
					'--sidebar-ring': '#b4b4b4'
				}
			});
		}
	]
};
