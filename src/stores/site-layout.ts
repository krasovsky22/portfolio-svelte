import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const siteLayout = writable({
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
