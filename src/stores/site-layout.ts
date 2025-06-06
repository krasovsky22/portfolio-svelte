import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { MediaQuery } from 'svelte/reactivity';

export const FULL_SCREEN_MEDIA_QUERY = '(min-width: 1280px)';
export const IPAD_MEDIA_QUERY = '(min-width: 768px) and (max-width: 1024px)';
export const MOBILE_MEDIA_QUERY = '(max-width: 767px)';

const isFullScreen = new MediaQuery(FULL_SCREEN_MEDIA_QUERY);
const isIpadVersion = new MediaQuery(IPAD_MEDIA_QUERY);
const isMobileVersion = new MediaQuery(MOBILE_MEDIA_QUERY);
export const siteLayout = writable({
	isFullScreen: isFullScreen.current,
	isIpadVersion: isIpadVersion.current,
	isMobileVersion: isMobileVersion.current,

	showRightBar: true,
	showPrimaryBar: true,
	showConsoleBar: false,
	darkMode:
		browser &&
		(localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)')?.matches)),
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
