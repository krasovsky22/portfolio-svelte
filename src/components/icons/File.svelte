<script>
	import Icon from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

	export let size = DEFAULT_ICON_SIZE;
</script>

<Icon icon="line-md:document" width={size} height={size} />
