<script>
	import { SidebarIcon, BottombarIcon, RightbarIcon } from '@components/icons';

	const layoutNavigationActions = [
		{
			title: 'Toggle Primary Bar',
			icon: SidebarIcon
		},
		{
			title: 'Toggle Panel',
			icon: BottombarIcon
		},
		{
			title: 'Toggle Secondary Side Bar',
			icon: RightbarIcon
		}
	];
</script>

<div class="w-full h-8 flex text-center border rounded-b-md border-black">
	<div class="flex gap-1 p-1">
		<span class="dot bg-red-500" />
		<span class="dot bg-yellow-500" />
		<span class="dot bg-green-500" />
	</div>
	<div class="flex flex-grow items-center">
		<div class="flex-grow text-gray-400">
			<h4>Title Here</h4>
		</div>
		<ul class="flex h-full items-center">
			{#each layoutNavigationActions as { title, icon }}
				<li class="cursor-pointer hover:text-blue-500 h-full flex py-1">
					<div class="flex items-center" {title}>
						<svelte:component this={icon} />
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.dot {
		cursor: pointer;
		height: 14px;
		width: 14px;
		border-radius: 50%;
		display: inline-block;
	}
</style>
