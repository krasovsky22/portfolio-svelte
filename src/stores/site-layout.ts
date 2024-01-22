import { browser } from '$app/env';
import { writable } from 'svelte/store';

export const siteLayout = writable({
    showRightBar: false,
    showPrimaryBar: true,
    showConsoleBar: false,
    darkMode: false,
    activeActivityBarTab: 'Explorer'
});

siteLayout.subscribe(({darkMode}) => {

    if(! browser) {
        return;
    }

	if (darkMode) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
});

export const toggleDarkMode = () => {
    siteLayout.update(store => {
        if(store.darkMode) {
            localStorage.theme = 'light';
        }
        else{
            localStorage.theme = 'dark';
        }

        return {
            ...store,
            darkMode: !store.darkMode
        }
    })
}
