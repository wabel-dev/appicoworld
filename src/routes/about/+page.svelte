<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Abouthero from '$lib/components/Abouthero.svelte';
	import Foundersection from '$lib/components/Foundersection.svelte';
	import Teamsection from '$lib/components/Teamsection.svelte';

	// Register GSAP plugin
	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// Hero Fade In Animation
		gsap.fromTo(
			'.anim-fade',
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.2 }
		);

		// Founder Section Slide Animations
		ScrollTrigger.create({
			trigger: '.founder-section',
			start: 'top 80%',
			onEnter: () => {
				gsap.fromTo(
					'.anim-slide-right',
					{ x: -50, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.8 }
				);
				gsap.fromTo(
					'.anim-slide-left',
					{ x: 50, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.8, delay: 0.2 }
				);
			}
		});

		// Upward Animation for Multiple Sections
		document.querySelectorAll('.anim-up').forEach((element) => {
			ScrollTrigger.create({
				trigger: element,
				start: 'top 85%',
				onEnter: () => {
					gsap.fromTo(
						element,
						{ y: 50, opacity: 0 },
						{ y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
					);
				}
			});
		});

		// Cleanup function for ScrollTrigger
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});

	// Process steps data
	const processSteps = [
		{
			number: '01',
			title: 'Identify',
			description: 'We scout global markets for manufacturers adhering to ISO & GMP standards.'
		},
		{
			number: '02',
			title: 'Verify',
			description:
				'Molecular testing and certificates of analysis (COA) are audited before purchase.'
		},
		{
			number: '03',
			title: 'Deploy',
			description: 'Hazmat-approved logistics ensure safe delivery to your industrial facility.'
		}
	];

	// Location data
	const locationData = [
		{ label: 'COORDINATES', value: '33.5138° N, 36.2765° E' },
		{ label: 'SECTOR', value: 'Industrial Zone B, Facility 404' },
		{ label: 'CITY / REGION', value: 'Damascus Free Trade Zone' },
		{ label: 'OPERATING HOURS', value: '0800 - 1800 (GMT+3)' },
		{ label: 'STATUS', value: 'ACTIVE', isStatus: true }
	];
</script>

<svelte:head>
	<title>About AETHER | The Molecular Supply Chain</title>
</svelte:head>

<!-- Hero Section -->
<Abouthero />

<!-- Founder Section -->
<Foundersection />

<!-- Team Section -->
<Teamsection />

<!-- Protocol Section -->
<section class="border-t border-border bg-background px-6 py-24 md:py-32">
	<div class="mx-auto max-w-7xl">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="anim-up mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">The Sourcing Protocol</h2>
			<p class="anim-up text-lg text-muted-foreground">
				Our methodology for ensuring quality assurance.
			</p>
		</div>

		<!-- Process Steps -->
		<div
			class="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-6"
		>
			{#each processSteps as step, index}
				<!-- Process Step Card -->
				<div
					class="anim-up relative w-full min-w-62.5 flex-1 border-t-2 border-red-600 bg-card p-8 text-center md:p-10"
				>
					<!-- Step Number (Background) -->
					<div class="absolute top-3 right-5 text-7xl font-black text-muted opacity-10">
						{step.number}
					</div>

					<!-- Step Content -->
					<h3 class="relative z-10 mb-4 text-2xl font-semibold">{step.title}</h3>
					<p class="relative z-10 text-sm text-muted-foreground md:text-base">
						{step.description}
					</p>
				</div>

				<!-- Connector Line (Hidden on Mobile) -->
				{#if index < processSteps.length - 1}
					<div class="hidden h-0.5 w-12 shrink-0 bg-border md:block"></div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<!-- Location Section -->
<section class="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
	<!-- Section Header -->
	<h2 class="anim-up mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Base of Operations</h2>
	<p class="anim-up mb-12 text-lg text-muted-foreground">Global coordination hub.</p>

	<!-- Data Terminal -->
	<div
		class="anim-up relative mx-auto max-w-3xl border border-border bg-black p-8 text-left shadow-2xl md:p-12"
	>
		<!-- Security Badge -->
		<div class="absolute top-3 right-5 font-mono text-xs text-green-500 opacity-70">
			SECURE CONNECTION ESTABLISHED
		</div>

		<!-- Data Rows -->
		{#each locationData as data, index}
			<div
				class="flex items-center justify-between py-4 {index < locationData.length - 1
					? 'border-b border-border'
					: ''}"
			>
				<span class="font-mono text-sm text-red-600 md:text-base">{data.label}</span>
				<span
					class="{data.isStatus
						? 'text-green-500'
						: 'text-muted-foreground'} font-mono text-sm md:text-base"
				>
					{data.value}
				</span>
			</div>
		{/each}
	</div>
</section>

<!-- Footer -->
<footer class="border-t border-border px-8 py-12 text-center">
	<p class="text-sm text-muted-foreground">Molecular science and industrial application.</p>
</footer>
