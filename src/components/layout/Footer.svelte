<script>
	import { DoubleCheckIcon, SvelteIcon, BellIcon } from '@/components/icons';
</script>

<div class="flex justify-end pr-5 items-center gap-3">
	<div class="flex items-center hover:bg-black-lighter px-1">
		<SvelteIcon size={18} class="mx-1" />
		Powered by
		<a href="https://svelte.dev/" target="_blank" class="ml-1 text-primary hover:text-primary-light"
			>Svelte Kit</a
		>
	</div>
	<div class="flex gap-1 items-center hover:bg-black-lighter px-1">
		<DoubleCheckIcon size={18} /> Prettier
	</div>
	<div class="flex items-center hover:bg-black-lighter px-1">
		<BellIcon size={18} />
	</div>
</div>
