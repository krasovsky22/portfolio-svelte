<script lang="ts">
	import Icon from '@iconify/svelte';

	import { DEFAULT_ICON_SIZE } from './constants';
	let { size = DEFAULT_ICON_SIZE } = $props();
</script>

<Icon icon="ph:sidebar-simple-fill" rotate={2} width={size} height={size} />
