<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		'flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm',
		className,
		'cyber-card'
	)}
	{...restProps}
>
	{@render children?.()}
</div>

<style>
	.cyber-card {
		background-color: var(--card);
		padding: 2.5rem; /* p-10 */
		border: 1px solid hsl(var(--border));
		position: relative;
		transition:
			transform 300ms,
			border-color 300ms;
		clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
	}

</style>
