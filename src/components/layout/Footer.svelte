<script>
	import { DoubleCheckIcon, SvelteIcon, BellIcon } from '@/components/icons';
</script>

<div class="flex flex-col md:flex-row justify-end pr-5 items-center gap-2 md:gap-3 py-1 bg-[var(--background-color-sidebar)] text-[var(--text-color)] border-t border-[var(--white-color-border)] dark:border-[var(--dark-color-border)]">
	<div class="flex items-center hover:bg-[var(--background-color-hover)] px-1 rounded">
		<SvelteIcon size={18} class="mx-1" />
		Powered by
		<a href="https://svelte.dev/" target="_blank" class="ml-1 text-[var(--accent-teal)] hover:text-[var(--accent-warm)]"
			>Svelte Kit</a
		>
	</div>
	<div class="flex gap-1 items-center hover:bg-[var(--background-color-hover)] px-1 rounded">
		<DoubleCheckIcon size={18} /> Prettier
	</div>
	<div class="flex items-center hover:bg-[var(--background-color-hover)] px-1 rounded">
		<BellIcon size={18} />
	</div>
</div>
