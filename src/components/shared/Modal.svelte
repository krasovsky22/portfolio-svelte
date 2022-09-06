<script lang="ts">
	import { closeModal } from 'svelte-modals';
	import { XIcon } from '@/components/icons';

	export let isOpen: boolean;
</script>

{#if isOpen}
	<div
		role="dialog"
		class="fixed inset-0 flex items-center justify-center z-10 overflow-y-auto"
		aria-modal="true"
	>
		<div
			class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all"
		>
			<div class="bg-gray-700 flex flex-col justify-center items-center">
				<div
					class="cursor-pointer hover:bg-black-lighter hover:text-gray-200 absolute top-0 right-0"
					on:click={closeModal}
				>
					<XIcon />
				</div>
				<slot />
			</div>
		</div>
	</div>
{/if}
