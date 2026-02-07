<script lang="ts">
	import Abouthero from '$lib/components/Abouthero.svelte';
	import Foundersection from '$lib/components/Foundersection.svelte';
	import Teamsection from '$lib/components/Teamsection.svelte';
	import Maps from '$lib/Maps.svelte';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	// Process steps data
	const processSteps = [
		{
			number: '01',
			title: m.mushy_lower_earthworm_arise(),
			description: m.same_inclusive_fox_enchant()
		},
		{
			number: '02',
			title: m.tidy_dark_gazelle_clasp(),
			description: m.sad_calm_thrush_mop()
		},
		{
			number: '03',
			title: m.gaudy_full_sloth_aid(),
			description: m.great_wacky_flea_grin()
		}
	];

	// Location data
	const locationData = [
		{ id: 1, label: m.agent_basic_fox_nourish(), value: '33.5138° N, 36.2765° E' },
		{ id: 2, label: m.east_tired_manatee_gleam(), value: 'Damascus Cuntry side' },
		{ id: 3, label: m.super_witty_flamingo_work(), value: 'Syria, Damascus' },
		{ id: 4, label: m.even_inclusive_sheep_buy(), value: '0800 - 1800 (GMT+3)' }
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
<section class=" px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 border-b border-muted-foreground pb-8">
			<h2 class="text-4xl font-black tracking-tighter uppercase md:text-5xl">
				{m.arable_dizzy_owl_dine()} <span class="text-primary">{m.whole_frail_guppy_cheer()}</span>
			</h2>
			<p class="mt-4 max-w-2xl text-lg text-muted-foreground">
				{m.royal_actual_frog_peek()}
			</p>
		</div>
		<div class="grid gap-12 lg:grid-cols-3">
			<div class="space-y-4">
				<div
					class="inline-block border-2 border-primary px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase"
				>
					{m.alive_shy_elk_hunt()}
				</div>
				<h3 class="text-2xl font-bold">{m.tidy_away_eel_animate()}</h3>
				<p class="leading-relaxed text-muted-foreground">
					{m.patchy_next_larva_gleam()}
				</p>
			</div>

			<div
				class="space-y-4 border-muted-foreground ltr:border-l-2 ltr:pl-8 rtl:border-r-2 rtl:pr-8"
			>
				<div
					class="inline-block border-2 border-primary px-3 py-1 text-xs font-bold tracking-widest text-primary uppercase"
				>
					{m.red_jolly_baboon_shine()}
				</div>
				<h3 class="text-2xl font-bold">{m.curly_chunky_nils_dig()}</h3>
				<p class="leading-relaxed text-muted-foreground">
					{m.awful_whole_shad_swim()}
				</p>
			</div>

			<div
				class="space-y-4 border-muted-foreground ltr:border-l-2 ltr:pl-8 rtl:border-r-2 rtl:pr-8"
			>
				<div
					class="inline-block border-2 border-primary px-3 py-2 text-xs font-bold tracking-widest text-primary uppercase"
				>
					{m.front_wise_cowfish_trip()}
				</div>
				<ul class="space-y-3 text-sm">
					<li class="flex items-center gap-3 font-medium">
						<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
						{m.tiny_only_okapi_fall()}
					</li>
					<li class="flex items-center gap-3 font-medium">
						<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
						{m.fit_crisp_butterfly_clasp()}
					</li>
					<li class="flex items-center gap-3 font-medium">
						<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
						{m.calm_lucky_insect_learn()}
					</li>
					<li class="flex items-center gap-3 font-medium">
						<span class="h-1.5 w-1.5 rounded-full bg-primary"></span>
						{m.plane_proud_lizard_catch()}
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Location Section -->

<section class="w-full bg-background py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-4 md:px-8">
		<div class="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
			<div>
				<h2 class="anim-up text-3xl font-bold tracking-tight md:text-5xl">
					{m.home_low_frog_bake()} <span class="text-primary">{m.only_crazy_marmot_race()}</span>
				</h2>
				<p class="anim-up mt-2 text-lg text-muted-foreground">
					{m.ornate_bad_bumblebee_blend()}
				</p>
			</div>
		</div>

		<div class="grid gap-6 lg:grid-cols-3 lg:gap-8">
			<div class="anim-up border border-border bg-card p-6 shadow-sm lg:col-span-1">
				<div class="space-y-4">
					<div class="text-xs font-semibold tracking-wider uppercase">
						{m.lower_tidy_llama_glow()}
					</div>

					<table class="w-full text-start">
						<thead>
							<tr class="border-b border-border">
								<th class="pb-2 text-xs font-medium text-muted-foreground uppercase">
									{m.misty_kind_lizard_talk()}
								</th>
								<th class="pb-2 text-end text-xs font-medium text-muted-foreground uppercase">
									{m.shy_zippy_impala_trust()}
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-border/50">
							{#each locationData as data}
								<tr class="group transition-colors hover:bg-muted/50">
									<td class="py-3 text-sm font-medium group-hover:text-primary">
										{data.label}
									</td>
									<td
										class="py-3 text-sm tabular-nums transition-colors group-hover:text-primary ltr:text-end rtl:text-end"
									>
										<span
											dir={data.id === 1 || data.id === 4
												? 'ltr'
												: getLocale() === 'ar'
													? 'rtl'
													: 'ltr'}
										>
											{data.value}
										</span>
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
