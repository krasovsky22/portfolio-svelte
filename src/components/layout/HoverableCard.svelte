<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Hoverable } from '@components/shared';

	type OnClickEventType = () => void;

	interface Props {
		imageUrl: string;
		onClickEvent?: OnClickEventType | null;
		children?: import('svelte').Snippet;
	}

	let { imageUrl, onClickEvent = null, children }: Props = $props();

	const children_render = $derived(children);
</script>

<Hoverable>
	{#snippet children({ hovering: hovered })}
		<button
			type="button"
			class={`opacity-${
				hovered ? 100 : 40
			} relative flex h-full w-full cursor-pointer flex-col overflow-hidden border-none bg-transparent p-2`}
			onclick={onClickEvent}
			aria-label="View image details"
		>
			<img
				src={imageUrl}
				alt="text-project"
				class:zoom={hovered}
				class="h-full w-full object-contain"
			/>
			{#if hovered && onClickEvent}
				<div
					class="absolute inset-0 flex h-full w-full flex-col items-center justify-center"
					transition:fade|global
				>
					<div
						class="bg-primary-light text-black-light flex max-w-[80%] flex-col items-center justify-center rounded-lg p-2 text-center opacity-80"
					>
						<p class="text-fit">
							{#if children_render}{@render children_render()}{:else}View{/if}
						</p>
					</div>
				</div>
			{/if}
		</button>
	{/snippet}
</Hoverable>

<style>
	.zoom {
		transform: scale(1.2);
		transition-duration: 500ms;
	}

	.text-fit {
		font-size: 0.9rem;
		font-weight: 500;
	}
</style>
