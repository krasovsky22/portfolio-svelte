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
		<div class="flex-grow dark:bg-gray-800 p-3">
			<slot />
		</div>
	</div>
</main>

<footer class="text-center bg-gray-700">
	Built using <a
		href="https://svelte.dev/"
		target="_blank"
		class="text-blue-500 hover:text-blue-300">Svelte Kit</a
	>
</footer>
