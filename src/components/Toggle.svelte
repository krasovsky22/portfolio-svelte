<script lang="ts">
	export let onClick: () => void;
	export let checked: boolean = false;
</script>

<label class="relative inline-flex items-center cursor-pointer gap-1 justify-between w-full">
	<input type="checkbox" value="" class="sr-only peer" bind:checked on:click={onClick} />
	<div
		class="w-11 h-6 bg-gray-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
	/>
	<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
		<slot />
	</span>
</label>
