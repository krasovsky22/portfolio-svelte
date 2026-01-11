import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { MediaQuery } from 'svelte/reactivity';

export const FULL_SCREEN_MEDIA_QUERY = '(min-width: 1280px)';
export const IPAD_MEDIA_QUERY = '(min-width: 768px) and (max-width: 1024px)';
export const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

const isFullScreen = new MediaQuery(FULL_SCREEN_MEDIA_QUERY);
const isIpadVersion = new MediaQuery(IPAD_MEDIA_QUERY);
const isMobileVersion = new MediaQuery(MOBILE_MEDIA_QUERY);
// Determine initial dark mode state
// Priority: 1. localStorage.theme (if set) 2. System preference
const getInitialDarkMode = (): boolean => {
	if (!browser) return false;
	
	// If localStorage.theme is explicitly set, use that value
	if ('theme' in localStorage) {
		return localStorage.theme === 'dark';
	}
	
	// Otherwise, fall back to system preference
	return window.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false;
};

export const siteLayout = writable({
	isFullScreen: isFullScreen.current,
	isIpadVersion: isIpadVersion.current,
	isMobileVersion: isMobileVersion.current,

	showRightBar: !isMobileVersion.current,
	showPrimaryBar: true,
	showConsoleBar: false,
	darkMode: getInitialDarkMode(),
	activeActivityBarTab: 'Explorer'
});

siteLayout.subscribe(({ darkMode }) => {
	if (!browser) {
		return;
	}

	if (darkMode) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
});

export const toggleDarkMode = () => {
	siteLayout.update((store) => {
		if (store.darkMode) {
			localStorage.theme = 'light';
		} else {
			localStorage.theme = 'dark';
		}

		return {
			...store,
			darkMode: !store.darkMode
		};
	});
};

export const toggleRightBar = () => {
	siteLayout.update((store) => ({
		...store,
		showRightBar: !store.showRightBar
	}));
};
