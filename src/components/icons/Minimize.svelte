<script lang="ts">
	import Icon from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

	let { size = DEFAULT_ICON_SIZE, ...rest } = $props();
</script>

<Icon icon="teenyicons:minimise-alt-solid" width={size} height={size} {...rest} />
