<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/appico_logo.webp';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { onDestroy } from 'svelte';
	import { lenis } from '$lib/lenis';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();

	onDestroy(() => {
		if (lenis) {
			lenis.destroy();
		}
	});
	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Appico World (es old)</title>
</svelte:head>
<Navbar />
{@render children()}
<Footer />
