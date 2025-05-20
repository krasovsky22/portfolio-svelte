<!-- based on https://svelte.dev/repl/26eb44932920421da01e2e21539494cd?version=3.52.0 -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	import {
		siteLayout,
		FULL_SCREEN_MEDIA_QUERY,
		IPAD_MEDIA_QUERY,
		MOBILE_MEDIA_QUERY
	} from '@stores/site-layout';

	interface ViewportState {
		isFullScreen: boolean;
		isIpad: boolean;
		isMobile: boolean;
	}

	interface Props {
		content: Snippet<[ViewportState]>;
	}

	let { content }: Props = $props();

	let mql: MediaQueryList;
	let mqlListener: (event: MediaQueryListEvent | MediaQueryList) => void;
	let wasMounted = $state(false);

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	function addNewListener(query: string) {
		mql = window.matchMedia(query);

		mqlListener = (event: MediaQueryListEvent | MediaQueryList) => {
			if (!event.matches) {
				return;
			}

			if (query === FULL_SCREEN_MEDIA_QUERY) {
				$siteLayout.isFullScreen = event.matches;
				$siteLayout.isIpadVersion = false;
				$siteLayout.isMobileVersion = false;
			} else if (query === IPAD_MEDIA_QUERY) {
				$siteLayout.isIpadVersion = true;
				$siteLayout.isFullScreen = false;
				$siteLayout.isMobileVersion = false;
			} else if (query === MOBILE_MEDIA_QUERY) {
				$siteLayout.isMobileVersion = event.matches;
				$siteLayout.isFullScreen = false;
				$siteLayout.isIpadVersion = false;
			}
		};

		mql.addEventListener('change', mqlListener);
		// Initial check
		mqlListener(mql);
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener);
		}
	}

	$effect(() => {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(FULL_SCREEN_MEDIA_QUERY);
			addNewListener(IPAD_MEDIA_QUERY);
			addNewListener(MOBILE_MEDIA_QUERY);
		}
	});
</script>

{@render content({
	isIpad: $siteLayout.isIpadVersion,
	isMobile: $siteLayout.isMobileVersion,
	isFullScreen: $siteLayout.isFullScreen
})}
