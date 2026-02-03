<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import * as Card from '$lib/components/ui/card/index.js';

	import * as Carousel from '$lib/components/ui/carousel/index.js';

	import Autoplay from 'embla-carousel-autoplay';

	import ClassNames from 'embla-carousel-class-names';

	import Mane from '$lib/assets/mane.jpg';

	import tcf from '$lib/assets/tcf.jpg';
	import Opencard from '$lib/components/Opencard.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Compuands from '$lib/components/Compuands.svelte';

	let herotitle: HTMLElement | null = $state(null);

	let herosubtitle: HTMLElement | null = $state(null);

	$effect(() => {
		if (!herotitle || !herosubtitle) return;

		

		// Create animations and store references for cleanup

		const heroTitleAnimation = gsap.from(herotitle, {
			y: 50,

			opacity: 0,

			duration: 1,

			ease: 'power3.out',

			skewY: 5,

			scrollTrigger: {
				trigger: herotitle,

				start: 'top 85%',

				end: 'bottom 15%',

				toggleActions: 'play reverse play reverse'
			}
		});

		const heroSubtitleAnimation = gsap.from(herosubtitle, {
			y: 30,

			opacity: 0,

			duration: 0.8,

			delay: 0.5,

			scrollTrigger: {
				trigger: herosubtitle,

				start: 'top 85%',

				end: 'bottom 15%',

				toggleActions: 'play reverse play reverse'
			}
		});

		// Card animations - store all animations

		const cardAnimations = gsap.utils.toArray('.card').map((card) => {
			return gsap.from(card as HTMLElement, {
				y: 50,

				opacity: 0,

				duration: 0.8,

				scrollTrigger: {
					trigger: card as HTMLElement,

					start: 'top 85%',

					end: 'bottom 15%',

					toggleActions: 'play reverse play reverse'
				}
			});
		});

		// Cleanup function

		return () => {
			// Kill individual animations

			heroTitleAnimation.kill();

			heroSubtitleAnimation.kill();

			cardAnimations.forEach((anim) => anim.kill());

			// Kill all associated ScrollTriggers

			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>



<header
	class="relative flex h-screen items-center justify-center overflow-hidden px-5 text-center"
	id="hero"
>
	<div class="z-10 max-w-3xl">
		<h1
			class="hero-title font-orbitron mb-5 text-5xl leading-tight uppercase md:text-7xl"
			bind:this={herotitle}
		>
			Innovating for<br /><span class="text-primary">Every Industry</span>
		</h1>

		<p
			class="hero-subtitle mb-10 text-xl tracking-wide text-muted-foreground md:text-2xl"
			bind:this={herosubtitle}
		>
			Global import & export of premium fragrance compounds and raw synthetic materials.
		</p>

		<Button>Explore Catalog</Button>
	</div>

	<div id="particle-container" class="pointer-events-none absolute inset-0"></div>
</header>

<section class="relative bg-background px-12 py-24" id="services">
	<div class="mb-16 border-l-4 border-primary pl-5">
		<h2 class="font-orbitron text-4xl uppercase">Our Capabilities</h2>

		<p class="mt-2 text-muted-foreground">Precision logistics for delicate compounds.</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		<Card.Root class="card">
			<Card.Header>
				<Card.Title>
					<div class=" mb-5 text-3xl text-primary">01</div>

					<h3 class=" mb-4 text-2xl uppercase">Global Sourcing</h3></Card.Title
				>
			</Card.Header>

			<Card.Content>
				<p class="leading-relaxed text-muted-foreground">
					We extract and synthesize rare olfactory materials from 40+ countries.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="card">
			<Card.Header>
				<Card.Title>
					<div class="mb-5 text-3xl text-primary">02</div>

					<h3 class="mb-4 text-2xl uppercase">Hazmat Logistics</h3></Card.Title
				>
			</Card.Header>

			<Card.Content>
				<p class="leading-relaxed text-muted-foreground">
					Specialized transport for volatile esters and essential oils. Tracked via blockchain.
				</p>
			</Card.Content>
		</Card.Root>

		<Card.Root class="card">
			<Card.Header>
				<div class="mb-5 text-3xl text-primary">03</div>

				<h3 class="mb-4 text-2xl uppercase">Synthetic Export</h3></Card.Header
			>

			<Card.Content>
				<p class="leading-relaxed text-muted-foreground">
					Next-gen lab-grown musk and ambergris alternatives for major fashion houses.
				</p></Card.Content
			>
		</Card.Root>
	</div>
</section>
<Stats />
<Compuands />
<section class="flex justify-center bg-accent/5 px-12 py-24" id="contact">
	<div class="grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
		<div>
			<h2 class="font-orbitron mb-5 text-5xl uppercase">Initiate Protocol</h2>

			<p class="mb-8 text-muted-foreground">
				Ready to upgrade your supply chain? Send us a transmission.
			</p>

			<div class="space-y-2">
				<p><strong>HQ:</strong> Neo-Paris, Sector 7</p>

				<p><strong>Email:</strong> link@aether-fragrance.com</p>
			</div>
		</div>

		<form id="contactForm" class="flex flex-col gap-5">
			<input
				type="text"
				placeholder="Entity Name"
				class="w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary"
				required
			/>

			<input
				type="email"
				placeholder="Digital Address"
				class="w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary"
				required
			/>

			<textarea
				placeholder="Transmission Content"
				class="h-40 w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary"
			></textarea>

			<Button type="submit">Send Data</Button>
		</form>
	</div>
</section>

<footer class="border-t border-border py-10 text-center text-sm text-muted-foreground">
	&copy; 2026 Appico World Fragrance Logistics. All Systems Operational.

	<br />
</footer>

<!-- <div class="w-full px-12">
	<Carousel.Root
		class="w-full"
		plugins={[
			Autoplay({
				delay: 2000
			}),

			ClassNames()
		]}
		opts={{ align: 'center', loop: true }}
	>
		<Carousel.Content class="embla__slide -ms-1">
			<Carousel.Item class="ps-1 md:basis-1/2 lg:basis-1/3">
				<Opencard src={Mane} alt="mane logo" desc="Mane" />
			</Carousel.Item>
			<Carousel.Item class="ps-1 md:basis-1/2 lg:basis-1/3">
				<Opencard src={tcf} alt="tcf logo" desc="tcf" />
			</Carousel.Item>
		</Carousel.Content>

		<Carousel.Previous />

		<Carousel.Next />
	</Carousel.Root>
</div> -->

<style>
	:global(.embla__slide:not(.is-snapped)) {
		opacity: 0.3;

		background-color: red;

		filter: grayscale(1);
	}

	/* --- Glass Navbar --- */

	

	:global(.cyber-card:hover) {
		transform: translateY(-0.5rem); /* -translate-y-2 */

		border-color: hsl(var(--primary));
	}
</style>
