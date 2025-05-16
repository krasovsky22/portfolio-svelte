<script module lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { Modals } from 'svelte-modals';
	import { siteLayout } from '@stores/site-layout';
	import Footer from '@/components/layout/Footer.svelte';
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';
	import RightBar from '@/components/layout/RightBar.svelte';
	import MediaQuery from '@/components/MediaQuery.svelte';

	$: onMount(() => {
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
	{#snippet backdrop({ close })}
		<button
			slot="backdrop"
			type="button"
			class="bg-opacity-75 fixed inset-0 z-10 w-full bg-gray-500 transition-opacity"
			aria-label="Close modal"
			onclick={() => close()}
		></button>
	{/snippet}
</Modals>

<MediaQuery query="(max-width: 1279px)" let:matches>
	{#if matches}
		<div class="mt-4 flex w-full flex-col items-center justify-center text-center">
			<div class="my-auto"><h1>No Mobile Version Available Yet</h1></div>
		</div>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 1280px)" let:matches>
	{#if matches}
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
	{/if}
</MediaQuery>
