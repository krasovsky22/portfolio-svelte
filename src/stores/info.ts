import { readable } from 'svelte/store';

export const info = readable({
	email: {
		url: 'vlad.krasovski@yahoo.com',
		name: 'vlad.krasovski@yahoo.com'
	},
	github: {
		url: 'https://github.com/krasovsky22',
		name: 'https://github.com/krasovsky22'
	},
	discord: {
		name: 'RandomPotato#3877',
		url: 'https://discord.com/users/3877'
	},
    linkedIn: {
        name: 'vlad-krasovski-1ba85542',
		url: 'https://www.linkedin.com/in/vlad-krasovski-1ba85542'
    },
    codeSource: {
        name: 'portfolio-svelte',
		url: 'https://github.com/krasovsky22/portfolio-svelte'
    }
});
