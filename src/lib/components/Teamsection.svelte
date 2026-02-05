<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import gsap from 'gsap';

	// Register the plugin

	let sectionRef = $state<HTMLElement | null>(null);
	let headerRef = $state<HTMLElement | null>(null);
	let cardElements = $state<HTMLElement[]>([]); // Array to store card references

	$effect(() => {
		if (!sectionRef || !headerRef || !cardElements) return;
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: sectionRef,
				start: 'top 80%', // Starts when the top of section hits 80% of viewport
				toggleActions: 'play none none reverse'
			}
		});

		// Animate Header
		tl.from(headerRef, {
			y: 30,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out'
		});

		// Animate Cards with a stagger
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
		); // Starts slightly before header finish
	});
</script>

<section
	bind:this={sectionRef}
	class="overflow-hidden border-y border-border bg-background px-12.5 py-25"
>
	<div bind:this={headerRef} class="mb-10 text-center">
		<h2 class="text-3xl font-bold tracking-tight">Command Unit</h2>
		<p class="text-muted-foreground">The operatives behind the logistics.</p>
	</div>

	<div class="mx-auto grid max-w-300 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7.5">
		{#each [{ emoji: '👨‍🔬', role: 'HEAD OF SOURCING', name: 'Dr. Elias Thorne', bio: 'PhD in Organic Chemistry. Specializes in verifying the purity of essential oils.' }, { emoji: '👩‍💼', role: 'COMMERCIAL AGENT', name: 'Sarah Jenko', bio: 'Expert in international trade law and agency agreements. Manages European partnerships.' }, { emoji: '📦', role: 'LOGISTICS LEAD', name: 'Marcus K.', bio: 'Hazmat certified. Oversees the safe transport of volatile compounds across borders.' }] as member, i}
			<div bind:this={cardElements[i]}>
				<Card.Root
					class="group h-full p-7.5 text-center transition-colors duration-300 hover:border-primary"
				>
					<Card.Header class="p-0">
						<div
							class="mx-auto mb-5 flex h-25 w-25 items-center justify-center rounded-full border-2 border-primary bg-muted text-4xl transition-transform duration-300 group-hover:scale-110"
						>
							{member.emoji}
						</div>
						<span
							class="mb-2.5 block text-[0.8rem] font-bold tracking-wider text-primary uppercase"
						>
							{member.role}
						</span>
						<Card.Title class="text-xl font-semibold">{member.name}</Card.Title>
					</Card.Header>
					<Card.Content class="mt-2.5 p-0">
						<p class="text-[0.9rem] text-muted-foreground">
							{member.bio}
						</p>
					</Card.Content>
				</Card.Root>
			</div>
		{/each}
	</div>
</section>
