<script>
import TopPagesTabs from './TopPagesTabs.svelte';

</script>
<div class="flex flex-col gap-1">
	<TopPagesTabs />
	<div class="px-3">
		<slot />
	</div>
</div>
