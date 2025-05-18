<script lang="ts">
	import { fly } from 'svelte/transition';
	import { siteLayout } from '@stores/site-layout';
	import { pageDocuments } from '@stores/routing';
	import { ArrowIcon, MinimizeIcon } from '@components/icons';
	import { Hoverable, Collapseable } from '@components/shared';

	import Search from './Search.svelte';
	import PageLink from './PageLink.svelte';
</script>

<div class="flex h-full w-44 flex-col text-xs" transition:fly|global={{ x: -30 }}>
	{#if $siteLayout.activeActivityBarTab === 'Explorer'}
		<div class="p-2">Explorer</div>
		<Hoverable classNames="h-full">
			{#snippet children({ hovering: hovered })}
				<Collapseable>
					{#snippet header({ collapsed })}
						<div
							class="border-black-lighter text-black-lighter bg-primary-light dark:bg-black-light space-between flex cursor-pointer items-center border px-1 py-0.5 uppercase"
						>
							<div class="flex flex-grow items-center gap-3">
								<ArrowIcon size={18} rotate={collapsed ? 0 : 1} />
								Porftolio-svelte
							</div>
							{#if hovered}
								<div class="cursor-pointer px-1">
									<MinimizeIcon size={14} />
								</div>
							{/if}
						</div>
					{/snippet}
					{#snippet body()}
						<div class="space-between flex cursor-pointer items-center py-0.5">
							<div class="flex w-full flex-col">
								{#each $pageDocuments as page}
									<PageLink {...page} innerClasses="pl-4" />
								{/each}
							</div>
						</div>
					{/snippet}
				</Collapseable>
			{/snippet}
		</Hoverable>
	{/if}

	{#if $siteLayout.activeActivityBarTab === 'Search'}
		<Search />
	{/if}
</div>
