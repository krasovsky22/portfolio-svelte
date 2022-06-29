<script lang="ts">
	import { page } from '$app/stores';
	import { POSSIBLE_ROUTES } from '@/constants';
	import { ArrowIcon, MinimizeIcon } from '@components/icons';
	import { Hoverable, Collapseable } from '@components/shared';

	type DOCUMENT_TYPE = {
		display: string;
		url: POSSIBLE_ROUTES;
	};
	const documents: DOCUMENT_TYPE[] = [
		{
			display: 'Index.html',
			url: POSSIBLE_ROUTES.INDEX
		},
		{
			display: 'Profile.html',
			url: POSSIBLE_ROUTES.PROFILE
		}
	];
</script>

<div class="w-44 flex flex-col text-xs h-full">
	<div class="p-2 ">Explorer</div>
	<Hoverable let:hovering={hovered} classNames="h-full">
		<Collapseable>
			<div
				slot="header"
				let:collapsed
				class="py-0.5 px-1 uppercase border-black-lighter border text-black-lighter bg-black-light flex items-center space-between cursor-pointer"
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
			<div slot="body" class="py-0.5 flex items-center space-between cursor-pointer">
				<div class="w-full flex flex-col">
					{#each documents as { display, url }}
						<a href={url} class="p-1 hover:bg-slate-500" class:bg-zinc-700={url.replace('/', '') === $page.routeId}
							><div class="pl-4 w-full">{display}</div>
						</a>
					{/each}
				</div>
			</div>
		</Collapseable>
	</Hoverable>
</div>
