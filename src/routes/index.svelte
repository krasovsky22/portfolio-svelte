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

	let visible = false;
	let animationFinished = false;
	let interval: NodeJS.Timer;

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
	<div class="ml-[15%] flex flex-col gap-6 h-1/3">
		<div class="text-6xl text-white"><h1>Vlad Krasovsky</h1></div>
		<div class="text-2xl flex gap-1 items-center text-primary-light">
			{#if visible}
				<h2 in:typeWriterTransition={{ speed: 1 }} on:introend={createFlashing}>
					Full Stack Software Developer
				</h2>
			{/if}
			{#if animationFinished}
				<p transition:fade={{ duration: DURATION / 2 }} class="text-orange-200">|</p>
			{/if}
		</div>

		<div class="flex flex-col gap-10">
			<div class="flex h-full  h-[15vh]">
				<AwsSolutionArchitectBadge />
				<AzureSolutionArchitectBadge />
				<GoogleSolutionArchitectBadge />
				<MetaFrontEndDeveloperBadge />
			</div>
			<div class="flex h-full  h-[10vh]">
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
