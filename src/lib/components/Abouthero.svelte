<script lang="ts">
	import { gsap } from 'gsap';
	import { getLocale } from '$lib/paraglide/runtime';

	let heading = $state<HTMLElement | null>(null);
	let supplySpan = $state<HTMLElement | null>(null);
	let paragraph = $state<HTMLElement | null>(null);

	// Translation Data
	const t = {
		ar: {
			start: 'رواد سلاسل',
			highlight: 'التوريد',
			sub: 'تأمين تدفق المواد الخام من المصادر العالمية إلى خطوط الإنتاج المحلية بكل موثوقية.'
		},
		en: {
			start: 'The Engineers of',
			highlight: 'Supply',
			sub: 'Ensuring the reliable flow of raw materials from global origins to local production lines.'
		}
	};

	let content = $derived(getLocale() === 'ar' ? t.ar : t.en);

	$effect(() => {
		if (!heading || !supplySpan || !paragraph) return;

		gsap.set(heading, { y: 50, opacity: 0 });
		gsap.set(supplySpan, { scale: 0.8, opacity: 0 });
		gsap.set(paragraph, { y: 30, opacity: 0 });

		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		tl.to(heading, {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power4.out'
		})
			.to(
				supplySpan,
				{
					scale: 1,
					opacity: 1,
					duration: 0.6,
					ease: 'back.out(1.7)'
				},
				'-=0.5'
			)
			.to(
				paragraph,
				{
					y: 0,
					opacity: 1,
					duration: 0.8
				},
				'-=0.4'
			);

		return () => tl.kill();
	});
</script>

<header
	class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 text-center"
	dir={getLocale() === 'ar' ? 'rtl' : 'ltr'}
>
	<div class="relative z-10 w-full max-w-5xl">
		<h1
			bind:this={heading}
			class="mb-6 text-4xl leading-tight font-black tracking-tighter uppercase md:text-6xl lg:text-8xl"
		>
			{content.start}
			<span bind:this={supplySpan} class="inline-block text-primary">
				{content.highlight}
			</span>
		</h1>

		<p
			bind:this={paragraph}
			class="mx-auto max-w-2xl text-lg font-medium text-muted-foreground md:text-xl"
		>
			{content.sub}
		</p>
	</div>

	<div class="pointer-events-none absolute inset-0 -z-10 opacity-5 select-none">
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black tracking-tighter uppercase"
		>
			Appico
		</div>
	</div>
</header>
