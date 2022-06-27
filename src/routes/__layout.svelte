<script lang="ts">
	import ActivityBar from '@components/ActivityBar.svelte';
	import PrimaryBar from '@components/PrimaryBar.svelte';
	import Titlebar from '@components/Titlebar.svelte';

	import '../app.css';
</script>

<svelte:head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<script src="https://kit.fontawesome.com/f1f7a21e4f.js" crossorigin="anonymous"></script>
</svelte:head>

<main class="flex flex-grow flex-col">
	<Titlebar />
	<div class="flex min-h-full flex-grow w-full">
		<div class="border-r  border-x-black">
			<ActivityBar />
		</div>
		<div class="border-r border-x-black">
			<PrimaryBar />
		</div>
		<div class="flex-grow dark:bg-gray-800">
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
