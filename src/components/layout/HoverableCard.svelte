<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Hoverable } from '@components/shared';

    type OnClickEventType = () => void

	interface Props {
		imageUrl: string;
		onClickEvent?: OnClickEventType | null;
		children?: import('svelte').Snippet;
	}

	let { imageUrl, onClickEvent = null, children }: Props = $props();

	const children_render = $derived(children);
</script>

<Hoverable >
	{#snippet children({ hovering: hovered })}
		<button
			type="button"
			class={`opacity-${
				hovered ? 100 : 40
			} cursor-pointer flex flex-col relative overflow-hidden h-full p-2 border-none bg-transparent`}
			onclick={onClickEvent}
			aria-label="View image details"
		>
			<img src={imageUrl} alt="text-project" class:zoom={hovered} class="h-full" />
			{#if hovered && onClickEvent}
				<div
					class="absolute w-full h-full inset-0 flex flex-col justify-center items-center"
					transition:fade|global
				>
					<div
						class="max-height-60 flex flex-col w-1/4 h-1/4 opacity-80 items-center justify-center p-1 rounded-full bg-primary-light text-black-light text-center"
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

	.max-height-60 {
		max-height: 60%;
		max-width: 60%;
	}

    .text-fit {
        font-size: 0.7rem;
	}
</style>
