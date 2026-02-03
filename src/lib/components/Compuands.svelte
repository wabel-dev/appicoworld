<script lang="ts">
	import { Progress } from '$lib/components/ui/progress/index.js';
	import { inview } from 'svelte-inview';
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	let isInView = $state(false);

	const num = new Tween(0, {
		duration: 3000,
		easing: cubicOut
	});
	const num2 = new Tween(0, {
		duration: 3000,
		easing: cubicOut
	});

	const num3 = new Tween(0, {
		duration: 3000,
		easing: cubicOut
	});
	const num4 = new Tween(0, {
		duration: 3000,
		easing: cubicOut
	});
	$effect.pre(() => {
		if (isInView) {
			num.set(90);
			num2.set(75);
			num3.set(60);
			num4.set(85);
		} else {
			num.set(0);
			num2.set(0);
			num3.set(0);
			num4.set(0);
		}
	});
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<section
	class="relative z-10 bg-background px-12 py-24"
	id="compounds"
	use:inview={{
		unobserveOnEnter: false,
		rootMargin: '-50px'
	}}
	oninview_change={handleChange}
>
	<div class="mb-12 space-y-2">
		<h2 class="text-3xl font-bold tracking-tight text-foreground">Molecular Inventory</h2>
		<p class="text-muted-foreground">High-purity raw isolates available for immediate export.</p>
	</div>

	<div class="flex flex-row items-center justify-between gap-5">
		<div
			class="group clip-card relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
		>
			<div class="mb-2 font-mono text-sm font-medium text-primary opacity-80">C₁₆H₂₈O</div>
			<h3 class="mb-1 text-lg font-semibold text-card-foreground">Ambroxan Pure</h3>
			<p class="mb-4 text-sm text-muted-foreground">Synthetic Ambergris | 99.9% Purity</p>

			<Progress value={num.current} class="h-0.5" />
		</div>

		<div
			class="group clip-card relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
		>
			<div class="mb-2 font-mono text-sm font-medium text-primary opacity-80">C₁₅H₂₆O</div>
			<h3 class="mb-1 text-lg font-semibold text-card-foreground">Vetiverol</h3>
			<p class="mb-4 text-sm text-muted-foreground">Haiti Extraction | Organic Isolate</p>

			<Progress value={num2.current} class="h-0.5" />
		</div>

		<div
			class="group clip-card relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
		>
			<div class="mb-2 font-mono text-sm font-medium text-primary opacity-80">C₁₀H₁₂O₂</div>
			<h3 class="mb-1 text-lg font-semibold text-card-foreground">Eugenol</h3>
			<p class="mb-4 text-sm text-muted-foreground">Spicy Clove Note | USP Grade</p>
			<Progress value={num3.current} class="h-0.5" />
		</div>

		<div
			class="group clip-card relative overflow-hidden border border-border bg-card p-6 transition-all duration-300 hover:border-primary hover:bg-primary/5"
		>
			<div class="mb-2 font-mono text-sm font-medium text-primary opacity-80">C₁₁H₁₆O</div>
			<h3 class="mb-1 text-lg font-semibold text-card-foreground">Jasmone</h3>
			<p class="mb-4 text-sm text-muted-foreground">Floral Ketone | Cis-isomer</p>
			<Progress value={num4.current} class="h-0.5" />
		</div>
	</div>
</section>

<style>
	.clip-card {
		clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
	}
</style>
