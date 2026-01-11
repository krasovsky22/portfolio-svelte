<script lang="ts">
    import type { POSSIBLE_ROUTES } from '@stores/routing';


    interface Props {
        icon: any;
        url: POSSIBLE_ROUTES;
        display: string;
        isActive: boolean;
        classNames?: string;
        innerClasses?: string;
        [key: string]: any
    }

    let {
        icon,
        url,
        display,
        isActive,
        classNames = '',
        innerClasses = '',
        ...rest
    }: Props = $props();

    const SvelteComponent = $derived(icon);
</script>
<a href={url} class={`p-1 hover:bg-[var(--white-color-hover)] dark:hover:bg-[var(--dark-color-hover)] text-[var(--white-color-text)] dark:text-[var(--dark-color-text)] ${classNames}`} class:bg-[var(--white-color-hover)]={isActive} class:dark:bg-[var(--dark-color-hover)]={isActive} {...rest}
	><div class={`px-2 w-full flex gap-1 items-center ${innerClasses}`}>
		<SvelteComponent size="14" />
		<div>{display}</div>
	</div>
</a>
