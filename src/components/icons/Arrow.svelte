<script lang="ts">
	import Icon from './Icon.svelte';

	const { ...rest } = $props();
</script>

<Icon icon="dashicons:arrow-right-alt2" {...rest} />
