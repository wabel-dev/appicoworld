<script lang="ts">
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { inview } from 'svelte-inview';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';

	// Data structure for your inventory
	const compounds = [
		{
			formula: 'C₁₆H₂₈O',
			name: 'Ambroxan Pure',
			desc: 'Synthetic Ambergris | 99.9% Purity',
			target: 90
		},
		{
			formula: 'C₁₅H₂₆O',
			name: 'Vetiverol',
			desc: 'Haiti Extraction | Organic Isolate',
			target: 75
		},
		{ formula: 'C₁₀H₁₂O₂', name: 'Eugenol', desc: 'Spicy Clove Note | USP Grade', target: 60 },
		{ formula: 'C₁₁H₁₆O', name: 'Jasmone', desc: 'Floral Ketone | Cis-isomer', target: 85 }
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
	<div class="mb-12 space-y-2 text-center md:text-left">
		<h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
			Molecular Inventory
		</h2>
		<p class="text-muted-foreground">High-purity raw isolates available for immediate export.</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
	</div>
</section>

<style>
	/* Added a slightly more robust clip-path for various aspect ratios */
	.clip-card {
		clip-path: polygon(10% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 25%);
	}
</style>
