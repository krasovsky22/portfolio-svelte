<script>
	import Dot from '@components/Dot.svelte';

	import { siteLayout } from '@/stores/site-layout';
	import { activePage } from '@stores/routing';
	import { SidebarIcon, BottombarIcon, RightbarIcon } from '@components/icons';

	const layoutNavigationActions = [
		{
			title: 'Toggle Primary Bar',
			icon: SidebarIcon,
			action: () => ($siteLayout.showPrimaryBar = !$siteLayout.showPrimaryBar)
		},
		{
			title: 'Toggle Panel',
			icon: BottombarIcon,
			action: () => {}
		},
		{
			title: 'Toggle Secondary Side Bar',
			icon: RightbarIcon,
			action: () => {}
		}
	];
</script>

<div class="w-full h-8 flex text-center items-center border rounded-b-md border-black">
	<div class="flex gap-1 p-1 items-center">
		<Dot class="bg-red-500" />
		<Dot class="bg-yellow-500" />
		<Dot class="bg-green-500" />
	</div>
	<div class="flex flex-grow items-center">
		<div class="flex-grow text-gray-300">
			<h4>{$activePage?.display} - portfolio-svelte</h4>
		</div>
		<ul class="flex h-full items-center">
			{#each layoutNavigationActions as { title, icon, action }}
				<li class="cursor-pointer hover:text-blue-500 h-full flex py-1">
					<div class="flex items-center" {title} on:click={action}>
						<svelte:component this={icon} />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
