<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ArrowIcon } from '@components/icons';


	interface Props {
		title?: string;
		headClass?: string;
		depth?: number;
		collapsed?: boolean;
		header?: import('svelte').Snippet<[any]>;
		body?: import('svelte').Snippet<[any]>;
	}

	let {
		title = 'Missing Title',
		headClass = '',
		depth = 0,
		collapsed = $bindable(false),
		header,
		body
	}: Props = $props();

	function toggle() {
		collapsed = !collapsed;
	}
</script>

<div class="w-full">
	<button onclick={toggle} >
		{#if header}{@render header({ collapsed, })}{:else}
			<div class={`flex gap-2 items-center w-full pl-${depth} ${headClass}`}>
				<ArrowIcon size={18} rotate={collapsed ? 0 : 1} />
				{title}
			</div>
		{/if}
	</button>
	{#if !collapsed}
		<div transition:slide|global>
			{#if body}{@render body({ collapsed, })}{:else}
				<div class={`pl-${depth}`}>Missing Body</div>
			{/if}
		</div>
	{/if}
</div>
