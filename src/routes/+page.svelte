<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';

	import { gsap } from 'gsap';

	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	import * as Card from '$lib/components/ui/card/index.js';

	import Stats from '$lib/components/Stats.svelte';
	import Compuands from '$lib/components/Compuands.svelte';
	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	let herotitle: HTMLElement | null = $state(null);

	let herosubtitle: HTMLElement | null = $state(null);

	const services = [
		{
			number: '01',
			title: 'Food Raw Materials',
			description:
				'We supply high-grade additives, flavors, preservatives, and essential ingredients for large-scale food processing and industrial manufacturing.'
		},
		{
			number: '02',
			title: 'Aromatics & Esters',
			description:
				'Importing premium oils, synthetic compounds, and active cosmetic ingredients. We represent top-tier global perfumery houses.'
		},
		{
			number: '03',
			title: 'Global Representation',
			description:
				'We act as the exclusive commercial agent for international suppliers, handling all import/export logistics and trade compliance.'
		}
	];
	const services_ar = [
		{
			number: '01',
			title: 'Food Industry Raw Materials',
			description:
				"We represent global suppliers of food additives, preservatives, flavor enhancers, stabilizers, and specialty ingredients for Syria's food manufacturing sector."
		},
		{
			number: '02',
			title: 'Synthetic Fragrance Compounds',
			description:
				'Exclusive representation of international manufacturers of aroma chemicals, essential oil alternatives, and fragrance ingredients for perfumery and cosmetics.'
		},
		{
			number: '03',
			title: 'Import & Customs Facilitation',
			description:
				'End-to-end import management including documentation, customs clearance, and Syrian Standardization & Metrology Organization (SASMO) compliance.'
		}
	];

	$effect(() => {
		if (!herotitle || !herosubtitle) return;

		gsap.registerPlugin(ScrollTrigger);

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
				ease: 'power2.out',
				scrollTrigger: {
					trigger: card as HTMLElement,

					start: IsMobile ? 'top 92%' : 'top 85%',
					toggleActions: 'play none none reverse'
					// Optional: If you want cards to stagger only when they are side-by-side
					// invalidateOnRefresh: true,
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
			Syria's premier representative for international suppliers of food industry raw materials and
			synthetic fragrances compounds.
		</p>

		<Button>Explore Catalog</Button>
	</div>

	<div id="particle-container" class="pointer-events-none absolute inset-0"></div>
</header>

<section class="relative bg-background px-6 py-16 md:px-12 md:py-24" id="services">
	<div class="mb-12 border-l-4 border-primary pl-5 md:mb-16">
		<h2 class="font-orbitron text-3xl uppercase md:text-4xl">Our Representation Services</h2>
		<p class="mt-2 text-sm text-muted-foreground md:text-base">
			Connecting Syrian industries with world-class suppliers since 2016.
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
		{#if getLocale() === 'ar'}
			{#each services_ar as service, index}
				<Card.Root
					class="card flex h-full flex-col {index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<Card.Header>
						<Card.Title>
							<div class="mb-4 text-3xl text-primary">{service.number}</div>
							<h3 class="text-xl font-bold uppercase md:text-2xl">{service.title}</h3>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		{:else}
			{#each services as service, index}
				<Card.Root
					class="card flex h-full flex-col {index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<Card.Header>
						<Card.Title>
							<div class="mb-4 text-3xl text-primary">{service.number}</div>
							<h3 class="text-xl font-bold uppercase md:text-2xl">{service.title}</h3>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		{/if}
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

<style>
	:global(.embla__slide:not(.is-snapped)) {
		opacity: 0.3;

		background-color: red;

		filter: grayscale(1);
	}

	/* --- Glass Navbar --- */

	:global(.cyber-card:hover) {
		transform: translateY(-0.5rem) !important; /* -translate-y-2 */

		border-color: hsl(var(--primary)) !important;
	}
</style>
