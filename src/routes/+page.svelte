<script module lang="ts">
	import Loader from '@lucide/svelte/icons/loader';
	import { schema } from '$lib/schema';
</script>

<script lang="ts">
	import { untrack } from 'svelte';
	import { superForm } from 'sveltekit-superforms';
	import { zod4Client } from 'sveltekit-superforms/adapters';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// UI Components
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Field from '$lib/components/ui/field';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea';

	// Logic & Types

	import { IsMobile } from '$lib/hooks/is-mobile.svelte';
	import { getLocale } from '$lib/paraglide/runtime';
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition';

	import { m } from '$lib/paraglide/messages';

	// Props & State
	let { data }: { data: PageData } = $props();
	let herotitle = $state<HTMLElement | null>(null);
	let herosubtitle = $state<HTMLElement | null>(null);

	const input_class =
		'w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary';

	// Form Initialization

	const {
		form: formData,
		errors,
		enhance,
		message,
		delayed
	} = superForm(
		untrack(() => data.form),
		{ validators: zod4Client(schema) }
	);

	// Data - Derived based on locale
	const servicesData = {
		en: [
			{
				number: '01',
				title: 'Food Raw Materials',
				description:
					'We supply high-grade additives, flavors, preservatives, and essential ingredients.'
			},
			{
				number: '02',
				title: 'Aromatics & Esters',
				description: 'Importing premium oils, synthetic compounds, and active cosmetic ingredients.'
			},
			{
				number: '03',
				title: 'Global Representation',
				description: 'We act as the exclusive commercial agent for international suppliers.'
			}
		],
		ar: [
			{
				number: '01',
				title: 'المواد الخام الغذائية',
				description:
					'نورّد أجود أنواع المضافات الغذائية، النكهات، المواد الحافظة، والمكونات الأساسية.'
			},
			{
				number: '02',
				title: 'العطور والإسترات',
				description: 'استيراد الزيوت الفاخرة، المركبات الصناعية، والمكونات التجميلية الفعالة.'
			},
			{
				number: '03',
				title: 'التمثيل التجاري العالمي',
				description: 'نعمل كوكيل تجاري حصري للموردين الدوليين في السوق المحلية.'
			}
		]
	};

	// Animations
	$effect(() => {
		if (!herotitle || !herosubtitle) return;

		gsap.registerPlugin(ScrollTrigger);

		// Use gsap.context for easy cleanup
		const ctx = gsap.context(() => {
			// Hero Animations
			gsap.from(herotitle, {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: 'power3.out',
				skewY: 5,
				scrollTrigger: {
					trigger: herotitle,
					start: 'top 85%',
					toggleActions: 'play reverse play reverse'
				}
			});

			gsap.from(herosubtitle, {
				y: 30,
				opacity: 0,
				duration: 0.8,
				delay: 0.2, // Reduced delay for better feel
				scrollTrigger: {
					trigger: herosubtitle,
					start: 'top 85%',
					toggleActions: 'play reverse play reverse'
				}
			});

			// Batch Card Animations
			gsap.utils.toArray('.card').forEach((card) => {
				gsap.from(card as HTMLElement, {
					y: 50,
					opacity: 0,
					duration: 0.8,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: card as HTMLElement,
						start: IsMobile ? 'top 92%' : 'top 85%',
						toggleActions: 'play none none reverse'
					}
				});
			});
		});

		return () => ctx.revert(); // Cleans up all animations and ScrollTriggers in one go
	});
</script>

