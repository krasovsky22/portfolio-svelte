<script>
	import Icon from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

	export let size = DEFAULT_ICON_SIZE;
    export let color = 'yellow';
</script>

<Icon icon="icon-park-outline:code-brackets" width={size} height={size} {color} {...$$restProps} />
