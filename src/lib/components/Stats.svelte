<script lang="ts">
	import NumberTicker from './magic-ui/NumberTicker.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { m } from '$lib/paraglide/messages';
	const foundingYear = 2016;
	const yearsOfExperience = new Date().getFullYear() - foundingYear;
</script>

<section class="relative overflow-hidden px-4 py-12" aria-labelledby="stats-title">
	<h2 id="stats-title" class="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
		{m.small_suave_crab_cook()}
	</h2>

	<div
		class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 md:justify-around md:gap-4"
	>
		<!-- Years in Market -->
		<div class="flex min-w-32 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary tabular-nums">
				<NumberTicker value={yearsOfExperience} />+
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				{m.moving_quaint_donkey_zap()}
			</p>
		</div>

		<Separator orientation="vertical" class="hidden h-12 md:block" />

		<!-- Supplier Network -->
		<div class="flex min-w-32 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary tabular-nums">
				<NumberTicker value={50} />+
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				I{m.awful_witty_stingray_agree()}
			</p>
		</div>

		<Separator orientation="vertical" class="hidden h-12 lg:block" />

		<!-- Client Base -->
		<div class="flex min-w-32 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary tabular-nums">
				<NumberTicker value={85} />%
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				{m.happy_maroon_kudu_pinch()}
			</p>
			<p class="mt-1 text-xs text-muted-foreground/70">{m.house_dull_dachshund_embrace()}</p>
		</div>

		<Separator orientation="vertical" class="hidden h-12 md:block" />

		<!-- Success Rate -->
		<div class="flex min-w-32 flex-col items-center text-center">
			<p class="text-4xl font-bold text-primary tabular-nums">
				<NumberTicker value={99} />%
			</p>
			<p class="mt-2 text-xs font-semibold tracking-[2px] text-muted-foreground uppercase">
				{m.ago_honest_kitten_cuddle()}
			</p>
			<p class="mt-1 text-xs text-muted-foreground/70">{m.ornate_weird_bear_affirm()}</p>
		</div>
	</div>
</section>
