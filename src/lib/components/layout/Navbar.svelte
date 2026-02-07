<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import MobileMenu from '$lib/components/layout/Menu.svelte';
	import Logo from '$lib/components/layout/Logo.svelte';
	import LanguageToggle from '../LanguageToggle.svelte';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';
	import ThemeToggle from '$lib/components/layout/Theme-toggle.svelte';

	// Define links in one place
	const navLinks = [
		{ href: localizeHref('/#hero'), label: m.minor_legal_lemming_zip() },
		{ href: localizeHref('/#services'), label: m.gray_ideal_lemming_fry() },
		{ href: localizeHref('/#partners'), label: m.wide_honest_felix_race()},
		{ href: localizeHref('/#contact'), label: m.busy_long_polecat_win() },
		{ href: localizeHref('/about'), label: m.left_jolly_llama_praise() }
	];
	const isActive = (href: string) => {
		const url = new URL(href, page.url.origin);

		// 1. Check if the pathnames match (e.g., /about === /about)
		const pathMatch = page.url.pathname === url.pathname;

		// 2. Check if the hash matches (e.g., #hero === #hero)
		// If the href doesn't have a hash, we treat it as active if path matches
		const hashMatch = url.hash ? page.url.hash === url.hash : true;

		return pathMatch && hashMatch;
	};
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
				<a
					href={link.href}
					class={[
						'text-sm font-medium transition-colors hover:text-primary',
						isActive(link.href) ? 'font-bold text-primary' : ''
					]}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>

	<div class="flex items-center gap-4">
		<LanguageToggle class="hidden sm:inline-flex" />
		<ThemeToggle class="hidden md:inline-flex" />
		<Button size="sm" class="hidden sm:inline-flex" href="/#contact"
			>{m.topical_red_panther_win()}</Button
		>

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
