<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Abouthero from '$lib/components/Abouthero.svelte';
	import Foundersection from '$lib/components/Foundersection.svelte';
	import Teamsection from '$lib/components/Teamsection.svelte';

	onMount(() => {
		// Hero Fade In
		gsap.fromTo(
			'.anim-fade',
			{ opacity: 0, y: 20 },
			{ opacity: 1, y: 0, duration: 1, stagger: 0.2 }
		);

		// Founder Section Slide
		ScrollTrigger.create({
			trigger: '.founder-section',
			start: 'top 80%',
			onEnter: () => {
				gsap.fromTo(
					'.anim-slide-right',
					{ x: -50, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.8 }
				);
				gsap.fromTo(
					'.anim-slide-left',
					{ x: 50, opacity: 0 },
					{ x: 0, opacity: 1, duration: 0.8, delay: 0.2 }
				);
			}
		});

		// Team, Protocol & Location Upward Animation
		document.querySelectorAll('.anim-up').forEach((element) => {
			ScrollTrigger.create({
				trigger: element,
				start: 'top 85%',
				onEnter: () => {
					gsap.fromTo(
						element,
						{ y: 50, opacity: 0 },
						{ y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
					);
				}
			});
		});
	});
</script>

<svelte:head>
	<title>About AETHER | The Molecular Supply Chain</title>
</svelte:head>

<Abouthero />
<Foundersection />
<Teamsection />

<section class="protocol-section">
	<div class="section-header">
		<h2 class="section-title anim-up">The Sourcing Protocol</h2>
		<p class="section-subtitle anim-up">Our methodology for ensuring quality assurance.</p>
	</div>

	<div class="process-container">
		<div class="process-step anim-up">
			<div class="step-number">01</div>
			<h3>Identify</h3>
			<p>We scout global markets for manufacturers adhering to ISO & GMP standards.</p>
		</div>

		<div class="step-connector"></div>

		<div class="process-step anim-up">
			<div class="step-number">02</div>
			<h3>Verify</h3>
			<p>Molecular testing and certificates of analysis (COA) are audited before purchase.</p>
		</div>

		<div class="step-connector"></div>

		<div class="process-step anim-up">
			<div class="step-number">03</div>
			<h3>Deploy</h3>
			<p>Hazmat-approved logistics ensure safe delivery to your industrial facility.</p>
		</div>
	</div>
</section>

<section class="location-section">
	<h2 class="section-title anim-up">Base of Operations</h2>
	<p class="section-subtitle anim-up">Global coordination hub.</p>

	<div class="data-terminal anim-up">
		<div class="data-row">
			<span class="data-label">COORDINATES</span>
			<span>33.5138° N, 36.2765° E</span>
		</div>
		<div class="data-row">
			<span class="data-label">SECTOR</span>
			<span>Industrial Zone B, Facility 404</span>
		</div>
		<div class="data-row">
			<span class="data-label">CITY / REGION</span>
			<span>Damascus Free Trade Zone</span>
		</div>
		<div class="data-row">
			<span class="data-label">OPERATING HOURS</span>
			<span>0800 - 1800 (GMT+3)</span>
		</div>
		<div class="data-row data-row-last">
			<span class="data-label">STATUS</span>
			<span class="status-active">ACTIVE</span>
		</div>
	</div>
</section>

molecular science and industrial application.

<style>
	/* --- PROTOCOL SECTION --- */
	.protocol-section {
		padding: 100px 50px;
		background: hsl(var(--background));
		border-top: 1px solid hsl(var(--border));
	}

	.process-container {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 1100px;
		margin: 0 auto;
		flex-wrap: wrap;
		gap: 20px;
	}

	.process-step {
		flex: 1;
		min-width: 250px;
		background: hsl(var(--card));
		padding: 40px 30px;
		border-top: 2px solid #ff2e2e;
		text-align: center;
		position: relative;
	}

	.step-number {
		font-size: 3rem;
		color: hsl(var(--muted));
		opacity: 0.1;
		position: absolute;
		top: 10px;
		right: 20px;
		font-weight: 900;
	}

	.process-step h3 {
		font-size: 1.5rem;
		margin-bottom: 15px;
	}

	.process-step p {
		color: hsl(var(--muted-foreground));
		font-size: 0.95rem;
	}

	.step-connector {
		width: 50px;
		height: 2px;
		background: hsl(var(--border));
	}

	/* --- LOCATION --- */
	.location-section {
		padding: 100px 50px;
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.data-terminal {
		background: #000;
		border: 1px solid hsl(var(--border));
		padding: 40px;
		text-align: left;
		position: relative;
		max-width: 800px;
		margin: 0 auto;
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
	}

	.data-terminal::before {
		content: 'SECURE CONNECTION ESTABLISHED';
		position: absolute;
		top: 10px;
		right: 20px;
		color: #0f0;
		font-size: 0.7rem;
		opacity: 0.7;
	}

	.data-row {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid hsl(var(--border));
		padding: 15px 0;
		color: hsl(var(--muted-foreground));
	}

	.data-row-last {
		border-bottom: none;
	}

	.data-label {
		color: #ff2e2e;
	}

	.status-active {
		color: #0f0;
	}

	/* --- FOOTER --- */
	footer {
		padding: 40px;
		text-align: center;
		border-top: 1px solid hsl(var(--border));
		font-size: 0.8rem;
		color: hsl(var(--muted-foreground));
	}

	/* --- RESPONSIVE --- */
	@media (max-width: 768px) {
		.founder-section {
			grid-template-columns: 1fr;
		}

		.nav-links {
			display: none;
		}

		.page-hero h1 {
			font-size: 2.5rem;
		}

		nav {
			padding: 20px;
		}

		.step-connector {
			display: none;
		}

		.process-container {
			flex-direction: column;
		}

		.process-step {
			width: 100%;
		}
	}
</style>
