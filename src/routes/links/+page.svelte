<script lang="ts">
	import logo from '$lib/assets/appico_logo.webp';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageProps } from './$types';
	import { Facebook, Instagram, MessageCircle } from '@lucide/svelte';

	const socialLinks = [
		{
			name: 'Facebook',
			icon: Facebook,
			url: 'https://www.facebook.com/share/1E3r8Pxjb4/?mibextid=wwXIfr',
			color: 'text-muted-foreground hover:text-blue-600 hover:border-blue-600',
			bgColor: 'hover:bg-blue-50'
		},
		{
			name: 'Instagram',
			icon: Instagram,
			url: '#',
			color: 'text-muted-foreground hover:text-pink-600 hover:border-pink-600',
			bgColor: 'hover:bg-pink-50'
		},
		{
			name: 'WhatsApp',
			icon: MessageCircle,
			url: 'https://wa.me/message/FC5JWJZYR2R6D1',
			color: 'text-muted-foreground hover:text-green-600 hover:border-green-600',
			bgColor: 'hover:bg-green-50'
		}
	];

	let { data }: PageProps = $props();
</script>

<article class="flex min-h-screen w-full items-center justify-center p-4">
	<div
		class="flex w-full max-w-sm flex-col items-center gap-10 rounded-3xl border bg-background p-8 shadow-sm transition-shadow hover:shadow-md"
	>
		<div class="group flex w-full flex-col items-center gap-4">
			<div
				class="relative flex h-24 w-24 items-center justify-center rounded-2xl border bg-secondary/20 p-4 transition-all duration-500 group-hover:scale-105 group-hover:bg-secondary/40"
			>
				<img class="h-full w-full object-contain" src={logo} alt="Appico World Logo" />
			</div>
			<div class="text-center">
				<h1 class="text-xl font-bold tracking-tight text-foreground">Appico World</h1>
				<p class="text-sm text-muted-foreground">Connect with our community</p>
			</div>
		</div>

		<div class="flex flex-row items-center justify-center gap-4">
			{#each socialLinks as element}
				{@const Icon = element.icon}
				<Button
					variant="outline"
					href={element.url}
					target="_blank"
					rel="noopener noreferrer"
					size="icon"
					class="h-12 w-12 rounded-full border-2 transition-all duration-300 {element.color} {element.bgColor} hover:scale-110 active:scale-95"
				>
					<Icon size={20} strokeWidth={2.5} />
					<span class="sr-only">{element.name}</span>
				</Button>
			{/each}
		</div>
	</div>
</article>
