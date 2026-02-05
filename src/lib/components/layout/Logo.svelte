<script lang="ts">
	import logo from '$lib/assets/appico_logo.webp';
	let { class: className }: { class?: string } = $props();
</script>

<span class="logo-text font-gunken {className}">Appico World</span>
<img class="logo-image {className}" src={logo} alt="Appico World Logo" />

<style>
	.logo-text {
		white-space: nowrap;
	}

	.logo-image {
		/* Manual size instead of Tailwind 'size-10' */
		width: 2.5rem; /* 40px */
		height: 2.5rem; /* 40px */
		object-fit: contain;

		/* mix-blend-mode fallback */
		background-color: transparent;
		mix-blend-mode: multiply;
	}

	@media (min-width: 768px) {
		.logo-image {
			/* Manual size instead of Tailwind 'md:size-14' */
			width: 3.5rem; /* 56px */
			height: 3.5rem; /* 56px */
		}
	}
</style>
