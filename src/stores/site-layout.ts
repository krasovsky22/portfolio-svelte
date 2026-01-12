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

const initialDarkMode = getInitialDarkMode();

export const siteLayout = writable({
	isFullScreen: isFullScreen.current,
	isIpadVersion: isIpadVersion.current,
	isMobileVersion: isMobileVersion.current,

	showRightBar: !isMobileVersion.current,
	showPrimaryBar: true,
	showConsoleBar: false,
	darkMode: initialDarkMode,
	activeActivityBarTab: 'Explorer'
});

// Initialize CSS variables on page load
if (browser) {
	const root = document.documentElement;
	if (initialDarkMode) {
		root.classList.add('dark');
		root.style.setProperty('--background-color', 'var(--dark-color-main-bg)');
		root.style.setProperty('--background-color-sidebar', 'var(--dark-color-sidebar-bg)');
		root.style.setProperty('--background-color-panel', 'var(--dark-color-panel-bg)');
		root.style.setProperty('--background-color-hover', 'var(--dark-color-hover)');
		root.style.setProperty('--background-color-overlay', 'rgba(0, 0, 0, 0.8)');
		root.style.setProperty('--background-color-modal-header', 'var(--dark-color-sidebar-bg)');
		root.style.setProperty('--background-color-modal-content', 'var(--dark-color-panel-bg)');
		root.style.setProperty('--text-color', 'var(--dark-color-text)');
		root.style.setProperty('--text-color-muted', 'var(--dark-color-text-muted)');
	} else {
		root.classList.remove('dark');
		root.style.setProperty('--background-color', 'var(--white-color-main-bg)');
		root.style.setProperty('--background-color-sidebar', 'var(--white-color-sidebar-bg)');
		root.style.setProperty('--background-color-panel', 'var(--white-color-panel-bg)');
		root.style.setProperty('--background-color-hover', 'var(--white-color-hover)');
		root.style.setProperty('--background-color-overlay', 'rgba(0, 0, 0, 0.6)');
		root.style.setProperty('--background-color-modal-header', 'var(--white-color-sidebar-bg)');
		root.style.setProperty('--background-color-modal-content', 'var(--white-color-panel-bg)');
		root.style.setProperty('--text-color', 'var(--white-color-text)');
		root.style.setProperty('--text-color-muted', 'var(--white-color-text-muted)');
	}
}

siteLayout.subscribe(({ darkMode }) => {
	if (!browser) {
		return;
	}

	const root = document.documentElement;
	
	if (darkMode) {
		root.classList.add('dark');
		root.style.setProperty('--background-color', 'var(--dark-color-main-bg)');
		root.style.setProperty('--background-color-sidebar', 'var(--dark-color-sidebar-bg)');
		root.style.setProperty('--background-color-panel', 'var(--dark-color-panel-bg)');
		root.style.setProperty('--background-color-hover', 'var(--dark-color-hover)');
		root.style.setProperty('--background-color-overlay', 'rgba(0, 0, 0, 0.8)');
		root.style.setProperty('--background-color-modal-header', 'var(--dark-color-sidebar-bg)');
		root.style.setProperty('--background-color-modal-content', 'var(--dark-color-panel-bg)');
		root.style.setProperty('--text-color', 'var(--dark-color-text)');
		root.style.setProperty('--text-color-muted', 'var(--dark-color-text-muted)');
	} else {
		root.classList.remove('dark');
		root.style.setProperty('--background-color', 'var(--white-color-main-bg)');
		root.style.setProperty('--background-color-sidebar', 'var(--white-color-sidebar-bg)');
		root.style.setProperty('--background-color-panel', 'var(--white-color-panel-bg)');
		root.style.setProperty('--background-color-hover', 'var(--white-color-hover)');
		root.style.setProperty('--background-color-overlay', 'rgba(0, 0, 0, 0.6)');
		root.style.setProperty('--background-color-modal-header', 'var(--white-color-sidebar-bg)');
		root.style.setProperty('--background-color-modal-content', 'var(--white-color-panel-bg)');
		root.style.setProperty('--text-color', 'var(--white-color-text)');
		root.style.setProperty('--text-color-muted', 'var(--white-color-text-muted)');
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
