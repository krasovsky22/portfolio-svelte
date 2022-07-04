<script>
	import TopPagesTabs from './TopPagesTabs.svelte';
	import { siteLayout } from '@/stores/site-layout';
	import ConsoleContainer from './ConsoleContainer.svelte';
</script>

<div class="flex flex-col flex-grow">
	<TopPagesTabs />
	<slot />
	{#if $siteLayout.showConsoleBar}
		<ConsoleContainer />
	{/if}
</div>
