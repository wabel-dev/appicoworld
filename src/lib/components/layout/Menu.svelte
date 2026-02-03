<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';

	import { Menu } from '@lucide/svelte';
	import logo from '$lib/assets/appico_logo.webp';
	import { m } from '$lib/paraglide/messages';
	import { localizeHref } from '$lib/paraglide/runtime';

	// Svelte 5 Runes: Define props
	let { links = [] }: { links: { href: string; label: string }[] } = $props();

	// Svelte 5 Runes: Reactive state for closing the menu after click
	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger
		class={buttonVariants({ variant: 'ghost', size: 'icon' }) + ' md:hidden'}
		aria-label="Open Menu"
	>
		<Menu class="size-6" />
	</Sheet.Trigger>

	<Sheet.Content side="right" class="w-75 sm:w-100">
		<Sheet.Header>
			<Sheet.Title
				class="font-orbitron flex items-center gap-2 text-left tracking-widest uppercase"
			>
				<span class="whitespace-nowrap">Appico World</span>
				<img
					class="size-8 object-contain md:size-8"
					style="mix-blend-mode: multiply;"
					src={logo}
					alt="Appico World Logo"
				/>
			</Sheet.Title>
			<Sheet.Description class="sr-only">Mobile navigation menu</Sheet.Description>
		</Sheet.Header>

		<nav class="mt-4 flex flex-col gap-6 px-8">
			{#each links as link, i}
				<Button
					href={link.href}
					variant="outline"
					size="sm"
					class="w-full hover:bg-primary focus-visible:bg-primary focus-visible:text-primary-foreground active:bg-primary active:text-primary-foreground"
					onclick={() => (open = false)}
				>
					{link.label}
				</Button>
			{/each}

			<hr class="border-border" />

			<Button class="w-full" onclick={() => (open = false)} href={localizeHref('/#contact')}
				>{m.topical_red_panther_win()}</Button
			>
		</nav>
	</Sheet.Content>
</Sheet.Root>
