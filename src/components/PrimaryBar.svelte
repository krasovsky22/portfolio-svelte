<script>
	import Hoverable from './shared/Hoverable.svelte';
</script>

<div class="w-44 flex flex-col text-xs h-full">
	<div class="p-2 ">Explorer</div>
	<Hoverable let:hovering={hovered} classNames="h-full">
		<div
			class="py-0.5 px-1 uppercase border-gray-500 border text-gray-400 bg-gray-700 flex items-center space-between cursor-pointer"
		>
			<div class="flex gap-3 flex-grow items-center">
				<i class="fa-solid fa-angle-down" />Porftolio-svelte
			</div>
			{#if hovered}
				<div class="cursor-pointer hover:bg-gray-500 px-1">
					<i class="fa-solid fa-down-left-and-up-right-to-center fa-sm mx-auto" />
				</div>
			{/if}
		</div>

        <div
			class="py-0.5 pl-4 flex items-center space-between cursor-pointer hover:bg-slate-500"
		>
			<div class="flex gap-3 flex-grow items-center">
				<i class="fa-solid fa-angle-down" />src
			</div>
		</div>
	</Hoverable>
</div>
