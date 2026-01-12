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

<div class="flex flex-col gap-3 px-2 py-3 text-[var(--text-color)]">
	<div class="text-[var(--text-color-muted)]">SEARCH</div>

	<input
		type="text"
		placeholder="Search"
		class="bg-[var(--background-color-panel)] border border-[var(--white-color-border)] dark:border-[var(--dark-color-border)] flex-grow py-1 px-2 text-[var(--text-color)] placeholder:text-[var(--text-color-muted)]"
		onkeyup={preventDefault(handleKeyUp)}
	/>

	{#if displayMessage && inputValue}
		<div class="text-[8px] text-[var(--text-color-muted)]">
			No results found. Review your setting for configured exclusions and check your gitignore
			files.
		</div>
	{/if}
</div>
