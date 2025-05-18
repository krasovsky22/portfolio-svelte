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
<a href={url} class={`p-1 hover:bg-slate-200 hover:dark:bg-slate-400 ${classNames}`} class:bg-zinc-300={isActive} class:dark:bg-zinc-700={isActive} {...rest}
	><div class={`px-2 w-full flex gap-1 items-center ${innerClasses}`}>
		<SvelteComponent size="14" />
		<div>{display}</div>
	</div>
</a>
