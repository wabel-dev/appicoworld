<script lang="ts">
	import logo from '$lib/assets/appico_logo.webp';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Menu } from '@lucide/svelte'; // Assuming you use lucide-svelte for icons
</script>

<nav class="glass-nav">
	<a
		href="/"
		class="font-orbitron flex shrink-0 items-center gap-2 text-xl font-bold tracking-widest uppercase md:text-2xl"
	>
		<span class="whitespace-nowrap">Appico World</span>
		<img
			class="size-10 object-contain md:size-14"
			style="mix-blend-mode: multiply;"
			src={logo}
			alt="Appico World Logo"
		/>
	</a>

	<ul class="hidden list-none items-center gap-8 md:flex">
		<li>
			<a href="#hero" class="text-sm font-medium transition-colors hover:text-primary">Home</a>
		</li>
		<li>
			<a href="#services" class="text-sm font-medium transition-colors hover:text-primary"
				>Logistics</a
			>
		</li>
		<li>
			<a href="#contact" class="text-sm font-medium transition-colors hover:text-primary">Contact</a
			>
		</li>
	</ul>

	<div class="flex items-center gap-4">
		<Button size="sm" class="hidden sm:inline-flex">Get Quote</Button>

		<button class="inline-flex p-2 md:hidden" aria-label="Open Menu">
			<Menu class="size-6" />
		</button>
	</div>
</nav>

<style>
	.glass-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 4.5rem; /* Consistent height */

		/* Responsive Padding */
		padding: 0 1rem;

		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 50;

		background-color: hsla(var(--background), 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid hsl(var(--border));
	}

	@media (min-width: 768px) {
		.glass-nav {
			padding: 0 3rem;
		}
	}
</style>
