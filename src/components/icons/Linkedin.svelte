<script lang="ts">
	import Icon from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

	let { size = DEFAULT_ICON_SIZE } = $props();
</script>

<Icon icon="akar-icons:linkedin-box-fill" width={size} height={size} />
