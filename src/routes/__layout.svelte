<script lang="ts">
	import { ActivityBar, PrimaryBar, TitleBar } from '@components/layout';

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
		<div class="flex-grow dark:bg-black-light p-3">
			<slot />
		</div>
	</div>
</main>

<footer class="text-center bg-black-light">
	Built using <a
		href="https://svelte.dev/"
		target="_blank"
		class="text-primary hover:text-primary-light">Svelte Kit</a
	>
</footer>
