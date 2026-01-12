<script>
	import Dot from '@components/Dot.svelte';

	import { siteLayout } from '@/stores/site-layout';
	import { activePage } from '@stores/routing';
	import { SidebarIcon, BottombarIcon, RightbarIcon } from '@components/icons';

	let layoutNavigationActions = $derived([
		{
			title: 'Toggle Primary Bar',
			icon: SidebarIcon,
			active: $siteLayout.showPrimaryBar,
			action: () => ($siteLayout.showPrimaryBar = !$siteLayout.showPrimaryBar)
		},
		{
			title: 'Toggle Panel',
			icon: BottombarIcon,
			active: $siteLayout.showConsoleBar,
			action: () => {
				$siteLayout.showConsoleBar = !$siteLayout.showConsoleBar;
			}
		},
		{
			title: 'Toggle Secondary Side Bar',
			icon: RightbarIcon,
			active: $siteLayout.showRightBar,
			action: () => {
				$siteLayout.showRightBar = !$siteLayout.showRightBar;
			}
		}
	]);
</script>

<div class="flex h-8 w-full items-center rounded-b-md border border-[var(--white-color-border)] dark:border-[var(--dark-color-border)] text-center bg-[var(--background-color-sidebar)]">
	<div class="flex items-center gap-1 p-1">
		<Dot class="bg-[var(--accent-coral)]" />
		<Dot class="bg-[var(--accent-warm)]" />
		<Dot class="bg-[var(--accent-teal)]" />
	</div>
	<div class="flex flex-grow items-center">
		<div class="flex-grow text-[var(--text-color)]">
			<h4>{$activePage?.display} - portfolio-svelte</h4>
		</div>

		{#if $siteLayout.isFullScreen}
			<ul class="flex h-full items-center text-[var(--text-color-muted)]">
				{#each layoutNavigationActions as { title, icon, action, active }}
					{@const SvelteComponent = icon}
					<li
						class="flex h-full cursor-pointer py-1 hover:text-[var(--accent-teal)]"
						class:text-[var(--accent-teal)]={active}
					>
						<button class="flex items-center" {title} onclick={action} aria-label={title}>
							<SvelteComponent />
						</button>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
