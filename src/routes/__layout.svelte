<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';

	import '../app.css';
</script>

<main class="flex flex-grow flex-col">
	<TitleBar />
	<div class="flex min-h-full flex-grow w-full">
		<div class="border-r  border-x-black">
			<ActivityBar />
		</div>
		<div class="border-r border-x-black">
			<PrimaryBar />
		</div>
		<div class="flex-grow flex flex-col dark:bg-black-light">
			<div class="flex-grow">
				<PageContainer>
					<slot />
				</PageContainer>
			</div>
			<div class="text-center pr-56">
				Built using <a
					href="https://svelte.dev/"
					target="_blank"
					class="text-primary hover:text-primary-light">Svelte Kit</a
				>
			</div>
		</div>
	</div>
</main>
