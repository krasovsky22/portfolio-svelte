<!-- based on https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.52.0 -->
<script lang="ts">
	import { onMount } from 'svelte';

	const { query } = $props<{ query: string }>();

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
			console.log('aaa', event);
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

<slot {matches} />
