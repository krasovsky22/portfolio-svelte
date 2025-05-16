<script lang="ts">
	import Icon from '@iconify/svelte';

	import { DEFAULT_ICON_SIZE } from './constants';
	let { size = DEFAULT_ICON_SIZE } = $props();
</script>

<Icon icon="ph:square-half-bottom-fill" width={size} height={size} />
