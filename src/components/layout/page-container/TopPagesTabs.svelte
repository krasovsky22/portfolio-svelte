<script>
	import PageLink from '../PageLink.svelte';
	import { pageDocuments } from '@stores/routing';
</script>

<div class="border-b border-[var(--white-color-border)] dark:border-[var(--dark-color-border)] bg-[var(--white-color-sidebar-bg)] dark:bg-[var(--dark-color-sidebar-bg)] flex text-[var(--white-color-text-muted)] dark:text-[var(--dark-color-text-muted)]">
	{#each $pageDocuments as page}
		<PageLink {...page} classNames={page.isActive ? 'border-[var(--accent-warm)] border-t-2 text-[var(--accent-warm)]' : ''} />
	{/each}
</div>
