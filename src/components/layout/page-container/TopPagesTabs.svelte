<script>
	import PageLink from '../PageLink.svelte';
	import { pageDocuments } from '@stores/routing';
</script>

<div class="border-b bg-whiteMainBg dark:bg-darkMainBg border-black flex text-black-lighter">
	{#each $pageDocuments as page}
		<PageLink {...page} classNames={page.isActive ? 'border-orange-400 border-t-2 dark:text-orange-200' : ''} />
	{/each}
</div>
