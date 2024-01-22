<script lang="ts">
	import { closeModal } from 'svelte-modals';
	import { XIcon } from '@/components/icons';

	export let isOpen: boolean;
	export let title: string = '';
</script>

{#if isOpen}
	<div
		role="dialog"
		class="fixed inset-0 flex items-center justify-center z-10 overflow-y-auto pointer-events-none"
		aria-modal="true"
	>
		<div
			class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all pointer-events-auto"
		>
			<div class="bg-whiteMainBg dark:bg-gray-700 flex flex-col justify-center items-center ">
				<div class="flex gap-1 border-b w-full">
					<div class="text-center flex-grow">{title}</div>
					<div
						class="cursor-pointer hover:bg-black-lighter hover:text-gray-200 absolute top-0 right-0"
						on:click={closeModal}
					>
						<XIcon />
					</div>
				</div>

				<div class="p-5 w-full">
					<slot />
				</div>
			</div>
		</div>
	</div>
{/if}
