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
		class="fixed inset-0 flex items-center justify-center z-10 overflow-y-auto pointer-events-none"
		aria-modal="true"
	>
		<div
			class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all pointer-events-auto"
		>
			<div class="bg-gray-100 dark:bg-gray-700 flex flex-col justify-center items-center ">
				<div class="flex gap-1 border-b w-full">
					<div class="bg-gray-200 dark:bg-gray-700 text-center flex-grow">{title}</div>
					<button
						type="button"
						class="cursor-pointer hover:bg-black-lighter hover:text-gray-200 absolute top-0 right-0"
						onclick={close}
						aria-label="Close modal"
					>
						<XIcon />
					</button>
				</div>

				<div class="p-5 w-full">
					{@render children?.()}
				</div>
			</div>
		</div>
	</div>
{/if}
