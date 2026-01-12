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
		<div class="fixed inset-0 bg-[var(--background-color-overlay)] pointer-events-auto" onclick={close}></div>
		
		<div
			class="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all pointer-events-auto "
		>
			<div class=" flex flex-col justify-center items-center border border-[var(--white-color-border)] dark:border-[var(--dark-color-border)]">
				<div class="flex gap-1 border-b border-[var(--white-color-border)] dark:border-[var(--dark-color-border)] w-full">
					<div class="bg-[var(--background-color-modal-header)] text-[var(--text-color)] text-center flex-grow py-2 px-4">{title}</div>
					<button
						type="button"
						class="cursor-pointer hover:bg-[var(--background-color-hover)] text-[var(--text-color)] absolute top-2 right-2 p-1 rounded"
						onclick={close}
						aria-label="Close modal"
					>
						<XIcon />
					</button>
				</div>

				<div class="p-5 w-full bg-[var(--background-color-modal-content)] text-[var(--text-color)] modal">
					{@render children?.()}
				</div>
			</div>
		</div>
	</div>
{/if}
