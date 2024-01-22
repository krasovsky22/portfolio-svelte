import { writable } from 'svelte/store';

export const siteLayout = writable({
    showRightBar: false,
    showPrimaryBar: true,
    showConsoleBar: false,
    darkMode: false,
    activeActivityBarTab: 'Explorer'
});

siteLayout.subscribe(({darkMode}) => {
	if(darkMode) {
        document.documentElement.classList.add('dark');
    }
    else{
         document.documentElement.classList.remove('dark');
    }
}); // logs '0'
