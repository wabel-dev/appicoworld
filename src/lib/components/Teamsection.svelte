<section class="team-section">
	<div class="section-header">
		<h2 class="section-title anim-up">Command Unit</h2>
		<p class="section-subtitle anim-up">The operatives behind the logistics.</p>
	</div>

	<div class="team-grid">
		<div class="team-card anim-up">
			<div class="team-avatar">👨‍🔬</div>
			<span class="team-role">HEAD OF SOURCING</span>
			<h3>Dr. Elias Thorne</h3>
			<p class="team-description">
				PhD in Organic Chemistry. Specializes in verifying the purity of essential oils and
				synthetic esters.
			</p>
		</div>

		<div class="team-card anim-up">
			<div class="team-avatar">👩‍💼</div>
			<span class="team-role">COMMERCIAL AGENT</span>
			<h3>Sarah Jenko</h3>
			<p class="team-description">
				Expert in international trade law and agency agreements. Manages our European partnerships.
			</p>
		</div>

		<div class="team-card anim-up">
			<div class="team-avatar">📦</div>
			<span class="team-role">LOGISTICS LEAD</span>
			<h3>Marcus K.</h3>
			<p class="team-description">
				Hazmat certified. Oversees the safe transport of volatile compounds across borders.
			</p>
		</div>
	</div>
</section>

<style>
	/* --- TEAM GRID --- */
	.team-section {
		padding: 100px 50px;
		background: hsl(var(--card));
		border-top: 1px solid hsl(var(--border));
		border-bottom: 1px solid hsl(var(--border));
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 30px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.team-card {
		background: hsl(var(--background));
		padding: 30px;
		border: 1px solid hsl(var(--border));
		text-align: center;
		transition: all 0.3s;
		position: relative;
		overflow: hidden;
	}

	.team-card:hover {
		border-color: #ff2e2e;
		transform: translateY(-5px);
	}

	.team-avatar {
		width: 100px;
		height: 100px;
		background: hsl(var(--muted));
		margin: 0 auto 20px;
		border-radius: 50%;
		border: 2px solid #ff2e2e;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
	}

	.team-role {
		font-size: 0.8rem;
		color: #ff2e2e;
		font-weight: 700;
		letter-spacing: 1px;
		margin-bottom: 10px;
		display: block;
	}

	.team-description {
		margin-top: 10px;
		font-size: 0.9rem;
		color: hsl(var(--muted-foreground));
	}
</style>
