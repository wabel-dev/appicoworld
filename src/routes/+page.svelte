<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import logo from '$lib/assets/appico_logo.webp';

	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	let herotitle: HTMLElement | null = $state(null);
	let herosubtitle: HTMLElement | null = $state(null);
	$effect(() => {
		if (!herotitle || !herosubtitle) return;

		gsap.registerPlugin(ScrollTrigger);

		// Create animations and store references for cleanup
		const heroTitleAnimation = gsap.from(herotitle, {
			y: 50,
			opacity: 0,
			duration: 1,
			ease: 'power3.out',
			skewY: 5,
			scrollTrigger: {
				trigger: herotitle,
				start: 'top 85%',
				end: 'bottom 15%',
				toggleActions: 'play reverse play reverse'
			}
		});

		const heroSubtitleAnimation = gsap.from(herosubtitle, {
			y: 30,
			opacity: 0,
			duration: 0.8,
			delay: 0.5,
			scrollTrigger: {
				trigger: herosubtitle,
				start: 'top 85%',
				end: 'bottom 15%',
				toggleActions: 'play reverse play reverse'
			}
		});

		// Card animations - store all animations
		const cardAnimations = gsap.utils.toArray('.card').map((card) => {
			return gsap.from(card as HTMLElement, {
				y: 50,
				opacity: 0,
				duration: 0.8,
				scrollTrigger: {
					trigger: card as HTMLElement,
					start: 'top 85%',
					end: 'bottom 15%',
					toggleActions: 'play reverse play reverse'
				}
			});
		});

		// Cleanup function
		return () => {
			// Kill individual animations
			heroTitleAnimation.kill();
			heroSubtitleAnimation.kill();
			cardAnimations.forEach((anim) => anim.kill());

			// Kill all associated ScrollTriggers
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	});
</script>

<nav class="glass-nav">
	<div class="font-orbitron text-2xl font-bold tracking-widest uppercase">
		Appico World<img
			class="inline-flex size-14"
			style=" mix-blend-mode: multiply;"
			src={logo}
			alt="Appico World Logo"
		/>
	</div>
	<ul class="hidden list-none gap-8 md:flex">
		<li><a href="#hero" class="transition-colors hover:text-primary">Home</a></li>
		<li><a href="#services" class="transition-colors hover:text-primary">Logistics</a></li>
		<li><a href="#contact" class="transition-colors hover:text-primary">Contact</a></li>
	</ul>
	<Button class="btn-future">Get Quote</Button>
</nav>

<header
	class="relative flex h-screen items-center justify-center overflow-hidden px-5 text-center"
	id="hero"
>
	<div class="z-10 max-w-3xl">
		<h1
			class="hero-title font-orbitron mb-5 text-5xl leading-tight uppercase md:text-7xl"
			bind:this={herotitle}
		>
			The Scent of <br /><span class="text-primary">The Future</span>
		</h1>
		<p
			class="hero-subtitle mb-10 text-xl tracking-wide text-muted-foreground md:text-2xl"
			bind:this={herosubtitle}
		>
			Global import & export of premium fragrance compounds and raw synthetic materials.
		</p>
		<Button class="btn-future">Explore Catalog</Button>
	</div>
	<div id="particle-container" class="pointer-events-none absolute inset-0"></div>
</header>

<section class="relative bg-background px-12 py-24" id="services">
	<div class="mb-16 border-l-4 border-primary pl-5">
		<h2 class="font-orbitron text-4xl uppercase">Our Capabilities</h2>
		<p class="mt-2 text-muted-foreground">Precision logistics for delicate compounds.</p>
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
		<div class="card cyber-card">
			<div class="font-orbitron mb-5 text-3xl text-primary">01</div>
			<h3 class="font-orbitron mb-4 text-2xl uppercase">Global Sourcing</h3>
			<p class="leading-relaxed text-muted-foreground">
				We extract and synthesize rare olfactory materials from 40+ countries.
			</p>
		</div>
		<div class="card cyber-card">
			<div class="font-orbitron mb-5 text-3xl text-primary">02</div>
			<h3 class="font-orbitron mb-4 text-2xl uppercase">Hazmat Logistics</h3>
			<p class="leading-relaxed text-muted-foreground">
				Specialized transport for volatile esters and essential oils. Tracked via blockchain.
			</p>
		</div>
		<div class="card cyber-card">
			<div class="font-orbitron mb-5 text-3xl text-primary">03</div>
			<h3 class="font-orbitron mb-4 text-2xl uppercase">Synthetic Export</h3>
			<p class="leading-relaxed text-muted-foreground">
				Next-gen lab-grown musk and ambergris alternatives for major fashion houses.
			</p>
		</div>
	</div>
</section>
<section class="flex justify-center bg-accent/5 px-12 py-24" id="contact">
	<div class="grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
		<div>
			<h2 class="font-orbitron mb-5 text-5xl uppercase">Initiate Protocol</h2>
			<p class="mb-8 text-muted-foreground">
				Ready to upgrade your supply chain? Send us a transmission.
			</p>
			<div class="space-y-2">
				<p><strong>HQ:</strong> Neo-Paris, Sector 7</p>
				<p><strong>Email:</strong> link@aether-fragrance.com</p>
			</div>
		</div>

		<form id="contactForm" class="flex flex-col gap-5">
			<input
				type="text"
				placeholder="Entity Name"
				class="w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary"
				required
			/>
			<input
				type="email"
				placeholder="Digital Address"
				class="w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary"
				required
			/>
			<textarea
				placeholder="Transmission Content"
				class="h-40 w-full border border-border bg-card p-4 transition-all outline-none focus:border-primary"
			></textarea>
			<Button type="submit" class="btn-future ">Send Data</Button>
		</form>
	</div>
</section>

<footer class="border-t border-border py-10 text-center text-sm text-muted-foreground">
	&copy; 2026 Appico World Fragrance Logistics. All Systems Operational.
</footer>

<style>
	:global(.btn-future) {
		transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
		clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
	}
	@font-face {
		font-family: 'Gunken';
		font-style: normal;
		font-weight: normal;
		font-display: swap;
		src: url('$lib/assets/Gunken.otf') format('opentype');
	}

	/* .btn-future:hover {
		background-color: hsl(var(--primary));
		color: hsl(var(--primary-foreground));
		box-shadow: 0 0 20px rgba(255, 46, 46, 0.4);
	} */

	/* --- Glass Navbar --- */
	.glass-nav {
		position: fixed;
		top: 0;
		width: 100%;
		padding: 1.25rem 3rem; /* px-12 py-5 */
		display: flex;
		justify-content: space-between;
		align-items: center;
		z-index: 50;
		background-color: hsla(var(--background), 0.8); /* bg-background/80 */
		backdrop-filter: blur(12px); /* backdrop-blur-md */
		border-bottom: 1px solid hsl(var(--border));
	}

	/* --- Cyber Card --- */
	:global(.cyber-card) {
		background-color: var(--card);
		padding: 2.5rem; /* p-10 */
		border: 1px solid hsl(var(--border));
		position: relative;
		transition:
			transform 300ms,
			border-color 300ms;
		clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);
	}

	:global(.cyber-card:hover) {
		transform: translateY(-0.5rem); /* -translate-y-2 */
		border-color: hsl(var(--primary));
	}
</style>
