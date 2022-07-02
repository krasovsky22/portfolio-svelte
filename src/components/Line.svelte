<script lang="ts">
	import Dot from './Dot.svelte';
	import { Hoverable } from './shared';

	export let lineNumber: number = 1;
</script>

<Hoverable classNames="flex gap-3 items-center" let:hovering>
	<div class="w-1 px-1 h-full">
		{#if hovering}
			<Dot class="bg-red-900 mb-0.5" size={6} />
		{/if}
	</div>
	<div class="w-10 px-2 text-sm">{lineNumber}</div>
	<div class="flex-grow">
		<slot>
			<p>&nbsp;</p>
		</slot>
	</div>
</Hoverable>
