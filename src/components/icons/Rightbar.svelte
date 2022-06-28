<script>
	import Icon from '@iconify/svelte';

	import { DEFAULT_ICON_SIZE } from './constants';
	export let size = DEFAULT_ICON_SIZE;
</script>

<Icon icon="ph:sidebar-simple-fill" rotate={2} width={size} height={size} />
