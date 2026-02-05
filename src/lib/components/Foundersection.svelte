<section class="founder-section">
	<div class="stats-matrix anim-slide-right">
		<div class="stat-item">
			<span class="stat-number">15+</span>
			<span class="stat-label">Global Agencies</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">40</span>
			<span class="stat-label">Partner Nations</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">8.5k</span>
			<span class="stat-label">Tons / Annum</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">100%</span>
			<span class="stat-label">Compliance</span>
		</div>
		<div class="tech-line tech-line-bottom"></div>
		<div class="tech-line tech-line-top"></div>
	</div>

	<div class="founder-text anim-slide-left">
		<h4 class="text-red">Corporate Trajectory</h4>
		<h2 class="section-title">The Standard of Purity</h2>
		<p class="founder-quote">
			"We don't just trade commodities; we engineer the supply chain. In an industry defined by
			volatility, AETHER provides the constant—guaranteeing molecular purity and logistical
			precision."
		</p>
		<p class="founder-description">
			Established to bridge the gap between European synthesis labs and Middle Eastern industrial
			manufacturing, AETHER has evolved into a premier commercial agency. We act as the exclusive
			representative for top-tier manufacturers, ensuring that our clients receive unadulterated raw
			materials for food production, fine fragrance, and cosmetics.
		</p>
		<br />
		<div class="founder-signature">
			// ALEXEI V. ROSTOVA <span class="founder-title">[DIRECTOR]</span>
		</div>
	</div>
</section>

<style>
	/* --- FOUNDER / STATS SECTION --- */
	.founder-section {
		padding: 100px 50px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		align-items: center;
		max-width: 1200px;
		margin: 0 auto;
	}

	.stats-matrix {
		margin-top: 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
		padding: 30px;
		background: rgba(255, 46, 46, 0.05);
		border: 1px solid hsl(var(--border));
		position: relative;
		clip-path: polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%);
	}

	.stat-item {
		border: 1px solid hsl(var(--border));
		padding: 30px 20px;
		text-align: center;
		transition: all 0.3s;
		background: hsl(var(--card));
	}

	.stat-item:hover {
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(255, 46, 46, 0.2);
		z-index: 10;
	}

	.stat-number {
		display: block;
		font-size: 2.5rem;
		color: hsl(var(--foreground));
		font-weight: 700;
	}

	.stat-label {
		color: #ff2e2e;
		letter-spacing: 1px;
		font-weight: 600;
		margin-top: 5px;
		display: block;
	}

	.tech-line {
		position: absolute;
		background: #ff2e2e;
	}

	.tech-line-bottom {
		bottom: 10px;
		right: 10px;
		width: 50px;
		height: 2px;
	}

	.tech-line-top {
		top: 10px;
		left: 10px;
		width: 2px;
		height: 30px;
	}

	.founder-quote {
		margin-bottom: 20px;
		font-size: 1.1rem;
	}

	.founder-description {
		color: hsl(var(--muted-foreground));
	}

	.founder-signature {
		font-size: 0.9rem;
		letter-spacing: 2px;
	}

	.founder-title {
		color: hsl(var(--muted-foreground));
	}
	.section-title {
		font-size: 2.5rem;
		margin-bottom: 10px;
		font-weight: 700;
	}

	.section-subtitle {
		color: hsl(var(--muted-foreground));
		font-size: 1.1rem;
		margin-bottom: 50px;
		letter-spacing: 1px;
	}

	.section-header {
		text-align: center;
		margin-bottom: 60px;
	}

	.brand {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: 2px;
		color: hsl(var(--foreground));
	}

	.brand span {
		color: #ff2e2e;
	}

	.system-status {
		font-weight: bold;
	}
</style>
