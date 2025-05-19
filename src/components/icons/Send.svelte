<script lang="ts">
	import Icon from './Icon.svelte';

	const { ...rest } = $props();
</script>

<Icon icon="mdi:send-variant-outline" {...rest} />

