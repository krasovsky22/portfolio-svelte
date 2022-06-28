<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ArrowIcon } from '@components/icons';

	export let title = 'Missing Title';
	export let headClass = '';
    export let depth = 0;

	export let collapsed: boolean = false;

	function toggle() {
		collapsed = !collapsed;
	}
</script>

<div class="w-full">
	<div on:click={toggle}>
		<slot name="header" {collapsed}>
			<div class={`flex gap-2 items-center w-full pl-${depth} ${headClass}`}>
				<ArrowIcon size={18} rotate={collapsed ? 0 : 1} />
				{title}
			</div>
		</slot>
	</div>
	{#if !collapsed}
		<div transition:slide>
			<slot name="body" {collapsed}>
				<div class={`pl-${depth}`}>Missing Body</div>
			</slot>
		</div>
	{/if}
</div>
