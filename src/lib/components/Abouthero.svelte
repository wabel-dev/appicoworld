<script lang="ts">
	import { gsap } from 'gsap';

	let heading = $state<HTMLElement | null>(null);
	let supplySpan = $state<HTMLElement | null>(null);
	let paragraph = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!heading || !supplySpan || !paragraph) return;

		// Set initial state
		gsap.set(heading, { y: 50, opacity: 0 });
		gsap.set(supplySpan, { scale: 0.8, opacity: 0 });
		gsap.set(paragraph, { y: 30, opacity: 0 });

		// Create timeline for coordinated animations
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		// Animate heading TO visible state
		tl.to(heading, {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power4.out'
		});

		// Animate the "Supply" span
		tl.to(
			supplySpan,
			{
				scale: 1,
				opacity: 1,
				duration: 0.6,
				ease: 'back.out(1.7)'
			},
			'-=0.5'
		);

		// Animate paragraph
		tl.to(
			paragraph,
			{
				y: 0,
				opacity: 1,
				duration: 0.8
			},
			'-=0.4'
		);

		// Cleanup function
		return () => {
			tl.kill();
		};
	});
</script>

<header
	class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 text-center"
>
	<div class="relative z-10 w-full max-w-4xl">
		<h1
			bind:this={heading}
			class="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-6xl lg:text-7xl"
		>
			The Architects of
			<span bind:this={supplySpan} class="inline-block text-primary">Supply</span>
		</h1>

		<p bind:this={paragraph} class="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl">
			Bridging the gap between raw molecular science and industrial application.
		</p>
	</div>
</header>
