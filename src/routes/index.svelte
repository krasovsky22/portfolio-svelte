<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { typeWriterTransition } from '@utils/transitions';

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

<section class="relative flex-grow section-image flex items-center">
	<div class="ml-[15%] flex flex-col gap-6 h-1/3">
		<div class="text-6xl"><h1>Vlad Krasovsky</h1></div>
		{#if visible}
			<div class="text-2xl flex gap-1 items-center">
				<div>
					<h2 transition:typeWriterTransition on:introend={createFlashing}>
						Full Stack Software Developer
					</h2>
				</div>
				{#if animationFinished}
					<p transition:fade={{duration: DURATION}} class="text-orange-200">|</p>
				{/if}
			</div>
		{/if}
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
