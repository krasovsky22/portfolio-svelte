<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';
	import { Modals } from 'svelte-modals';
	import { siteLayout } from '@stores/site-layout';
	import Footer from '@/components/layout/Footer.svelte';
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';
	import RightBar from '@/components/layout/RightBar.svelte';
</script>

<Modals>
	<div slot="backdrop" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
</Modals>

<main class="flex flex-grow flex-col">
	<TitleBar />
	<div class="flex min-h-full flex-grow w-full">
		<div class="border-r  border-x-black">
			<ActivityBar />
		</div>

		<div class="border-r border-x-black">
			{#if $siteLayout.showPrimaryBar}
				<PrimaryBar />
			{/if}
		</div>
		<div class="flex-grow flex flex-col dark:bg-black-light">
			<div class="flex-grow flex">
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
