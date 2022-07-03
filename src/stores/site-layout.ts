import { writable } from 'svelte/store';


export const siteLayout = writable({
    showPrimaryBar: true,
    showConsoleBar: true,
    showRightBar: false,
});
