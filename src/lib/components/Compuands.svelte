<script lang="ts">
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { inview } from 'svelte-inview';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	// Data structure for your inventory
	const compounds = [
		{
			formula: '01 // FOOD',
			name: 'Food Ingredients',
			desc: 'High-grade additives, preservatives, and flavors for industrial food processing.',
			target: 75, // Supply Chain Reliability
			suppliers: 40
		},
		{
			formula: '02 // SCENT',
			name: 'Aromatics & Esters',
			desc: 'Premium synthetic compounds and oils for the fine fragrance industry.',
			target: 90,
			suppliers: 25
		},
		{
			formula: '03 // AGENCY',
			name: 'Global Agencies',
			desc: 'Exclusive commercial representation for top-tier international suppliers.',
			target: 80,
			suppliers: 10
		}
	];
	const compoundsArabic = [
		{
			formula: '01 // FOOD',
			name: 'مكونات الأغذية',
			desc: 'إضافات ومواد حافظة ونكهات عالية الجودة مخصصة للتصنيع الغذائي الصناعي.',
			target: 75, // موثوقية سلسلة التوريد
			suppliers: 40
		},
		{
			formula: '02 // SCENT',
			name: 'العطريات والإسترات',
			desc: 'مركبات اصطناعية وزيوت فاخرة مخصصة لصناعة العطور الراقية.',
			target: 90,
			suppliers: 25
		},
		{
			formula: '03 // AGENCY',
			name: 'الوكالات العالمية',
			desc: 'تمثيل تجاري حصري لنخبة من الموردين الدوليين الرائدين.',
			target: 80,
			suppliers: 10
		}
	];

	let isInView = $state(false);

	// Create an array of Tweens for each compound
	const progressTweens = compounds.map(
		() =>
			new Tween(0, {
				duration: 3000,
				easing: cubicOut
			})
	);

	// Trigger animations based on view state
	$effect(() => {
		progressTweens.forEach((tween, i) => {
			tween.set(isInView ? compounds[i].target : 0);
		});
	});

	const handleChange = ({ detail }: any) => {
		isInView = detail.inView;
	};
</script>

<section
	class="relative z-10 bg-background px-6 py-16 md:px-12 md:py-24"
	id="compounds"
	use:inview={{
		unobserveOnEnter: false,
		rootMargin: '-50px'
	}}
	oninview_change={handleChange}
>
	<div class="mb-12 space-y-2 text-center ltr:md:text-left rtl:md:text-right">
		<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			{m.crisp_stale_dachshund_succeed()}
		</h2>
		<p class="text-muted-foreground">
			{m.known_honest_florian_yell()}
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#if getLocale() === 'ar'}
			{#each compoundsArabic as item, i}
				<div
					class="group clip-card relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
				>
					<div class="mb-2 font-mono text-sm font-medium text-primary opacity-80">
						{item.formula}
					</div>
					<h3 class="mb-1 text-lg font-semibold text-card-foreground">
						{item.name}
					</h3>
					<p class="mb-4 text-sm text-muted-foreground">
						{item.desc}
					</p>

					<Progress value={progressTweens[i].current} class="h-0.5 rtl:rotate-180" />
				</div>
			{/each}
		{:else}
			{#each compounds as item, i}
				<div
					class="group clip-card relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
				>
					<div class="mb-2 font-mono text-sm font-medium text-primary opacity-80">
						{item.formula}
					</div>
					<h3 class="mb-1 text-lg font-semibold text-card-foreground">
						{item.name}
					</h3>
					<p class="mb-4 text-sm text-muted-foreground">
						{item.desc}
					</p>

					<Progress value={progressTweens[i].current} class="h-0.5" />
				</div>
			{/each}
		{/if}
	</div>
</section>

<style>
	/* Added a slightly more robust clip-path for various aspect ratios */
	.clip-card {
		clip-path: polygon(10% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 25%);
	}
</style>
