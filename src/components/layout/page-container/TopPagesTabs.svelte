<script>
	import PageLink from '../PageLink.svelte';
	import { pageDocuments } from '@stores/routing';
</script>

<div class="border-b border-black  bg-black-light flex">
	{#each $pageDocuments as page}
		<PageLink {...page} classNames={page.isActive ? 'border-orange-400 border-t-2' : ''} />
	{/each}
</div>
