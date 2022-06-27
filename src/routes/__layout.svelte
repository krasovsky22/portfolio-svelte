<script lang="ts">
	import Navbar from '@components/Navbar.svelte';
	import Titlebar from '@components/Titlebar.svelte';

	import '../app.css';
</script>

<svelte:head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <script src="https://kit.fontawesome.com/f1f7a21e4f.js" crossorigin="anonymous"></script>
</svelte:head>

<main>
	<Titlebar />
	<Navbar />
	<slot />
</main>

<footer>footer</footer>
