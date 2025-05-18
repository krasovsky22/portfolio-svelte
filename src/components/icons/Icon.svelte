<script lang="ts">
  import Icon, { type IconProps } from '@iconify/svelte';
	import { DEFAULT_ICON_SIZE } from './constants';

  type Props = {
    icon: string;
    size?: number;
  };

  const { icon, size = DEFAULT_ICON_SIZE, ...rest }: Props & Omit<IconProps, 'icon'> = $props();
</script>

<Icon icon={icon} width={size} height={size} {...rest} />
