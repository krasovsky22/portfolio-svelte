<script lang="ts">
	export let size: number = 14;
</script>

<div
	{...$$restProps}
	class={`dot ${$$props.class}`}
	style:height={`${size}px`}
	style:width={`${size}px`}
/>

<style>
	:global(.dot) {
		cursor: pointer;
		border-radius: 50%;
		display: inline-block;
	}
</style>
