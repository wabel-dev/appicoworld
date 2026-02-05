<script lang="ts">
	import Abouthero from '$lib/components/Abouthero.svelte';
	import Foundersection from '$lib/components/Foundersection.svelte';
	import Teamsection from '$lib/components/Teamsection.svelte';
	import Maps from '$lib/Maps.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	// Process steps data
	const processSteps = [
		{
			number: '01',
			title: 'Identify',
			description: 'We scout global markets for manufacturers adhering to ISO & GMP standards.'
		},
		{
			number: '02',
			title: 'Verify',
			description:
				'Molecular testing and certificates of analysis (COA) are audited before purchase.'
		},
		{
			number: '03',
			title: 'Deploy',
			description: 'Hazmat-approved logistics ensure safe delivery to your industrial facility.'
		}
	];

	// Location data
	const locationData = [
		{ label: 'COORDINATES', value: '33.5138° N, 36.2765° E' },
		{ label: 'SECTOR', value: 'Industrial Zone B, Facility 404' },
		{ label: 'CITY / REGION', value: 'Damascus Free Trade Zone' },
		{ label: 'OPERATING HOURS', value: '0800 - 1800 (GMT+3)' }
	];
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
		<title
			>Appico World | Global Trade & Industrial Raw Materials | Food, Fragrance & Cosmetics</title
		>

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
		<meta property="og:image" content="https://appicoworld.vercel.app/appico_logo.webp" />
		<meta property="og:site_name" content="Appico World" />

		<meta name="twitter:card" content="https://appicoworld.vercel.app/appico_logo.webp" />
		<meta name="twitter:title" content="Appico World | Industrial Raw Materials & Logistics" />
		<meta
			name="twitter:description"
			content="Bridging the gap between global synthesis labs and local manufacturing. Food, Scent, & Cosmetic sourcing."
		/>
		<meta name="twitter:image" content="https://appicoworld.vercel.app/appico_logo.webp" />
	{/if}
</svelte:head>

<!-- Hero Section -->
<Abouthero />

<!-- Founder Section -->
<Foundersection />

<!-- Team Section -->
<Teamsection />

<!-- Protocol Section -->
<section class="px-6 py-24 md:py-32">
	<div class="mx-auto max-w-7xl">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="anim-up mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">The Sourcing Protocol</h2>
			<p class="anim-up text-lg text-muted-foreground">
				Our methodology for ensuring quality assurance.
			</p>
		</div>

		<!-- Process Steps -->
		<div
			class="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-6"
		>
			{#each processSteps as step, index}
				<!-- Process Step Card -->
				<div
					class="anim-up relative w-full min-w-62.5 flex-1 border-t-2 border-red-600 bg-card p-8 text-center md:p-10"
				>
					<!-- Step Number (Background) -->
					<div class="absolute top-3 right-5 text-7xl font-black text-muted opacity-10">
						{step.number}
					</div>

					<!-- Step Content -->
					<h3 class="relative z-10 mb-4 text-2xl font-semibold">{step.title}</h3>
					<p class="relative z-10 text-sm text-muted-foreground md:text-base">
						{step.description}
					</p>
				</div>

				<!-- Connector Line (Hidden on Mobile) -->
				{#if index < processSteps.length - 1}
					<div class="hidden h-0.5 w-12 shrink-0 bg-border md:block"></div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<!-- Location Section -->

<section class="w-full bg-background py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-4 md:px-8">
		<div class="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
			<div>
				<h2 class="anim-up text-3xl font-bold tracking-tight md:text-5xl">
					Base of <span class="text-primary">Operations</span>
				</h2>
				<p class="anim-up mt-2 text-lg text-muted-foreground">
					Global coordination hub & telemetry.
				</p>
			</div>
		</div>

		<div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
			<div class="anim-up border border-border bg-card p-6 shadow-sm lg:col-span-1">
				<div class="space-y-4">
					<div class="text-xs font-semibold tracking-wider uppercase">Live Metrics</div>

					<table class="w-full text-left">
						<thead>
							<tr class="border-b border-border">
								<th class="pb-2 text-xs font-medium text-muted-foreground uppercase">Parameter</th>
								<th class="pb-2 text-right text-xs font-medium text-muted-foreground uppercase"
									>Status</th
								>
							</tr>
						</thead>
						<tbody class="divide-y divide-border/50">
							{#each locationData as data}
								<tr class="group transition-colors hover:bg-muted/50">
									<td class="py-3 text-sm font-medium group-hover:text-primary">
										{data.label}
									</td>
									<td
										class="py-3 text-right text-sm tabular-nums transition-colors group-hover:text-primary"
									>
										{data.value}
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>

			<div
				class="anim-up overflow-hidden rounded-xl border border-border bg-muted/20 shadow-sm lg:col-span-2"
			>
				<div class="relative h-full min-h-100 w-full">
					<Maps />

					<div
						class="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 to-transparent"
					></div>
				</div>
			</div>
		</div>
	</div>
</section>
