<script lang="ts">
	import Dot from './Dot.svelte';
	import { Hoverable } from './shared';

	interface Props {
		lineNumber?: number;
		children?: import('svelte').Snippet;
	}

	let { lineNumber = 1, children }: Props = $props();

	const children_render = $derived(children);
</script>

<Hoverable classNames="flex gap-3 items-center">
	{#snippet children({ hovering })}
		<div class="h-full w-1 px-1">
			{#if hovering}
				<Dot class="mb-0.5 bg-red-900" size={6} />
			{/if}
		</div>
		<div class="w-10 px-2 text-sm">{lineNumber}</div>
		<div class="flex-grow">
			{#if children_render}{@render children_render()}
			{:else}
				<p>&nbsp;</p>
			{/if}
		</div>
	{/snippet}
</Hoverable>
