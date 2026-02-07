<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { gsap } from 'gsap';
	// Import Lucide Icons
	import { ShieldCheck, Workflow, BarChart3, type Icon as IconType } from '@lucide/svelte';

	import { getLocale } from '$lib/paraglide/runtime';

	interface BoardMember {
		icon: typeof IconType;
		role: string;
		name: string;
		bio: string;
	}

	interface TranslationContent {
		title: string;
		sub: string;
		members: BoardMember[];
	}

	// The main object type mapping language codes to the content
	type BoardTranslations = Record<'ar' | 'en', TranslationContent>;

	let sectionRef = $state<HTMLElement | null>(null);
	let headerRef = $state<HTMLElement | null>(null);
	let cardElements = $state<HTMLElement[]>([]);

	const t: BoardTranslations = {
		ar: {
			title: 'مجلس الإدارة',
			sub: 'الخبرة الصناعية وراء استقرار التوريد.',
			members: [
				{
					icon: ShieldCheck,
					role: 'المؤسس والرئيس التنفيذي',
					name: 'وابل عطايا',
					bio: 'رائد أعمال يتمتع بخبرة تزيد عن 6 سنوات. أسس الشركة في عام 2019 وقادها نحو الريادة في التجارة الدولية للمواد الخام.'
				},
				{
					icon: Workflow,
					role: 'مدير العمليات',
					name: 'عمر عطايا',
					bio: 'خبير في العمليات اللوجستية وإدارة سلاسل الإمداد. يعمل على تحسين العمليات وضمان التنسيق السلس بين الفرق العالمية.'
				}
			]
		},
		en: {
			title: 'Board of Directors',
			sub: 'The industrial expertise behind supply stability.',
			members: [
				{
					icon: ShieldCheck,
					role: 'CEO & Founder',
					name: 'Wabel Ataya',
					bio: 'Visionary entrepreneur with 6+ years of experience. Founded Appico in 2019, establishing the company as a leader in international raw material trade.'
				},
				{
					icon: Workflow,
					role: 'Director of Operations',
					name: 'Omar Ataya',
					bio: 'Specialist in logistics and supply chain management. Streamlines industrial processes and ensures seamless cross-border coordination.'
				}
			]
		}
	};

	let content = $derived(getLocale() === 'ar' ? t.ar : t.en);

	$effect(() => {
		if (!sectionRef || !headerRef || !cardElements) return;
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		});

		tl.from(headerRef, {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});

		tl.from(
			cardElements,
			{
				y: 50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: 'power3.out'
			},
			'-=0.4'
		);

		return () => {
			tl.kill();
		};
	});
</script>

<section
	bind:this={sectionRef}
	class="overflow-hidden border-y border-border bg-background px-12.5 py-25"
	dir={getLocale() === 'ar' ? 'rtl' : 'ltr'}
>
	<div bind:this={headerRef} class="mb-16 text-center">
		<h2 class="text-3xl font-black tracking-tighter uppercase md:text-5xl">{content.title}</h2>
		<p class="mt-4 text-muted-foreground">{content.sub}</p>
	</div>

	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
		{#each content.members as member, i}
			{@const Icon = member.icon}
			<div bind:this={cardElements[i]}>
				<Card.Root
					class="group h-full border-2 p-8 text-center transition-all duration-300 hover:border-primary hover:bg-muted-foreground"
				>
					<Card.Header class="p-0">
						<div
							class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl border-2 border-primary bg-background text-primary transition-transform duration-500 group-hover:rotate-360 group-hover:bg-primary group-hover:text-white"
						>
							<Icon />
						</div>
						<span class="mb-2 block text-xs font-black tracking-widest text-primary uppercase">
							{member.role}
						</span>
						<Card.Title class="text-2xl font-bold tracking-tight">{member.name}</Card.Title>
					</Card.Header>
					<Card.Content class="mt-4 p-0">
						<p class="text-sm leading-relaxed text-muted-foreground">
							{member.bio}
						</p>
					</Card.Content>
				</Card.Root>
			</div>
		{/each}
	</div>
</section>
