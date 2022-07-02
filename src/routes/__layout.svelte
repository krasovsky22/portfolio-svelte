<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import '../app.css';
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';
	import PageContainer from '@/components/layout/page-container/PageContainer.svelte';
	import Footer from '@/components/layout/Footer.svelte';
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
			<div class="flex-grow flex">
				<PageContainer>
					<slot />
				</PageContainer>
			</div>
			<Footer />
		</div>
	</div>
</main>
