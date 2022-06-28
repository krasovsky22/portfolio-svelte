<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Line from '@components/Line.svelte';
</script>

<svelte:head>
	<title>Vlad Krasovsky Portfolio</title>
	<meta name="description" content="Vlad Krasovsky Portfolio" />
</svelte:head>

<section>
	<Line lineNumber={1}><p>Hello. My name is <em>Vlad Krasovsky</em>.</p></Line>
	<Line lineNumber={2}><p>I am Senior Full Stack developer.</p></Line>
	<Line lineNumber={3}/>
	<Line lineNumber={4}/>
	<Line lineNumber={5}/>
</section>
