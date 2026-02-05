<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Mane from '$lib/assets/mane.jpg';
	import { Button } from '$lib/components/ui/button/index.js';
	import tcf from '$lib/assets/tcf.jpg';
	import ClassNames from 'embla-carousel-class-names';
	import Autoplay from 'embla-carousel-autoplay';
	import { m } from '$lib/paraglide/messages';
	const classNamesPlugin = ClassNames({
		snapped: 'is-snapped'
	});
	const autoPlayPlugin = Autoplay({ delay: 3000, stopOnInteraction: true });
	const partneresCards = [
		{ src: Mane, alt: 'mane logo', desc: 'MANE', href: 'https://www.mane.com/' },
		{ src: tcf, alt: 'tcf logo', desc: 'TCF', href: 'https://www.tcffragrance.com/' },
		{ src: Mane, alt: 'mane logo', desc: 'MANE', href: 'https://www.mane.com/' },
		{ src: tcf, alt: 'tcf logo', desc: 'TCF', href: 'https://www.tcffragrance.com/' },
		{ src: Mane, alt: 'mane logo', desc: 'MANE', href: 'https://www.mane.com/' },
		{ src: tcf, alt: 'tcf logo', desc: 'TCF', href: 'https://www.tcffragrance.com/' },
		{ src: Mane, alt: 'mane logo', desc: 'MANE', href: 'https://www.mane.com/' },
		{ src: tcf, alt: 'tcf logo', desc: 'TCF', href: 'https://www.tcffragrance.com/' }
	];
</script>

{#snippet play_card(src: string, alt: string, desc: string, href: string)}
	<!-- From Uiverse.io by Creatlydev -->
	<article class="mx-auto w-full max-w-75 border bg-card p-1 text-card-foreground shadow-sm">
		<section class="rounded-t-lg p-1 text-sm">
			<img {src} {alt} class="h-full w-full object-cover" />
		</section>

		<footer
			class="flex flex-col items-start gap-4 p-3 text-sm font-bold min-[340px]:flex-row min-[340px]:items-center min-[340px]:justify-between"
		>
			<div class="flex items-center gap-3">
				<div>
					<p class="leading-tight text-foreground">
						{desc}
					</p>
				</div>
			</div>
			<Button class="w-full  min-[340px]:w-max" {href}>{m.pretty_large_dolphin_attend()}</Button>
		</footer>
	</article>
{/snippet}
<div class="w-full px-12">
	<Carousel.Root
		class="w-full"
		opts={{
			align: 'center'
		}}
		plugins={[classNamesPlugin, autoPlayPlugin]}
	>
		<Carousel.Content class="-ml-4">
			{#each partneresCards as partner, index (index)}
				<Carousel.Item
					class="scale-90 ps-4 pt-4 opacity-30 
                 grayscale transition-all duration-500
                 ease-in-out md:basis-1/2 lg:basis-1/3
                 [&.is-snapped]:scale-100 [&.is-snapped]:opacity-100 [&.is-snapped]:grayscale-0"
				>
					{@render play_card(partner.src, partner.alt, partner.desc, partner.href)}
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<Carousel.Previous />

		<Carousel.Next />
	</Carousel.Root>
</div>
