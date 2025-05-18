<script lang="ts">
	import Icon from './Icon.svelte';

	const { ...rest } = $props();
</script>

<Icon icon="ph:sidebar-simple-fill" {...rest} />
