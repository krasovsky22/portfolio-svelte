<script lang="ts">
	import '../app.css';
	import { Modals } from 'svelte-modals';
	import { siteLayout } from '@stores/site-layout';
	import Footer from '@/components/layout/Footer.svelte';
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';
	import RightBar from '@/components/layout/RightBar.svelte';
	import MediaQuery from '@/components/MediaQuery.svelte';
	import { activePage, Routes, POSSIBLE_ROUTES } from '@/stores/routing';
</script>

<Modals>
	{#snippet backdrop({ close })}
		<button
			type="button"
			class="fixed inset-0 z-10 w-full bg-[var(--background-color-overlay)] transition-opacity"
			aria-label="Close modal"
			onclick={() => close()}
		></button>
	{/snippet}
</Modals>

<svelte:head>
	<title>{ Routes[$activePage?.url ?? POSSIBLE_ROUTES.INDEX]?.title}</title>
	<meta name="description" content={Routes[$activePage?.url ?? POSSIBLE_ROUTES.INDEX]?.description} />
</svelte:head>

<MediaQuery>
	{#snippet content({ isIpad, isMobile, isFullScreen })}
		<main class="flex flex-grow flex-col">
			<TitleBar />
			<div class:flex-col={isMobile || isIpad} class="flex min-h-full w-full flex-grow">
				{#if isFullScreen}
					<div class="border-r border-[var(--white-color-border)] dark:border-[var(--dark-color-border)]">
						<ActivityBar />
					</div>

					<div class="border-r border-[var(--white-color-border)] dark:border-[var(--dark-color-border)]">
						{#if $siteLayout.showPrimaryBar}
							<PrimaryBar />
						{/if}
					</div>
				{/if}

				<div class="bg-[var(--background-color-panel)] flex flex-grow flex-col">
					<div class="flex flex-grow">
						<PageContainer>
							<slot />
						</PageContainer>
					</div>
					<Footer />
				</div>

				<div class="border-r border-[var(--white-color-border)] dark:border-[var(--dark-color-border)]">
					{#if $siteLayout.showRightBar}
						<RightBar />
					{/if}
				</div>
			</div>
		</main>
	{/snippet}
</MediaQuery>
