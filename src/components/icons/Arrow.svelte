<script lang="ts">
	import Icon from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

	let { size = DEFAULT_ICON_SIZE, ...rest } = $props();
</script>

<Icon icon="dashicons:arrow-right-alt2" width={size} height={size} {...rest} />
