import { writable } from 'svelte/store';

export const siteLayout = writable({
    showRightBar: false,
    showPrimaryBar: true,
    showConsoleBar: false,
    activeActivityBarTab: 'Explorer'
});
