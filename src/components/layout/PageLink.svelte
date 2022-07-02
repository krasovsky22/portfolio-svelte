<script lang="ts">
    import type { POSSIBLE_ROUTES } from '@stores/routing';

    export let icon: any;
    export let url: POSSIBLE_ROUTES;
    export let display: string;
    export let isActive: boolean;

    export let classNames: string ='';
    export let innerClasses: string = '';
</script>
<a href={url} class={`p-1 hover:bg-slate-500 ${classNames}`} class:bg-zinc-700={isActive} {...$$restProps}
	><div class={`px-2 w-full flex gap-1 items-center ${innerClasses}`}>
		<svelte:component this={icon} size="14" />
		<div>{display}</div>
	</div>
</a>
