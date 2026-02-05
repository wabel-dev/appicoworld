<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import MobileMenu from '$lib/components/layout/Menu.svelte';
	import Logo from '$lib/components/layout/Logo.svelte';
	import LanguageToggle from '../LanguageToggle.svelte';
	import { page } from '$app/state';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	const navLinks = [
		{ href: localizeHref('/#hero'), label: m.minor_legal_lemming_zip() },
		{ href: localizeHref('/#services'), label: m.gray_ideal_lemming_fry() },
		{ href: localizeHref('/#contact'), label: m.busy_long_polecat_win() },
		{ href: localizeHref('/about'), label: m.left_jolly_llama_praise() }
	];

	const isActive = (href: string) => {
		const url = new URL(href, page.url.origin);
		const pathMatch = page.url.pathname === url.pathname;
		const hashMatch = url.hash ? page.url.hash === url.hash : true;
		return pathMatch && hashMatch;
	};
</script>

<nav class="glass-nav">
	<a href="/" class="nav-logo">
		<Logo />
	</a>

	<ul class="nav-links">
		{#each navLinks as link}
			<li>
				<a href={link.href} class="nav-link-item {isActive(link.href) ? 'active' : ''}">
					{link.label}
				</a>
			</li>
		{/each}
	</ul>

	<div class="nav-actions">
		<div class="hide-mobile">
			<LanguageToggle />
		</div>
		<div class="hide-mobile">
			<Button size="sm" href="/#contact">
				{m.topical_red_panther_win()}
			</Button>
		</div>
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
		/* Fallbacks for older Chrome */
		background-color: rgb(255, 255, 255);
		background-color: hsla(var(--background), 0.8);
		-webkit-backdrop-filter: blur(12px);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid #e2e8f0;
		border-bottom: 1px solid hsl(var(--border));
	}

	.nav-logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		font-family: 'Orbitron', sans-serif;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: inherit;
	}

	/* Desktop Navigation Links */
	.nav-links {
		display: none; /* Hidden by default (mobile) */
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.nav-links li {
		display: inline-block;
		margin-left: 2rem; /* Using margin-left instead of gap */
	}

	.nav-links li:first-child {
		margin-left: 0;
	}

	.nav-link-item {
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none;
		transition: color 0.2s;
		color: inherit;
	}

	.nav-link-item.active {
		font-weight: 700;
		color: hsl(var(--primary));
	}

	/* Action area (Buttons/Toggle) */
	.nav-actions {
		display: flex;
		align-items: center;
	}

	/* Margin-based spacing for actions */
	.nav-actions > * {
		margin-left: 1rem;
	}

	.nav-actions > *:first-child {
		margin-left: 0;
	}

	.hide-mobile {
		display: none;
	}

	/* Media Queries for Desktop Support */
	@media (min-width: 768px) {
		.glass-nav {
			padding: 0 3rem;
		}

		.nav-links {
			display: flex;
			align-items: center;
		}

		.hide-mobile {
			display: inline-flex;
		}
	}
</style>
