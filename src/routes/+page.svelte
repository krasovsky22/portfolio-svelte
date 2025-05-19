<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { typeWriterTransition } from '@utils/transitions';
	import {
		GoBadge,
		PHPBadge,
		PythonBadge,
		NodeJsBadge,
		AwsSolutionArchitectBadge,
		MetaFrontEndDeveloperBadge,
		AzureSolutionArchitectBadge,
		GoogleSolutionArchitectBadge,
	} from '@components/badges';

	let visible = $state(false);
	let animationFinished = $state(false);
	let interval: ReturnType<typeof setInterval>;

	const DURATION = 500;

	onMount(() => {
		visible = true;
	});

	const createFlashing = () => {
		interval = setInterval(() => {
			animationFinished = !animationFinished;
		}, DURATION);
	};

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<svelte:head>
	<title>Vlad Krasovsky Portfolio</title>
	<meta name="description" content="Vlad Krasovsky Portfolio" />
</svelte:head>

<section class="relative section-image flex items-center h-full">
	<div class="ml-[15%] flex flex-col gap-6 w-[40%]">
		<div class="text-6xl text-white"><h1>Vlad Krasovsky</h1></div>
		<div class="text-2xl flex gap-1 items-center text-primary-light">
			{#if visible}
				<h2 in:typeWriterTransition|global={{ speed: 1 }} onintroend={createFlashing}>
					Full Stack Software Developer
				</h2>
			{/if}
			{#if animationFinished}
				<p transition:fade|global={{ duration: DURATION / 2 }} class="text-orange-200">|</p>
			{/if}
		</div>

		<div class="flex flex-col gap-6 mt-4">
			<div class="grid grid-cols-4 gap-4 items-center justify-items-center">
				<AwsSolutionArchitectBadge />
				<AzureSolutionArchitectBadge />
				<GoogleSolutionArchitectBadge />
				<MetaFrontEndDeveloperBadge />
			</div>
			<div class="grid grid-cols-4 gap-4 items-center justify-items-center">
				<NodeJsBadge />
				<PHPBadge />
				<GoBadge />
				<PythonBadge />
			</div>
		</div>
	</div>
</section>

<style>
	.section-image {
		background-image: url(/main-background.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0 50%;
	}
</style>
