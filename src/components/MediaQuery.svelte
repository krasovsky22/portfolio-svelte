<!-- based on https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.52.0 -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		query: string;
		content: Snippet<[boolean]>;
	}

	let { query, content }: Props = $props();

	let mql: MediaQueryList;
	let mqlListener: (event: MediaQueryListEvent) => void;
	let wasMounted = $state(false);
	let matches = $state(false);

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	function addNewListener(query: string) {
		mql = window.matchMedia(query);
		mqlListener = (event) => {
			matches = event.matches;
		};
		mql.addEventListener('change', mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener);
		}
	}
	$effect(() => {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	});
</script>

{#if matches}
	{@render content(matches)}
{:else}
	<div class="mt-4 flex w-full flex-col items-center justify-center text-center">
		<div class="my-auto"><h1>No Mobile Version Available Yet</h1></div>
	</div>
{/if}
