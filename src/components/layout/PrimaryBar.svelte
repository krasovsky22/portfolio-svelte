<script lang="ts">
	import { fly } from 'svelte/transition';
	import { siteLayout } from '@stores/site-layout';
	import { pageDocuments } from '@stores/routing';
	import { ArrowIcon, MinimizeIcon } from '@components/icons';
	import { Hoverable, Collapseable } from '@components/shared';

	import Search from './Search.svelte';
	import PageLink from './PageLink.svelte';
</script>

<div class="w-44 flex flex-col text-xs h-full" transition:fly|global={{ x: -30 }}>
	{#if $siteLayout.activeActivityBarTab === 'Explorer'}
		<div class="p-2">Explorer</div>
		<Hoverable  classNames="h-full">
			{#snippet children({ hovering: hovered })}
						<Collapseable>
					{#snippet header({ collapsed })}
								<div
							
							
							class="py-0.5 px-1 uppercase border-black-lighter border text-black-lighter bg-primary-light dark:bg-black-light flex items-center space-between cursor-pointer"
						>
							<div class="flex gap-3 flex-grow items-center">
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
								<div  class="py-0.5 flex items-center space-between cursor-pointer">
							<div class="w-full flex flex-col">
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
