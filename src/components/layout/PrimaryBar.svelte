<script>
	import { ArrowIcon } from '@components/icons';
	import { Hoverable, Collapseable } from '@components/shared';
</script>

<div class="w-44 flex flex-col text-xs h-full">
	<div class="p-2 ">Explorer</div>
	<Hoverable let:hovering={hovered} classNames="h-full">
		<Collapseable>
			<div
				slot="header"
				let:collapsed
				class="py-0.5 px-1 uppercase border-gray-500 border text-gray-400 bg-gray-700 flex items-center space-between cursor-pointer"
			>
				<div class="flex gap-3 flex-grow items-center">
					<ArrowIcon size={18} rotate={collapsed ? 0 : 1} />

					Porftolio-svelte
				</div>
				{#if hovered}
					<div class="cursor-pointer hover:bg-gray-500 px-1">
						<i class="fa-solid fa-down-left-and-up-right-to-center fa-sm mx-auto" />
					</div>
				{/if}
			</div>
			<div
				slot="body"
				class="py-0.5 flex items-center space-between cursor-pointer"
			>
				<Collapseable title="src" depth={2} headClass="hover:bg-slate-500" collapsed/>
			</div>
		</Collapseable>
	</Hoverable>
</div>
