<script lang="ts">
	import './layout.css';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import favicon from '$lib/assets/appico_logo.webp';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import { onDestroy, onMount } from 'svelte';
	import { lenis } from '$lib/lenis';

	let { children } = $props();
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
	});
	onDestroy(() => {
		if (lenis) {
			lenis.destroy();
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Appico World (Local)</title>
</svelte:head>
<Navbar />
{@render children()}
