<script lang="ts">
	import Icon from './Icon.svelte';

	const { color = 'orange', ...rest } = $props();
</script>

<Icon icon="icon-park-outline:code-brackets" {color} {...rest} />
