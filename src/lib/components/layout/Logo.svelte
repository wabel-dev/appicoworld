<script lang="ts">
	import logo from '$lib/assets/appico_logo.webp';
	let { class: className }: { class?: string } = $props();
</script>

<span class={['whitespace-nowrap', className]}>Appico World</span>
<img
	class={['size-10 object-contain md:size-14', className]}
	style="mix-blend-mode: multiply;"
	src={logo}
	alt="Appico World Logo"
/>
