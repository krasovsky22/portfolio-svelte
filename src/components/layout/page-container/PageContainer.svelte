<script lang="ts">
	import TopPagesTabs from './TopPagesTabs.svelte';
	import { siteLayout } from '@/stores/site-layout';
	import ConsoleContainer from './ConsoleContainer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="flex flex-grow flex-col">
	{#if !$siteLayout.isMobileVersion}
		<TopPagesTabs />
	{/if}

	<div class="flex-grow">
		{@render children?.()}
	</div>
	{#if $siteLayout.showConsoleBar}
		<ConsoleContainer />
	{/if}
</div>
