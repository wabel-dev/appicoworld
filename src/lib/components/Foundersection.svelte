<script lang="ts">
	import { getLocale } from '$lib/paraglide/runtime';

	// Translation Dictionary
	const t = {
		ar: {
			label: 'التوريد العالمي',
			title: 'تأمين الرابط الصناعي',
			quote:
				'نحن لا نقوم بمجرد نقل المواد؛ نحن نؤمن القواعد الكيميائية لإنتاجكم. في الأسواق المتقلبة، أبيكو العالمية هي الثابت.',
			description:
				'تأسست أبيكو العالمية لتوفير رابط مباشر بين مختبرات التصنيع العالمية والتصنيع الإقليمي، وقد تطورت لتصبح وكالة رائدة في قطاعات الأغذية والعطور ومستحضرات التجميل. نحن متخصصون في الخدمات اللوجستية المعقدة للمركبات الخام، لضمان مطابقة كل جرام يتم تسليمه لمواصفاتكم الدقيقة.',
			stats: ['وكالات مباشرة', 'مصادر توريد', 'طن متري / سنوياً', 'تدقيق دفعات الإنتاج'],
			role: '[المؤسس والرئيس التنفيذي]'
		},
		en: {
			label: 'Global Procurement',
			title: 'Securing the Industrial Link',
			quote:
				'We do not simply move materials; we secure the chemical foundations of your production. In unpredictable markets, Appico World is the constant.',
			description:
				'Established to provide a direct link between global synthesis labs and regional manufacturing, Appico World has evolved into a premier agency for the Food, Fragrance, and Cosmetic industries. We specialize in the high-stakes logistics of raw compounds, ensuring every gram delivered meets your exact specifications.',
			stats: ['Direct Agencies', 'Supply Origins', 'Metric Tons / Annum', 'Batch Audited'],
			role: '[Founder & CEO]'
		}
	};

	// Helper to get active content
	let content = $derived(getLocale() === 'ar' ? t.ar : t.en);
</script>

<section
	class="mx-auto grid max-w-300 grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-15 md:px-12.5 md:py-25"
	dir={getLocale() === 'ar' ? 'rtl' : 'ltr'}
>
	<div
		class="anim-slide-right relative order-2 mt-8 grid grid-cols-1 gap-5 border border-border p-6 sm:grid-cols-2 md:order-1 md:mt-16 md:p-7.5"
		style="clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);"
	>
		<div
			class="stat-item border border-border bg-card p-6 text-center transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,46,46,0.2)] md:p-[30px_20px]"
		>
			<span class="block text-3xl font-bold text-foreground md:text-[2.5rem]">15+</span>
			<span
				class="mt-1 block text-sm font-semibold tracking-wider text-primary uppercase md:text-base"
				>{content.stats[0]}</span
			>
		</div>

		<div
			class="stat-item border border-border bg-card p-6 text-center transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,46,46,0.2)] md:p-[30px_20px]"
		>
			<span class="block text-3xl font-bold text-foreground md:text-[2.5rem]">40</span>
			<span
				class="mt-1 block text-sm font-semibold tracking-wider text-primary uppercase md:text-base"
				>{content.stats[1]}</span
			>
		</div>

		<div
			class="stat-item border border-border bg-card p-6 text-center transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,46,46,0.2)] md:p-[30px_20px]"
		>
			<span class="block text-3xl font-bold text-foreground md:text-[2.5rem]">8.5k</span>
			<span
				class="mt-1 block text-sm font-semibold tracking-wider text-primary uppercase md:text-base"
				>{content.stats[2]}</span
			>
		</div>

		<div
			class="stat-item border border-border bg-card p-6 text-center transition-all duration-300 hover:z-10 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,46,46,0.2)] md:p-[30px_20px]"
		>
			<span class="block text-3xl font-bold text-foreground md:text-[2.5rem]">100%</span>
			<span
				class="mt-1 block text-sm font-semibold tracking-wider text-primary uppercase md:text-base"
				>{content.stats[3]}</span
			>
		</div>

		<div class="absolute right-2.5 bottom-2.5 hidden h-0.5 w-12.5 bg-primary sm:block"></div>
		<div class="absolute top-2.5 left-2.5 hidden h-7.5 w-0.5 bg-primary sm:block"></div>
	</div>

	<div class="anim-slide-left order-1 md:order-2">
		<h4 class="font-bold tracking-widest text-primary uppercase">{content.label}</h4>
		<h2 class="mb-3 text-3xl leading-tight font-bold md:mb-2.5 md:text-[2.5rem]">
			{content.title}
		</h2>
		<p class="mb-5 text-lg italic opacity-90 md:text-[1.1rem]">
			"{content.quote}"
		</p>
		<p class="text-base leading-relaxed text-muted-foreground">
			{content.description}
		</p>

		<div class="mt-8 text-xs font-bold tracking-[2px] md:text-[0.9rem]">
			// وابل عطايا <span class="font-normal text-muted-foreground">{content.role}</span>
		</div>
	</div>
</section>
