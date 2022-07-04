<script lang="ts">
	import {
		GearIcon,
		FileIcon,
		GraphIcon,
		GithubIcon,
		SearchIcon,
		AccountIcon,
		DiscordIcon,
		LinkedinIcon
	} from '@components/icons';

	import { info } from '@stores/info';
	import { siteLayout } from '@stores/site-layout';

	type ActivityBarItemType = {
		title: string;
		icon: any;
		url?: string;
		active?: boolean;
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
			url: $info.codeSource.url
		},
		{
			title: 'Github',
			icon: GithubIcon,
			url: $info.github.url
		},
		{
			title: 'LinkedIn',
			icon: LinkedinIcon,
			url: $info.linkedIn.url
		},
		{
			title: 'Discord',
			icon: DiscordIcon,
			url: $info.discord.url
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
			<li
				class="mx-auto p-2 cursor-pointer hover:text-primary border-l-primary hover:border-l-2"
				class:border-l-2={$siteLayout.activeActivityBarTab === title}
				class:text-primary={$siteLayout.activeActivityBarTab === title}
			>
				<div class="flex items-center" {title}>
					{#if url}
						<a href={url} target="_blank" {title}>
							<svelte:component this={icon} size={36} />
						</a>
					{:else}
						<div on:click={() => ($siteLayout.activeActivityBarTab = title)}>
							<svelte:component this={icon} size={36} />
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>

	<ul class="w-full flex flex-col justify-center self-end">
		{#each activityBarBottomItems as { title, icon }}
			<li class="mx-auto p-2 cursor-pointer hover:text-primary border-l-primary hover:border-l-2">
				<div class="flex items-center" {title}>
					<svelte:component this={icon} size={36} />
				</div>
			</li>
		{/each}
	</ul>
</div>
