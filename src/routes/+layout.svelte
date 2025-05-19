<script lang="ts">
	import '../app.css';
	import { Modals } from 'svelte-modals';
	import { siteLayout } from '@stores/site-layout';
	import Footer from '@/components/layout/Footer.svelte';
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';
	import RightBar from '@/components/layout/RightBar.svelte';
	import MediaQuery from '@/components/MediaQuery.svelte';
</script>

<Modals>
	{#snippet backdrop({ close })}
		<button
			type="button"
			class="fixed inset-0 z-10 w-full bg-gray-500 opacity-75 transition-opacity"
			aria-label="Close modal"
			onclick={() => close()}
		></button>
	{/snippet}
</Modals>

<MediaQuery query="(min-width: 1280px)">
	{#snippet content()}
		<main class="flex flex-grow flex-col">
			<TitleBar />
			<div class="flex min-h-full w-full flex-grow">
				<div class="border-r border-x-black">
					<ActivityBar />
				</div>

				<div class="border-r border-x-black">
					{#if $siteLayout.showPrimaryBar}
						<PrimaryBar />
					{/if}
				</div>
				<div class="dark:bg-black-light flex flex-grow flex-col">
					<div class="flex flex-grow">
						<PageContainer>
							<slot />
						</PageContainer>
					</div>
					<Footer />
				</div>
				<div class="border-r border-x-black">
					{#if $siteLayout.showRightBar}
						<RightBar />
					{/if}
				</div>
			</div>
		</main>
	{/snippet}
</MediaQuery>