<svelte:head>
	{#if getLocale() === 'ar'}
		<title
			>أبيكو العالمية | التجارة العالمية والمواد الخام الصناعية | الأغذية والعطور ومستحضرات التجميل</title
		>

		<meta
			name="description"
			content="أبيكو العالمية هي شركة تجارة عالمية رائدة ووكيل تجاري متخصص في توريد المواد الخام لصناعات الأغذية والعطور ومستحضرات التجميل. خبراء في لوجستيات المواد ."
		/>

		<meta
			name="keywords"
			content="المواد الخام, الاستيراد والتصدير, الوكالة التجارية, إضافات غذائية, مركبات العطور, مكونات مستحضرات التجميل, المواد الكيميائية الصناعية, لوجستيات المواد , التجارة بين الشركات, التوريد العالمي, أبيكو العالمية, المؤسس والمالك وابل عطايا"
		/>

		<meta name="author" content="شركة أبيكو العالمية للتجارة" />
		<meta name="copyright" content="شركة أبيكو العالمية للتجارة" />
		<meta name="robots" content="index, follow" />

		<!-- Open Graph for WhatsApp/Facebook (ARABIC) -->
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://appicoworld.vercel.app/ar" />
		<meta property="og:title" content="أبيكو العالمية | مستقبل التوريد الصناعي" />
		<meta
			property="og:description"
			content="تمثيل تجاري حصري للمصنعين العالميين. نوفر مواد خام عالية الجودة للأغذية والعطور ومستحضرات التجميل."
		/>
		<meta property="og:image" content="https://appicoworld.vercel.app/ar/appico_logo.webp" />
		<meta property="og:site_name" content="أبيكو العالمية" />
		<meta property="og:locale" content="ar_SA" />

		<!-- Twitter Card (ARABIC) -->
		<meta name="twitter:card" content="summary_large_image" />
		<meta
			name="twitter:title"
			content="أبيكو العالمية | المواد الخام الصناعية والخدمات اللوجستية"
		/>
		<meta
			name="twitter:description"
			content="سد الفجوة بين مختبرات التصنيع العالمية والإنتاج المحلي. توريد الأغذية والعطور ومستحضرات التجميل."
		/>
		<meta name="twitter:image" content="https://appicoworld.vercel.app/ar/appico_logo.webp" />
	{:else}
		<title>vava| Global Trade & Industrial Raw Materials | Food, Fragrance & Cosmetics</title>

		<meta
			name="description"
			content="Appico World  is a premier global trading company & commercial agent specializing in raw material sourcing for the Food, Fragrance, and Cosmetic industries. Hazmat logistics experts."
		/>

		<meta
			name="keywords"
			content="Raw Materials, Import Export, Commercial Agency, Food Additives, Fragrance Compounds, Cosmetic Ingredients, Industrial Chemicals, Hazmat Logistics, B2B Trade, Global Sourcing, Appico World, Founder and Owner by Wabel Ataya "
		/>

		<meta name="author" content="Appico World Trading Co." />
		<meta name="copyright" content="Appico World  Trading Co." />
		<meta name="robots" content="index, follow" /> <meta property="og:type" content="website" />
		<meta property="og:url" content="https://appicoworld.vercel.app/" />
		<meta property="og:title" content="Appico World  | The Future of Industrial Sourcing" />
		<meta
			property="og:description"
			content="Exclusive commercial representation for global manufacturers. We supply high-grade raw materials for Food, Fragrance, and Cosmetics."
		/>
		<meta property="og:image" content="$lib/assets/appico_logo.webp" />
		<meta property="og:site_name" content="Appico World" />

		<meta name="twitter:card" content="$lib/assets/appico_logo.webp" />
		<meta name="twitter:title" content="Appico World | Industrial Raw Materials & Logistics" />
		<meta
			name="twitter:description"
			content="Bridging the gap between global synthesis labs and local manufacturing. Food, Scent, & Cosmetic sourcing."
		/>
		<meta name="twitter:image" content="https://appicoworld.vercel.app/appico_logo.webp" />
	{/if}
</svelte:head>

{#if $delayed}
	<div
		transition:fade={{ duration: 150 }}
		class="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm"
	>
		<Loader class="w-10 animate-spin text-primary" />

		<span
			class="mt-4 animate-pulse font-gunken text-sm font-bold tracking-widest text-primary uppercase"
		>
			{m.loading()}
		</span>
	</div>
{/if}
<header
	class="relative flex h-screen items-center justify-center overflow-hidden px-5 text-center"
	id="hero"
>
	<div class="z-10 max-w-3xl">
		<h1
			class="hero-title font-orbitron mb-5 text-5xl leading-tight uppercase md:text-7xl"
			bind:this={herotitle}
		>
			{m.tired_ornate_fox_soar()}<br /><span class="text-primary"
				>{m.less_spry_nuthatch_borrow()}</span
			>
		</h1>

		<p
			class="hero-subtitle mb-10 text-xl tracking-wide text-muted-foreground md:text-2xl"
			bind:this={herosubtitle}
		>
			{m.dizzy_key_mule_transform()}
		</p>

		<Button href="#compounds">{m.mild_vivid_seal_support()}</Button>
	</div>

	<div id="particle-container" class="pointer-events-none absolute inset-0"></div>
</header>

<section class="relative bg-background px-6 py-16 md:px-12 md:py-24" id="services">
	<div class="mb-12 border-l-4 border-primary pl-5 md:mb-16">
		<h2 class="font-orbitron text-3xl uppercase md:text-4xl">{m.front_teary_florian_spur()}</h2>
		<p class="mt-2 text-sm text-muted-foreground md:text-base">
			{m.due_free_kangaroo_kiss()}
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
		{#if getLocale() === 'ar'}
			{#each servicesData.ar as service, index}
				<Card.Root
					class="card flex h-full flex-col {index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<Card.Header>
						<Card.Title>
							<div class="mb-4 text-3xl text-primary">{service.number}</div>
							<h3 class="text-xl font-bold uppercase md:text-2xl">{service.title}</h3>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		{:else}
			{#each servicesData.en as service, index}
				<Card.Root
					class="card flex h-full flex-col {index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}"
				>
					<Card.Header>
						<Card.Title>
							<div class="mb-4 text-3xl text-primary">{service.number}</div>
							<h3 class="text-xl font-bold uppercase md:text-2xl">{service.title}</h3>
						</Card.Title>
					</Card.Header>
					<Card.Content>
						<p class="leading-relaxed text-muted-foreground">
							{service.description}
						</p>
					</Card.Content>
				</Card.Root>
			{/each}
		{/if}
	</div>
</section>
<data.stats />
<data.compuands />
<section class="flex justify-center bg-accent/5 px-6 py-16 md:px-12 md:py-24" id="contact">
	<div class="grid w-full max-w-5xl grid-cols-1 gap-12 lg:grid-cols-5">
		<div class="lg:col-span-2">
			<h2 class="font-orbitron mb-4 text-4xl tracking-wider uppercase md:text-5xl">
				Initiate Protocol
			</h2>
			<p class="mb-6 text-muted-foreground">
				Ready to upgrade your supply chain? Send us a transmission.
			</p>
			<div class="space-y-1 text-sm">
				<p><span class="font-bold text-primary">HQ:</span> Neo-Paris, Sector 7</p>
				<p><span class="font-bold text-primary">EMAIL:</span> link@aether-fragrance.com</p>
			</div>

			{#if $message}
				<div class="mt-6 animate-pulse border-l-2 border-primary bg-primary/10 p-4">
					<p class="text-xs font-bold text-primary uppercase">System Status</p>
					<p class="text-sm text-muted-foreground">{$message}</p>
				</div>
			{/if}
		</div>

		<form method="POST" use:enhance class="lg:col-span-3" autocomplete="on">
			<div class="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2">
				<Field.Field class="space-y-1">
					<Field.Label class="text-xs uppercase">Name</Field.Label>
					<Input
						type="text"
						name="name"
						placeholder="John Doe"
						class={input_class}
						bind:value={$formData.name}
						autocomplete="name"
					/>
					{#if $errors.name}<Field.Error class="text-[10px]">{$errors.name}</Field.Error>{/if}
				</Field.Field>

				<Field.Field class="space-y-1">
					<Field.Label class="text-xs uppercase">Company</Field.Label>
					<Input
						type="text"
						name="company"
						placeholder="Global Foods Ltd."
						class={input_class}
						bind:value={$formData.company}
						autocomplete="organization"
					/>
					{#if $errors.company}<Field.Error class="text-[10px]">{$errors.company}</Field.Error>{/if}
				</Field.Field>

				<Field.Field class="space-y-1">
					<Field.Label class="text-xs uppercase">Email</Field.Label>
					<Input
						type="email"
						name="email"
						placeholder="example@company.com"
						class={input_class}
						bind:value={$formData.email}
						autocomplete="work email"
					/>
					{#if $errors.email}<Field.Error class="text-[10px]">{$errors.email}</Field.Error>{/if}
				</Field.Field>

				<Field.Field class="space-y-1">
					<Field.Label class="text-xs uppercase">Inquiry Protocol</Field.Label>
					<Select.Root type="single" name="inquiryProtocol" bind:value={$formData.inquiryProtocol}>
						<Select.Trigger class="h-10 {input_class}">
							{$formData.inquiryProtocol || 'Select Protocol...'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="export">Export Request</Select.Item>
							<Select.Item value="agency">Agency Representation</Select.Item>
							<Select.Item value="import">Material Sourcing (Import)</Select.Item>
						</Select.Content>
					</Select.Root>
					{#if $errors.inquiryProtocol}<Field.Error class=" text-[10px]"
							>{$errors.inquiryProtocol}</Field.Error
						>{/if}
				</Field.Field>

				<Field.Field class="space-y-1 md:col-span-2">
					<Field.Label class="text-xs uppercase">Message</Field.Label>
					<Textarea
						name="message"
						rows={4}
						class="min-h-25 {input_class}"
						placeholder="CAS numbers, tonnage, etc..."
						bind:value={$formData.message}
						onkeydown={(event) => {
							// if (event.key === 'Enter' && !event.shiftKey) {
							// 	event.preventDefault(); // Stop the new line from being created
							// 	event.target.form.requestSubmit(); // Trigger the form submission
							// }
						}}
					/>
					{#if $errors.message}<Field.Error class="text-[10px]">{$errors.message}</Field.Error>{/if}
				</Field.Field>

				<div class="pt-2 md:col-span-2">
					<Button type="submit" class="w-full px-8 md:w-max">Execute Transmission</Button>
				</div>
			</div>
		</form>
	</div>
</section>

<style>
	:global(.embla__slide:not(.is-snapped)) {
		opacity: 0.3;
		background-color: red;
		filter: grayscale(1);
	}

	/* --- Glass Navbar --- */

	:global(.cyber-card:hover) {
		transform: translateY(-0.5rem) !important; /* -translate-y-2 */

		border-color: hsl(var(--primary)) !important;
	}
</style>
