<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { Tween } from 'svelte/motion';
	import { inview } from 'svelte-inview';
	import { cn } from '$lib/utils';
	import type { ObserverEventDetails } from 'svelte-inview';

	let { value = 100, initial = 0, duration = 3000, class: className = '', ...rest } = $props();

	let isInView = $state(false);

	// svelte-ignore state_referenced_locally
	const num = new Tween(initial, {
		duration,
		easing: cubicOut
	});

	$effect.pre(() => {
		num.target = isInView ? value : initial;
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	use:inview={{
		unobserveOnEnter: false,
		rootMargin: '-50px'
	}}
	oninview_enter={handleChange}
	class={cn('inline-block tracking-normal text-primary', className)}
	{...rest}
>
	{num.current.toFixed(1)}
</div>
