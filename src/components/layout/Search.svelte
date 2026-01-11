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

<div class="flex flex-col gap-3 px-2 py-3 text-[var(--white-color-text)] dark:text-[var(--dark-color-text)]">
	<div class="text-[var(--white-color-text-muted)] dark:text-[var(--dark-color-text-muted)]">SEARCH</div>

	<input
		type="text"
		placeholder="Search"
		class="bg-[var(--white-color-panel-bg)] dark:bg-[var(--dark-color-panel-bg)] border border-[var(--white-color-border)] dark:border-[var(--dark-color-border)] flex-grow py-1 px-2 text-[var(--white-color-text)] dark:text-[var(--dark-color-text)] placeholder:text-[var(--white-color-text-muted)] dark:placeholder:text-[var(--dark-color-text-muted)]"
		onkeyup={preventDefault(handleKeyUp)}
	/>

	{#if displayMessage && inputValue}
		<div class="text-[8px] text-[var(--white-color-text-muted)] dark:text-[var(--dark-color-text-muted)]">
			No results found. Review your setting for configured exclusions and check your gitignore
			files.
		</div>
	{/if}
</div>
