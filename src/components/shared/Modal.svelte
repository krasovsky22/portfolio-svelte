<script lang="ts">
	import { XIcon } from '@/components/icons';

	interface Props {
		isOpen: boolean;
		title?: string;
        close: () => void;
		children?: import('svelte').Snippet;
	}

	let { isOpen, close, title = '', children }: Props = $props();
</script>

{#if isOpen}
	<div
		role="dialog"
		class="fixed inset-0 flex items-center justify-center z-10 overflow-y-auto pointer-events-none "
		aria-modal="true"
	>
		<!-- Background overlay -->
		<div class="fixed inset-0 bg-gray-900/60 dark:bg-black/80 pointer-events-auto" onclick={close}></div>
		
		<div
			class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all pointer-events-auto "
		>
			<div class=" flex flex-col justify-center items-center border border-gray-200 dark:border-gray-600">
				<div class="flex gap-1 border-b border-gray-200 dark:border-gray-600 w-full">
					<div class="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-center flex-grow py-2 px-4">{title}</div>
					<button
						type="button"
						class="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-800 dark:hover:text-gray-200 absolute top-2 right-2 p-1 rounded"
						onclick={close}
						aria-label="Close modal"
					>
						<XIcon />
					</button>
				</div>

				<div class="p-5 w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 modal">
					{@render children?.()}
				</div>
			</div>
		</div>
	</div>
{/if}
