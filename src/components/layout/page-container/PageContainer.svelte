<script lang="ts">
	import { fade } from 'svelte/transition';
	import { activePage, POSSIBLE_ROUTES } from '@stores/routing';
	import TopPagesTabs from './TopPagesTabs.svelte';
	import { siteLayout } from '@/stores/site-layout';
	import ConsoleContainer from './ConsoleContainer.svelte';
	import { page } from '$app/state';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

    console.log($activePage)
</script>

<div class="flex flex-grow flex-col">
	{#if !$siteLayout.isMobileVersion}
		<TopPagesTabs />
	{/if}

	<div class="flex-grow h-[500px]" class:overflow-auto={$activePage?.url !== POSSIBLE_ROUTES.INDEX} transition:fade={{ duration: 200 }}>
		{#key page.url.pathname}
				{@render children?.()}
		{/key}
	</div>
	{#if $siteLayout.showConsoleBar}
		<ConsoleContainer />
	{/if}
</div>
