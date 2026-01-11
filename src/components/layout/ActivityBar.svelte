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
    import UserSettingsModal from '@/components/modals/UserSettingsModal.svelte';


	import { info } from '@stores/info';
	import { siteLayout } from '@stores/site-layout';
	import { modals } from 'svelte-modals';

	type ActivityBarItemType = {
		title: string;
		icon: any;
		url?: string;
        onClick?: () => {};
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
			icon: GearIcon,
			onClick: () => modals.open(UserSettingsModal)
		}
	];
</script>

<div class="w-12 flex flex-col h-full align-top bg-[var(--white-color-sidebar-bg)] dark:bg-[var(--dark-color-sidebar-bg)] text-[var(--white-color-text-muted)] dark:text-[var(--dark-color-text-muted)]">
	<ul class="w-full flex flex-col justify-start flex-grow">
		{#each activityBarItems as { title, icon, url }}
			<li
                class="mx-auto p-2 pr-3 cursor-pointer border-l-2 hover:text-[var(--accent-teal)] hover:border-l-[var(--accent-teal)]"
                class:border-l-[var(--accent-teal)]={$siteLayout.activeActivityBarTab === title}
                class:border-l-transparent={$siteLayout.activeActivityBarTab !== title}
				class:text-[var(--accent-teal)]={$siteLayout.activeActivityBarTab === title}
			>
				<div class="flex items-center" {title}>
					{#if url}
						{@const SvelteComponent = icon}
						<a href={url} target="_blank" {title} aria-label={title}>
							<SvelteComponent size={32} />
						</a>
					{:else}
						{@const SvelteComponent_1 = icon}
						<button onclick={() => ($siteLayout.activeActivityBarTab = title)} aria-label={title}>
							<SvelteComponent_1 size={32} />
						</button>
					{/if}
				</div>
			</li>
		{/each}
	</ul>

	<ul class="w-full flex flex-col justify-center self-end">
		{#each activityBarBottomItems as { title, icon, onClick }}
			{@const SvelteComponent_2 = icon}
			<li class="mx-auto p-2 cursor-pointer hover:text-[var(--accent-teal)] border-l-[var(--accent-teal)] hover:border-l-2">
				<button class="flex items-center" {title} onclick={() => onClick && onClick()} aria-label={title}>
					<SvelteComponent_2 />
				</button>
			</li>
		{/each}
	</ul>
</div>
