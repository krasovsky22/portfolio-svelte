<script lang="ts">
	interface Props {
		onClick: () => void;
		checked?: boolean;
		children?: import('svelte').Snippet;
	}

	let { onClick, checked = $bindable(false), children }: Props = $props();
</script>

<label class="relative inline-flex items-center cursor-pointer gap-1 justify-between w-full">
	<input type="checkbox" value="" class="sr-only peer" bind:checked onclick={onClick} />
	<div
		class="w-11 h-6 bg-[var(--background-color-hover)] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[var(--background-color-panel)] after:border-[var(--white-color-border)] dark:after:border-[var(--dark-color-border)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
	></div>
	<span class="ms-3 text-sm font-medium text-[var(--text-color)]">
		{@render children?.()}
	</span>
</label>
