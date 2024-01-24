<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { Modals, closeModal } from 'svelte-modals';
	import { siteLayout } from '@stores/site-layout';
	import Footer from '@/components/layout/Footer.svelte';
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';
	import RightBar from '@/components/layout/RightBar.svelte';
	import MediaQuery from '@/components/MediaQuery.svelte';

	onMount(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === 'light' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)')?.matches)
		) {
			$siteLayout.darkMode = false;
		} else {
			$siteLayout.darkMode = true;
		}
	});
</script>

<Modals>
	<div
		slot="backdrop"
		class="z-10 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
		on:click={closeModal}
	/>
</Modals>

<MediaQuery query="(max-width: 1279px)" let:matches>
	{#if matches}
		<div class="flex flex-col mt-4 justify-center items-center w-full text-center">
			<div class="my-auto"><h1>No Mobile Version Available Yet</h1></div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 1280px)" let:matches>
	{#if matches}
		<main class="flex flex-grow flex-col">
			<TitleBar />
			<div class="flex min-h-full flex-grow w-full">
				<div class="border-r border-x-black">
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
	{/if}
</MediaQuery>
