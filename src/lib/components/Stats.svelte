<script>
	import NumberTicker from './magic-ui/NumberTicker.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<section class="relative px-4 py-12" aria-labelledby="stats-title">
	<h2 id="stats-title" class="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
		Our Global Impact in Numbers
	</h2>

	<div
		class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 md:justify-around md:gap-4"
	>
		<div class="flex min-w-35 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary">
				<NumberTicker value={14.2} />K
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				Tons Shipped
			</p>
		</div>

		<Separator orientation="vertical" class="hidden h-12 md:block" />

		<div class="flex min-w-35 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary">
				<NumberTicker value={840} />
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				Active Routes
			</p>
		</div>

		<Separator orientation="vertical" class="hidden h-12 lg:block" />

		<div class="flex min-w-35 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary">
				<NumberTicker value={99} />%
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				Purity Index
			</p>
		</div>

		<Separator orientation="vertical" class="hidden h-12 md:block" />

		<div class="flex min-w-35 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary">24h</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				Global Delivery
			</p>
		</div>
	</div>
</section>
