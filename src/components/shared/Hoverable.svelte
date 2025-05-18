<script lang="ts">
	let hovering: boolean = $state(false);
	interface Props {
		classNames?: string;
		children?: import('svelte').Snippet<[any]>;
	}

	let { classNames = "", children }: Props = $props();

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div onmouseenter={enter} onmouseleave={leave} class={classNames} role="button" tabindex="0">
	{@render children?.({ hovering, })}
</div>
