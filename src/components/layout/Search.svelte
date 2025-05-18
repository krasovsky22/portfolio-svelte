<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	let inputValue = $state('');
	let displayMessage = $state(false);

	const handleKeyUp = (event: any) => {
		inputValue = event.target.value;

		if (event.code == 'Enter') {
			event.preventDefault();

			displayMessage = true;
			return false;
		}
	};
</script>

<div class="flex flex-col gap-3 px-2 py-3">
	<div class="">SEARCH</div>

	<input
		type="text"
		placeholder="Search"
		class="bg-black-light flex-grow py-1"
		onkeyup={preventDefault(handleKeyUp)}
	/>

	{#if displayMessage && inputValue}
		<div class="text-[8px]">
			No results found. Review your setting for configured exclusions and check your gitignore
			files.
		</div>
	{/if}
</div>
