<script>
	import { FileIcon, SearchIcon, GraphIcon, GithubIcon, LinkedinIcon, AccountIcon, GearIcon } from '@components/icons';
	const activityBarItems = [
		{
			title: 'Explorer',
			icon: FileIcon
		},
		{
			title: 'Search',
			icon: SearchIcon
		},
		{
			title: 'Source Control',
			icon: GraphIcon
		},
		{
			title: 'Github',
			icon: GithubIcon
		},
		{
			title: 'LinkedIn',
			icon: LinkedinIcon
		}
	];

	const activityBarBottomItems = [
		{
			title: 'Accounts',
			icon: AccountIcon
		},
		{
		    title: 'Manage',
		    icon: GearIcon
		},
	];
</script>

<div class="w-12 flex flex-col h-full align-top">
	<ul class="w-full flex flex-col justify-start flex-grow">
		{#each activityBarItems as { title, icon }}
			<li class="mx-auto p-2 cursor-pointer hover:text-blue-500">
				<div class="flex items-center" {title}>
					<svelte:component this={icon} size={36} />
				</div>
			</li>
		{/each}
	</ul>

	<ul class="w-full flex flex-col justify-center self-end">
		{#each activityBarBottomItems as { title, icon }}
			<li class="mx-auto p-2 cursor-pointer hover:text-blue-500">
				<div class="flex items-center" {title}>
					<svelte:component this={icon} size={36} />
				</div>
			</li>
		{/each}
	</ul>
</div>
