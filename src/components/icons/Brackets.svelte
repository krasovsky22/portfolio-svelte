<script lang="ts">
	import Icon from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

	interface Props {
		size?: any;
		color?: string;
		[key: string]: any
	}

	let { size = DEFAULT_ICON_SIZE, color = 'orange', ...rest }: Props = $props();
</script>

<Icon icon="icon-park-outline:code-brackets" width={size} height={size} {color} {...rest} />
