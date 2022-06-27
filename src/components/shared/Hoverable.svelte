<script lang="ts">
	let hovering: boolean = false;
    export let classNames: string = "";

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave} class={classNames}>
	<slot {hovering} />
</div>
