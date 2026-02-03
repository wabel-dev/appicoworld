<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import MobileMenu from '$lib/components/layout/Menu.svelte';
	import Logo from '$lib/components/layout/Logo.svelte';

	// Define links in one place
	const navLinks = [
		{ href: '#hero', label: 'Home' },
		{ href: '#services', label: 'Logistics' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<nav class="glass-nav">
	<a
		href="/"
		class="font-orbitron flex shrink-0 items-center gap-2 text-xl font-bold tracking-widest uppercase md:text-2xl"
	>
		<Logo />
	</a>

	<ul class="hidden list-none items-center gap-8 md:flex">
		{#each navLinks as link}
			<li>
				<a href={link.href} class="text-sm font-medium transition-colors hover:text-primary">
					{link.label}
				</a>
			</li>
		{/each}
	</ul>

	<div class="flex items-center gap-4">
		<Button size="sm" class="hidden sm:inline-flex">Contact Us</Button>

		<MobileMenu links={navLinks} />
	</div>
</nav>

<style>
	.glass-nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 4.5rem;
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
