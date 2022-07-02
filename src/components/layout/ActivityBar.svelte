<script lang="ts">
	import {
		FileIcon,
		SearchIcon,
		GraphIcon,
		GithubIcon,
		LinkedinIcon,
		AccountIcon,
		GearIcon
	} from '@components/icons';
	import { element } from 'svelte/internal';
	import Svelte from '../icons/Svelte.svelte';

	type ActivityBarItemType = {
		title: string;
		icon: any;
		url?: string;
	};
	const activityBarItems: ActivityBarItemType[] = [
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
			icon: GraphIcon,
			url: 'https://github.com/krasovsky22/portfolio-svelte'
		},
		{
			title: 'Github',
			icon: GithubIcon,
			url: 'https://github.com/krasovsky22'
		},
		{
			title: 'LinkedIn',
			icon: LinkedinIcon,
			url: 'https://www.linkedin.com/in/vlad-krasovski-1ba85542'
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
		}
	];
</script>

<div class="w-12 flex flex-col h-full align-top">
	<ul class="w-full flex flex-col justify-start flex-grow">
		{#each activityBarItems as { title, icon, url }}
			<li class="mx-auto p-2 cursor-pointer hover:text-primary">
				<div class="flex items-center" {title}>
					{#if url}
						<a href={url} target="_blank">
							<svelte:component this={icon} size={36} />
						</a>
					{:else}
						<svelte:component this={icon} size={36} />
					{/if}
				</div>
			</li>
		{/each}
	</ul>

	<ul class="w-full flex flex-col justify-center self-end">
		{#each activityBarBottomItems as { title, icon }}
			<li class="mx-auto p-2 cursor-pointer hover:text-primary">
				<div class="flex items-center" {title}>
					<svelte:component this={icon} size={36} />
				</div>
			</li>
		{/each}
	</ul>
</div>
