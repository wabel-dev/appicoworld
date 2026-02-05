<script lang="ts">
	import Logo from '$lib/components/layout/Logo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { PageProps } from './$types';
	import { Facebook, Instagram, MessageCircle } from '@lucide/svelte';
	const socialLinks = [
		{
			name: 'Facebook',
			icon: Facebook,
			url: '#', // Replace with your Facebook URL https://facebook.com/yourusername
			color: 'hover:text-blue-600 hover:border-blue-600',
			bgColor: 'hover:bg-blue-50'
		},
		{
			name: 'Instagram',
			icon: Instagram,
			url: '#', // Replace with your Instagram URLhttps://instagram.com/yourusername
			color: 'hover:text-pink-600 hover:border-pink-600',
			bgColor: 'hover:bg-pink-50'
		},
		{
			name: 'WhatsApp',
			icon: MessageCircle, // Lucide doesn't have WhatsApp specifically, using MessageCircle as close alternative
			url: '#', // Replace with your WhatsApp URL https://wa.me/yourphonenumber
			color: 'hover:text-green-600 hover:border-green-600',
			bgColor: 'hover:bg-green-50'
		}
	];
	let { data }: PageProps = $props();
</script>

<article class="relative flex h-screen w-full items-center justify-center">
	<div class="flex w-full max-w-md flex-col items-center gap-8 rounded-2xl border p-12">
		<div class="flex w-full items-center justify-center pb-6">
			<Logo />
		</div>

		<div class="flex flex-row items-center justify-center gap-6">
			{#each socialLinks as element}
				{@const Icon = element.icon}
				<Button
					variant="ghost"
					href={element.url}
					size="icon"
					class="rounded-full transition-all duration-300 {element.color} hover:bg-slate-100"
				>
					<Icon size={24} />
					<span class="sr-only">{element.name}</span>
				</Button>
			{/each}
		</div>
	</div>
</article>
