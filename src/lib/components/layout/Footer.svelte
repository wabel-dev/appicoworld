<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import logo from '$lib/assets/appico_logo.webp';

	import { Facebook, Instagram, MessageCircle, Linkedin } from '@lucide/svelte';
	const navLinks = [
		{ href: '/#hero', label: m.minor_legal_lemming_zip() },
		{ href: '/#services', label: m.gray_ideal_lemming_fry() },
		{ href: '/#partners', label: m.wide_honest_felix_race() },
		{ href: '/#contact', label: m.busy_long_polecat_win() },
		{ href: '/about', label: m.left_jolly_llama_praise() }
	];

	// New Social Links Array
	const socialLinks = [
		{
			href: 'https://www.facebook.com/share/1E3r8Pxjb4/?mibextid=wwXIfr',
			label: 'Facebook',
			icon: Facebook
		},
		{ href: '#', label: 'Instagram', icon: Instagram },
		{ href: 'https://wa.me/message/FC5JWJZYR2R6D1', label: 'WhatsApp', icon: MessageCircle }
	];

	const currentYear = new Date().getFullYear();
</script>

<footer class="w-full border-t border-border bg-background px-6 py-12 md:py-16">
	<div class="container mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-4">
			<div class="space-y-4">
				<h2 class="text-xl font-bold tracking-tight text-foreground">
					{m.bad_civil_alpaca_cuddle()}
				</h2>
			</div>

			<div class="space-y-4">
				<h3 class="text-xs font-bold tracking-widest text-primary uppercase">
					{m.agent_elegant_mongoose_ask()}
				</h3>
				<nav class="flex flex-col gap-3">
					{#each navLinks as link}
						<a
							href={link.href}
							class="text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>

			<div class="space-y-4">
				<h3 class="text-xs font-bold tracking-widest text-primary uppercase">Follow Us</h3>
				<nav class="flex flex-col gap-3">
					{#each socialLinks as social}
						{@const Icon = social.icon}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
						>
							<span>{social.label}</span>
							<span><Icon size={16} /></span>
						</a>
					{/each}
				</nav>
			</div>

			<div
				class="flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-5 transition-colors hover:bg-secondary/50"
			>
				<div class="flex flex-col gap-1">
					<span class="font-semibold text-foreground">Appico World</span>
				</div>
				<img
					class="size-12 object-contain transition-all hover:grayscale-0"
					src={logo}
					alt="Appico World Logo"
				/>
			</div>
		</div>

		<div
			class="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row"
		>
			<p class="text-xs text-muted-foreground">
				{m.bad_civil_alpaca_cuddle()}
				{currentYear}{@html '&copy;'}
			</p>
		</div>
	</div>
</footer>
