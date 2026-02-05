<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/appico_logo.webp';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { lenis } from '$lib/lenis';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { onNavigate } from '$app/navigation';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ModeWatcher } from 'mode-watcher';

	let { children } = $props();
	onDestroy(() => {
		if (lenis) {
			lenis.destroy();
		}
	});
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<ModeWatcher />
<Navbar />
{@render children()}
<Footer />

<style>
	@keyframes slide-from-right {
		from {
			transform: translateX(20px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes slide-to-left {
		from {
			transform: translateX(0);
			opacity: 1;
		}
		to {
			transform: translateX(-20px);
			opacity: 0;
		}
	}

	:root::view-transition-old(root) {
		animation: 250ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation: 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both slide-from-right;
	}

	@media (prefers-reduced-motion: reduce) {
		:root::view-transition-old(root),
		:root::view-transition-new(root) {
			animation: none;
		}
	}
</style>
