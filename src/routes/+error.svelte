<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="flex w-full flex-col items-center justify-center" style="height: 80vh;">
	<h1 class="text-center text-3xl font-bold text-primary">
		{page.status}
		<br />
		<span class="text-muted-foreground"> Some Thing Went Wrong! </span>
	</h1>
</div>
