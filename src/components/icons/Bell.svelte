<script lang="ts">
	import Icon from './Icon.svelte';

	const { ...rest } = $props();
</script>

<Icon icon="bytesize:bell" {...rest} />
